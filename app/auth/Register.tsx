// RegisterScreen.jsx
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { TextInput, Button, Checkbox } from "react-native-paper";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = () => {
    // Handle registration logic here
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
    if (!acceptTerms) {
      console.log("Please accept terms and conditions");
      return;
    }
    console.log("Register:", { fullName, email, password });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white"
    >
      <ScrollView
        contentContainerClassName="flex-grow justify-center px-6 py-8"
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View className="items-center mb-8">
          <Text className="text-3xl font-bold text-gray-800 mb-2">
            Create Account
          </Text>
          <Text className="text-gray-500 text-base">
            Sign up to get started
          </Text>
        </View>

        {/* Form Section */}
        <View className="mb-6">
          <TextInput
            label="Full Name"
            value={fullName}
            onChangeText={setFullName}
            mode="outlined"
            left={<TextInput.Icon icon="account-outline" />}
            className="mb-4"
            outlineColor="#e5e7eb"
            activeOutlineColor="#FACC15"
          />

          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            mode="outlined"
            keyboardType="email-address"
            autoCapitalize="none"
            left={<TextInput.Icon icon="email-outline" />}
            className="mb-4"
            outlineColor="#e5e7eb"
            activeOutlineColor="#FACC15"
          />

          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            mode="outlined"
            secureTextEntry={!showPassword}
            left={<TextInput.Icon icon="lock-outline" />}
            right={
              <TextInput.Icon
                icon={showPassword ? "eye-off" : "eye"}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
            className="mb-4"
            outlineColor="#e5e7eb"
            activeOutlineColor="#FACC15"
          />

          <TextInput
            label="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            mode="outlined"
            secureTextEntry={!showConfirmPassword}
            left={<TextInput.Icon icon="lock-check-outline" />}
            right={
              <TextInput.Icon
                icon={showConfirmPassword ? "eye-off" : "eye"}
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            }
            outlineColor="#e5e7eb"
            activeOutlineColor="#FACC15"
          />
        </View>

        {/* Terms and Conditions */}
        <View className="flex-row items-center mb-6">
          <Checkbox
            status={acceptTerms ? "checked" : "unchecked"}
            onPress={() => setAcceptTerms(!acceptTerms)}
            color="#FACC15"
          />
          <View className="flex-row flex-wrap flex-1">
            <Text className="text-gray-700">I agree to the </Text>
            <TouchableOpacity>
              <Text className="text-blue-600 font-medium">
                Terms & Conditions
              </Text>
            </TouchableOpacity>
            <Text className="text-gray-700"> and </Text>
            <TouchableOpacity>
              <Text className="text-blue-600 font-medium">Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Register Button */}
        <Button
          mode="contained"
          onPress={handleRegister}
          className="mb-4 py-1"
          buttonColor="#FACC15"
          contentStyle={{ paddingVertical: 8 }}
        >
          <Text className="text-white font-semibold text-base">
            Create Account
          </Text>
        </Button>

        {/* Divider */}
        <View className="flex-row items-center mb-4">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="mx-4 text-gray-500">Or sign up with</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>

        {/* Social Sign Up Buttons */}

        {/* Login Link */}
        <View className="flex-row justify-center">
          <Text className="text-gray-600">Already have an account? </Text>
          <Link href={"/auth/Register"}>
            <TouchableOpacity>
              <Text className="text-blue-600 font-semibold">Login</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
