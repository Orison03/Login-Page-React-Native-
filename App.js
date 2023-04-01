import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-[#1CD463]">
      <View className="my-[20%] mx-[10%]">
        {/* login title */}
        <Text className="text-3xl tracking-wide capitalize text-white">
          login to account
        </Text>
        {/* forms */}
        <View className="mt-[30%]">
          {/* username input */}
          <View className="flex-row w-full justify-between items-center border-b border-white pr-5">
            <TextInput
              className="text-xl py-4 w-full text-white"
              placeholder="username"
            />
            <AntDesign name="adduser" size={26} color="white" />
          </View>
          {/* password input */}
          <View className="flex-row w-full justify-between items-center border-b border-white my-8 pr-5">
            <TextInput
              className="text-xl py-4 w-full text-white"
              placeholder="password"
              autoCapitalize="none"
              // secureTextEntry="true"
            />
            <MaterialCommunityIcons
              name="form-textbox-password"
              size={26}
              color="white"
            />
          </View>
          {/* forgot password text */}
          <View className="items-end">
            <Text className="text-sm">forgot password?</Text>
          </View>
        </View>
        {/* button */}
        <TouchableOpacity className="my-12 bg-white py-4 rounded-sm shadow-md">
          <Text className="text-center text-3xl text-[#1CD463] tracking-wide capitalize">
            login
          </Text>
        </TouchableOpacity>
        {/* sign up  */}
        <View className="items-center my-6">
          <Text className="text-base">
            Don't have an account?
            <Text className="text-white"> Sign up</Text>
          </Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
