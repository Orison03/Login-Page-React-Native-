import { View, Text, SafeAreaView, TextInput, Image } from 'react-native'
import { StatusBar } from "expo-status-bar";
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import cat from "../assets/cat.jpg"
import monkey from "../assets/monkey.jpg"
import owl from "../assets/owl.jpg"
import { EvilIcons } from "@expo/vector-icons";

const Pets = () => {
  return (
    <SafeAreaView className="flex-1 bg-purple-400">
      {/* header */}
      <View className="flex-row space-x-10 px-4 items-center my-4 bg-white w-[95%] mx-auto py-4 rounded-md">
        <Ionicons name="ios-search-outline" size={24} color="black" />
        <TextInput placeholder="serach for pets" className="tex-xl w-full" />
      </View>
      {/* items */}
      <View className="bg-white w-[95%] mx-auto flex-row rounded-lg">
        {/* Image container */}
        <View>
          <Image source={owl} className="w-48 h-44" />
        </View>
        <View className="items-start ml-4 space-y-5 pt-2">
          <Text className="text-2xl">Perla</Text>
          <Text>Owl</Text>
          <Text>5 years old</Text>
          <Text className="pr-3">
            <EvilIcons name="location" size={28} color="black" />
            <Text>456rd London</Text>
          </Text>
        </View>
      </View>
      {/* items */}
      <View className="bg-white w-[95%] mx-auto flex-row rounded-lg my-8">
        {/* Image container */}
        <View>
          <Image source={monkey} className="w-48 h-44" />
        </View>
        <View className="items-start ml-4 space-y-5 pt-2">
          <Text className="text-2xl">Wele</Text>
          <Text>monkey</Text>
          <Text>2 years old</Text>
          <Text className="pr-3">
            <EvilIcons name="location" size={28} color="black" />
            <Text>216rd Tokyo</Text>
          </Text>
        </View>
      </View>
      {/* items */}
      <View className="bg-white w-[95%] mx-auto flex-row rounded-lg">
        {/* Image container */}
        <View>
          <Image source={cat} className="w-48 h-44" />
        </View>
        <View className="items-start ml-4 space-y-5 pt-2">
          <Text className="text-2xl">Whiskey</Text>
          <Text>cat</Text>
          <Text>15 years old</Text>
          <Text className="pr-3">
            <EvilIcons name="location" size={28} color="black" />
            <Text>875rd Singapore</Text>
          </Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default Pets