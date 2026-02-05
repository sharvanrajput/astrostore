import { Link, useRouter } from "expo-router";
import React, { useState, useMemo } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { Button, Checkbox, TextInput } from "react-native-paper";
import MultiSelectDropdown from "@/components/MultiSelectDropdown";
import { registerTypes, userAuthStore } from "@/store/authStore";

interface RegistrationPayload {
  fullName: string;
  userName: string;
  email: string;
  password: string;
  password_confirmation: string;
  expertise: string[];
  languages: string[];
  categories: string[];
  is_family_astrologer: number;
  family_astrology_details: string | null;
  address: string | null;
  pincode: string | null;
}

interface Option {
  value: string;
  label: string;
}

const languageOptions: Option[] = [
  { value: "english", label: "English" },
  { value: "hindi", label: "Hindi" },
  { value: "tamil", label: "Tamil" },
  { value: "punjabi", label: "Punjabi" },
  { value: "marathi", label: "Marathi" },
  { value: "gujarati", label: "Gujarati" },
  { value: "bengali", label: "Bengali" },
  { value: "french", label: "French" },
  { value: "odia", label: "Odia" },
  { value: "telugu", label: "Telugu" },
  { value: "kannada", label: "Kannada" },
  { value: "malayalam", label: "Malayalam" },
  { value: "sanskrit", label: "Sanskrit" },
  { value: "assamese", label: "Assamese" },
  { value: "german", label: "German" },
  { value: "spanish", label: "Spanish" },
  { value: "marwari", label: "Marwari" },
  { value: "manipuri", label: "Manipuri" },
  { value: "urdu", label: "Urdu" },
  { value: "sindhi", label: "Sindhi" },
  { value: "kashmiri", label: "Kashmiri" },
  { value: "bodo", label: "Bodo" },
  { value: "nepali", label: "Nepali" },
  { value: "konkani", label: "Konkani" },
  { value: "maithili", label: "Maithili" },
  { value: "arabic", label: "Arabic" },
  { value: "bhojpuri", label: "Bhojpuri" },
  { value: "dutch", label: "Dutch" },
  { value: "rajasthani", label: "Rajasthani" },
];

const categoryOptions: Option[] = [
  { value: "love", label: "Love" },
  { value: "marriage", label: "Marriage" },
  { value: "health", label: "Health" },
  { value: "wealth", label: "Wealth" },
  { value: "education", label: "Education" },
  { value: "career", label: "Career" },
  { value: "legal", label: "Legal" },
  { value: "remedies", label: "Remedies" },
  { value: "finance", label: "Finance" },
  { value: "parents", label: "Parents" },
];

