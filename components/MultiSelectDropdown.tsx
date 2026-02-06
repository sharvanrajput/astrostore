import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Checkbox } from 'react-native-paper';
import { ChevronDown, X } from 'lucide-react-native';

interface Option {
  value: string;
  label: string;
}

interface MultiSelectDropdownProps {
  label: string;
  options: Option[];
  selectedValues: string[];
  onSelectionChange: (values: string[]) => void;
  placeholder?: string;
  error?: string;
  maxSelections?: number;
}

export default function MultiSelectDropdown({
  label,
  options,
  selectedValues,
  onSelectionChange,
  placeholder = 'Select options',
  error,
  maxSelections = 3,
}: MultiSelectDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOption = (value: string) => {
    if (selectedValues.includes(value)) {
      onSelectionChange(selectedValues.filter((v) => v !== value));
    } else {
      if (selectedValues.length >= maxSelections) {
        // Don't add more if max selections reached
        return;
      }
      onSelectionChange([...selectedValues, value]);
    }
  };

  const getDisplayText = () => {
    if (selectedValues.length === 0) return placeholder;
    if (selectedValues.length <= 2) {
      return selectedValues
        .map((val) => options.find((opt) => opt.value === val)?.label)
        .join(', ');
    }
    return `${selectedValues.length} selected`;
  };

  const isMaxReached = selectedValues.length >= maxSelections;

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.maxText}>
          (Max {maxSelections} - {selectedValues.length} selected)
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.dropdownButton, error && styles.dropdownError]}
        onPress={() => setIsOpen(true)}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.dropdownText,
            selectedValues.length === 0 && styles.placeholderText,
          ]}
          numberOfLines={1}
        >
          {getDisplayText()}
        </Text>
        <ChevronDown size={20} color="#6B7280" />
      </TouchableOpacity>

      {error && <Text style={styles.errorText}>{error}</Text>}

      {selectedValues.length > 0 && (
        <View style={styles.selectedContainer}>
          {selectedValues.map((value) => {
            const option = options.find((opt) => opt.value === value);
            return (
              <View key={value} style={styles.selectedChip}>
                <Text style={styles.selectedChipText}>{option?.label}</Text>
                <TouchableOpacity onPress={() => toggleOption(value)}>
                  <X size={14} color="#fff" />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      )}

      <Modal
        visible={isOpen}
        transparent
        animationType="slide"
        onRequestClose={() => setIsOpen(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{label}</Text>
              <TouchableOpacity onPress={() => setIsOpen(false)}>
                <X size={24} color="#374151" />
              </TouchableOpacity>
            </View>

            {isMaxReached && (
              <View style={styles.warningContainer}>
                <Text style={styles.warningText}>
                  Maximum {maxSelections} selections allowed. Remove one to add another.
                </Text>
              </View>
            )}

            <ScrollView style={styles.optionsList}>
              {options.map((option) => {
                const isSelected = selectedValues.includes(option.value);
                const isDisabled = !isSelected && isMaxReached;

                return (
                  <TouchableOpacity
                    key={option.value}
                    style={[
                      styles.optionItem,
                      isDisabled && styles.optionItemDisabled,
                    ]}
                    onPress={() => toggleOption(option.value)}
                    activeOpacity={isDisabled ? 1 : 0.7}
                    disabled={isDisabled}
                  >
                    <Checkbox
                      status={isSelected ? 'checked' : 'unchecked'}
                      onPress={() => toggleOption(option.value)}
                      color="#FACC15"
                      disabled={isDisabled}
                    />
                    <Text
                      style={[
                        styles.optionLabel,
                        isDisabled && styles.optionLabelDisabled,
                      ]}
                    >
                      {option.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>

            <TouchableOpacity
              style={styles.doneButton}
              onPress={() => setIsOpen(false)}
            >
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
  maxText: {
    fontSize: 12,
    color: '#6B7280',
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  dropdownError: {
    borderColor: '#EF4444',
  },
  dropdownText: {
    flex: 1,
    fontSize: 15,
    color: '#374151',
  },
  placeholderText: {
    color: '#9CA3AF',
  },
  errorText: {
    color: '#EF4444',
    fontSize: 12,
    marginTop: 4,
  },
  selectedContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  selectedChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FACC15',
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 10,
    gap: 6,
  },
  selectedChipText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  warningContainer: {
    backgroundColor: '#FEF3C7',
    padding: 12,
    marginHorizontal: 20,
    marginTop: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#FACC15',
  },
  warningText: {
    color: '#92400E',
    fontSize: 13,
    fontWeight: '500',
  },
  optionsList: {
    maxHeight: 400,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  optionItemDisabled: {
    opacity: 0.4,
  },
  optionLabel: {
    fontSize: 15,
    color: '#374151',
    marginLeft: 8,
  },
  optionLabelDisabled: {
    color: '#9CA3AF',
  },
  doneButton: {
    backgroundColor: '#FACC15',
    margin: 20,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});