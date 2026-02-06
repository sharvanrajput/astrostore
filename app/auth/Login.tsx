// LoginScreen.jsx
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Button, Checkbox, TextInput } from "react-native-paper";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Handle login logic here
    console.log("Login:", { email, password, rememberMe });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white"
    >
      <ScrollView
        contentContainerClassName="flex-grow justify-center px-6"
        showsVerticalScrollIndicator={false}
      >
        {/* Logo/Header Section */}
        <View className="items-center mb-10">
          <Text className="text-3xl font-bold text-gray-800 mb-2">
            Welcome Back
          </Text>
          <Text className="text-gray-500 text-base">Sign in to continue</Text>
        </View>

        {/* Form Section */}
        <View className="mb-6">
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
            outlineColor="#e5e7eb"
            activeOutlineColor="#FACC15"
          />
        </View>

        {/* Remember Me & Forgot Password */}
        <View className="flex-row items-center justify-between mb-6">
          <View className="flex-row items-center">
            <Checkbox
              status={rememberMe ? "checked" : "unchecked"}
              onPress={() => setRememberMe(!rememberMe)}
              color="#FACC15"
            />
            <Text className="text-gray-700">Remember me</Text>
          </View>
          <TouchableOpacity>
            <Text className="text-blue-600 font-medium">Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <Button
          mode="contained"
          onPress={handleLogin}
          className="mb-4 py-1"
          buttonColor="#FACC15"
          contentStyle={{ paddingVertical: 8 }}
        >
          <Text className="text-white font-semibold text-base">Login</Text>
        </Button>

        {/* Divider */}
        <View className="flex-row items-center mb-4">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="mx-4 text-gray-500">Or continue with</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>

        {/* Sign Up Link */}
        <View className="flex-row justify-center">
          <Text className="text-gray-600">Don&apos;t have an account? </Text>
          <Link href={"/auth/Register"} asChild>
            <TouchableOpacity>
              <Text className="text-blue-600 font-semibold">Sign Up</Text>
            </TouchableOpacity>
          </Link>
        </View>
        <Link href={"/(app)/Index"} asChild>
          <TouchableOpacity>
            <Text className="text-blue-600 font-semibold">Home</Text>
          </TouchableOpacity>
        </Link>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