const expertiseOptions: Option[] = [
  { value: "signature_reading", label: "Signature Reading" },
  { value: "vedic", label: "Vedic" },
  { value: "tarot", label: "Tarot" },
  { value: "kp", label: "KP" },
  { value: "numerology", label: "Numerology" },
  { value: "lal_kitab", label: "Lal Kitab" },
  { value: "psychic", label: "Psychic" },
  { value: "palmistry", label: "Palmistry" },
  { value: "cartomancy", label: "Cartomancy" },
  { value: "prashana", label: "Prashana" },
  { value: "loshu_grid", label: "Loshu Grid" },
  { value: "nadi", label: "Nadi" },
  { value: "face_reading", label: "Face Reading" },
  { value: "horary", label: "Horary" },
  { value: "life_coach", label: "Life Coach" },
  { value: "western", label: "Western" },
  { value: "gemology", label: "Gemology" },
  { value: "vastu", label: "Vastu" },
];

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const [isFamilyAstrologer, setIsFamilyAstrologer] = useState("");
  const [familyDetails, setFamilyDetails] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState(1);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (field: string, value: any): string => {
    switch (field) {
      case "fullName":
        if (!value.trim()) return "Full Name is required";
        if (value.trim().length < 3)
          return "Full Name must be at least 3 characters";
        return "";

      case "userName":
        if (!value.trim()) return "Username is required";
        if (value.trim().length < 3)
          return "Username must be at least 3 characters";
        if (!/^[a-zA-Z0-9_]+$/.test(value))
          return "Only letters, numbers, and underscores allowed";
        return "";

      case "email":
        if (!value.trim()) return "Email is required";
        if (!/\S+@\S+\.\S+/.test(value)) return "Invalid email address";
        return "";

      case "password":
        if (!value) return "Password is required";
        if (value.length < 6) return "Password must be at least 6 characters";
        if (value.length > 20) return "Password must not exceed 20 characters";
        return "";

      case "confirmPassword":
        if (!value) return "Please confirm your password";
        if (value !== password) return "Passwords do not match";
        return "";

      case "expertise":
        if (value.length === 0) return "Select at least one expertise";
        return "";

      case "languages":
        if (value.length === 0) return "Select at least one language";
        return "";

      case "categories":
        if (value.length === 0) return "Select at least one category";
        return "";

      case "isFamilyAstrologer":
        if (!["0", "1"].includes(value)) return "Please make a selection";
        return "";

      case "familyDetails":
        if (isFamilyAstrologer === "1" && !value.trim())
          return "Family astrology details are required";
        if (
          isFamilyAstrologer === "1" &&
          value.trim() &&
          value.trim().length < 20
        )
          return "Provide at least 20 characters";
        return "";

      case "pincode":
        if (value.trim() && !/^\d{6}$/.test(value))
          return "Pincode must be 6 digits";
        return "";

      default:
        return "";
    }
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      newErrors.fullName = validateField("fullName", fullName);
      newErrors.userName = validateField("userName", userName);
      newErrors.email = validateField("email", email);
      newErrors.password = validateField("password", password);
      newErrors.confirmPassword = validateField(
        "confirmPassword",
        confirmPassword,
      );
    } else if (currentStep === 2) {
      newErrors.expertise = validateField("expertise", selectedExpertise);
      newErrors.languages = validateField("languages", selectedLanguages);
      newErrors.categories = validateField("categories", selectedCategories);
    } else if (currentStep === 3) {
      newErrors.isFamilyAstrologer = validateField(
        "isFamilyAstrologer",
        isFamilyAstrologer,
      );
      newErrors.familyDetails = validateField("familyDetails", familyDetails);
      newErrors.pincode = validateField("pincode", pincode);
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 3));
      setErrors({});
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
    setErrors({});
  };

  const handleRegister = async () => {
    if (!validateStep(3)) return;

    if (!acceptTerms) {
      setErrors({ terms: "Please accept terms and conditions" });
      return;
    }

    const payload: registerTypes = {
      fullName: fullName.trim(),
      userName: userName.trim(),
      email: email.trim(),
      password: password,
      // password_confirmation: confirmPassword,
      expertise: selectedExpertise,
      languages: selectedLanguages,
      categories: selectedCategories,
      is_family_astrologer: Number(isFamilyAstrologer),
      family_astrology_details:
        isFamilyAstrologer === "1" ? familyDetails.trim() : null,
      address: address.trim(),
      pincode: pincode.trim(),
    };

    console.log("Registration Payload:", payload);
  };

  const progressPercentage = useMemo(() => (step / 3) * 100, [step]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>
            Step {step} of 3 -{" "}
            {step === 1
              ? "Personal Info"
              : step === 2
                ? "Professional Details"
                : "Additional Details"}
          </Text>

          <View style={styles.progressBar}>
            <View
              style={[styles.progressFill, { width: `${progressPercentage}%` }]}
            />
          </View>
        </View>

        {step === 1 && (
          <View>
            <TextInput
              label="Full Name *"
              value={fullName}
              onChangeText={(text) => {
                setFullName(text);
                setErrors({ ...errors, fullName: "" });
              }}
              mode="outlined"
              left={<TextInput.Icon icon="account-outline" />}
              style={styles.input}
              outlineColor="#E5E7EB"
              activeOutlineColor="#FACC15"
              error={!!errors.fullName}
            />
            {errors.fullName && (
              <Text style={styles.errorText}>{errors.fullName}</Text>
            )}

            <TextInput
              label="Username *"
              value={userName}
              onChangeText={(text) => {
                setUserName(text);
                setErrors({ ...errors, userName: "" });
              }}
              mode="outlined"
              autoCapitalize="none"
              left={<TextInput.Icon icon="account-circle-outline" />}
              style={styles.input}
              outlineColor="#E5E7EB"
              activeOutlineColor="#FACC15"
              error={!!errors.userName}
            />
            {errors.userName && (
              <Text style={styles.errorText}>{errors.userName}</Text>
            )}

            <TextInput
              label="Email *"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setErrors({ ...errors, email: "" });
              }}
              mode="outlined"
              keyboardType="email-address"
              autoCapitalize="none"
              left={<TextInput.Icon icon="email-outline" />}
              style={styles.input}
              outlineColor="#E5E7EB"
              activeOutlineColor="#FACC15"
              error={!!errors.email}
            />
            {errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <TextInput
              label="Password *"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setErrors({ ...errors, password: "", confirmPassword: "" });
              }}
              mode="outlined"
              secureTextEntry={!showPassword}
              left={<TextInput.Icon icon="lock-outline" />}
              right={
                <TextInput.Icon
                  icon={showPassword ? "eye-off" : "eye"}
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
              style={styles.input}
              outlineColor="#E5E7EB"
              activeOutlineColor="#FACC15"
              error={!!errors.password}
            />
            {errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <TextInput
              label="Confirm Password *"
              value={confirmPassword}
              onChangeText={(text) => {
                setConfirmPassword(text);
                setErrors({ ...errors, confirmPassword: "" });
              }}
              mode="outlined"
              secureTextEntry={!showConfirmPassword}
              left={<TextInput.Icon icon="lock-check-outline" />}
              right={
                <TextInput.Icon
                  icon={showConfirmPassword ? "eye-off" : "eye"}
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              }
              style={styles.input}
              outlineColor="#E5E7EB"
              activeOutlineColor="#FACC15"
              error={!!errors.confirmPassword}
            />
            {errors.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            )}
          </View>
        )}

        {step === 2 && (
          <View>
            <MultiSelectDropdown
              label="Expertise *"
              options={expertiseOptions}
              selectedValues={selectedExpertise}
              onSelectionChange={(values) => {
                setSelectedExpertise(values);
                setErrors({ ...errors, expertise: "" });
              }}
              placeholder="Select your areas of expertise"
              error={errors.expertise}
            />

            <MultiSelectDropdown
              label="Languages *"
              options={languageOptions}
              selectedValues={selectedLanguages}
              onSelectionChange={(values) => {
                setSelectedLanguages(values);
                setErrors({ ...errors, languages: "" });
              }}
              placeholder="Select languages you speak"
              error={errors.languages}
            />

            <MultiSelectDropdown
              label="Categories *"
              options={categoryOptions}
              selectedValues={selectedCategories}
              onSelectionChange={(values) => {
                setSelectedCategories(values);
                setErrors({ ...errors, categories: "" });
              }}
              placeholder="Select consultation categories"
              error={errors.categories}
            />
          </View>
        )}

        {step === 3 && (
          <View>
            <Text style={styles.sectionLabel}>
              Are you a Family Astrologer? *
            </Text>
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                onPress={() => {
                  setIsFamilyAstrologer("1");
                  setErrors({ ...errors, isFamilyAstrologer: "" });
                }}
                style={[
                  styles.optionButton,
                  isFamilyAstrologer === "1" && styles.optionButtonActive,
                  errors.isFamilyAstrologer && styles.optionButtonError,
                ]}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.optionButtonText,
                    isFamilyAstrologer === "1" && styles.optionButtonTextActive,
                  ]}
                >
                  Yes
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setIsFamilyAstrologer("0");
                  setErrors({ ...errors, isFamilyAstrologer: "" });
                }}
                style={[
                  styles.optionButton,
                  isFamilyAstrologer === "0" && styles.optionButtonActive,
                  errors.isFamilyAstrologer && styles.optionButtonError,
                ]}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.optionButtonText,
                    isFamilyAstrologer === "0" && styles.optionButtonTextActive,
                  ]}
                >
                  No
                </Text>
              </TouchableOpacity>
            </View>
            {errors.isFamilyAstrologer && (
              <Text style={styles.errorText}>{errors.isFamilyAstrologer}</Text>
            )}

            {isFamilyAstrologer === "1" && (
              <>
                <TextInput
                  label="Family Astrology Details *"
                  value={familyDetails}
                  onChangeText={(text) => {
                    setFamilyDetails(text);
                    setErrors({ ...errors, familyDetails: "" });
                  }}
                  mode="outlined"
                  multiline
                  numberOfLines={4}
                  placeholder="Describe your experience and expertise..."
                  style={styles.input}
                  outlineColor="#E5E7EB"
                  activeOutlineColor="#FACC15"
                  error={!!errors.familyDetails}
                />
                {errors.familyDetails && (
                  <Text style={styles.errorText}>{errors.familyDetails}</Text>
                )}
              </>
            )}

            <TextInput
              label="Address (Optional)"
              value={address}
              onChangeText={setAddress}
              mode="outlined"
              multiline
              numberOfLines={3}
              placeholder="Enter your complete address"
              style={styles.input}
              outlineColor="#E5E7EB"
              activeOutlineColor="#FACC15"
            />

            <TextInput
              label="Pincode (Optional)"
              value={pincode}
              onChangeText={(text) => {
                setPincode(text);
                setErrors({ ...errors, pincode: "" });
              }}
              keyboardType="numeric"
              mode="outlined"
              placeholder="110001"
              maxLength={6}
              style={styles.input}
              outlineColor="#E5E7EB"
              activeOutlineColor="#FACC15"
              error={!!errors.pincode}
            />
            {errors.pincode && (
              <Text style={styles.errorText}>{errors.pincode}</Text>
            )}
          </View>
        )}

        {step === 3 && (
          <View style={styles.termsContainer}>
            <Checkbox
              status={acceptTerms ? "checked" : "unchecked"}
              onPress={() => {
                setAcceptTerms(!acceptTerms);
                setErrors({ ...errors, terms: "" });
              }}
              color="#FACC15"
            />
            <View style={styles.termsTextContainer}>
              <Text style={styles.termsText}>I agree to the </Text>
              <TouchableOpacity>
                <Text style={styles.termsLink}>Terms & Conditions</Text>
              </TouchableOpacity>
              <Text style={styles.termsText}> and </Text>
              <TouchableOpacity>
                <Text style={styles.termsLink}>Privacy Policy</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {errors.terms && <Text style={styles.errorText}>{errors.terms}</Text>}

        <View style={styles.navigationButtons}>
          {step > 1 && (
            <Button
              mode="contained"
              onPress={handleBack}
              style={styles.backButton}
              buttonColor="#6B7280"
              contentStyle={styles.buttonContent}
            >
              Back
            </Button>
          )}

          {step < 3 ? (
            <Button
              mode="contained"
              onPress={handleNext}
              style={styles.nextButton}
              buttonColor="#FACC15"
              contentStyle={styles.buttonContent}
            >
              Next
            </Button>
          ) : (
            <Button
              mode="contained"
              onPress={handleRegister}
              style={styles.submitButton}
              // disabled={loading}
              buttonColor="#16A34A"
              contentStyle={styles.buttonContent}
            >
              {/* {loading ? "Loading..." : "Submit"} */}
              Submit
            </Button>
          )}
        </View>

        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Or sign up with</Text>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <Link href="/auth/Login" asChild>
            <TouchableOpacity>
              <Text style={styles.loginLink}>Login</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    color: "#6B7280",
    marginBottom: 16,
  },
  progressBar: {
    width: "100%",
    height: 6,
    backgroundColor: "#E5E7EB",
    borderRadius: 3,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#FACC15",
    borderRadius: 3,
  },
  input: {
    marginBottom: 4,
  },
  errorText: {
    color: "#EF4444",
    fontSize: 12,
    marginBottom: 12,
    marginLeft: 4,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 12,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 16,
  },
  optionButton: {
    flex: 1,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  optionButtonActive: {
    backgroundColor: "#FACC15",
    borderColor: "#FACC15",
  },
  optionButtonError: {
    borderColor: "#EF4444",
  },
  optionButtonText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#374151",
  },
  optionButtonTextActive: {
    color: "#fff",
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
    marginTop: 8,
  },
  termsTextContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    paddingTop: 8,
  },
  termsText: {
    color: "#374151",
    fontSize: 14,
  },
  termsLink: {
    color: "#3B82F6",
    fontWeight: "600",
    fontSize: 14,
  },
  navigationButtons: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 24,
    marginTop: 16,
  },
  backButton: {
    flex: 1,
  },
  nextButton: {
    flex: 2,
  },
  submitButton: {
    flex: 1,
  },
  buttonContent: {
    paddingVertical: 6,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#D1D5DB",
  },
  dividerText: {
    marginHorizontal: 16,
    color: "#6B7280",
    fontSize: 14,
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  loginText: {
    color: "#6B7280",
    fontSize: 14,
  },
  loginLink: {
    color: "#3B82F6",
    fontWeight: "600",
    fontSize: 14,
  },
});
