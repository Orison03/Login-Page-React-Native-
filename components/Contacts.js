import { View, Text, SafeAreaView, FlatList, Image } from "react-native";
import React, { useState } from "react";
import {avengers} from "../data";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import avengerImage from "../assets/avengers.jpg"

const Contacts = () => {
    const [friends, setFriends] = useState(avengers);
  return (
    <SafeAreaView>
      <FlatList
      keyExtractor={(item) => item .id}
        data={friends}
        renderItem={({ item }) => {
          return (
            <View className="flex-10 p-2 flex-row justify-between items-center">
              {/* image container */}
              <View className="flex-2">
                <Image
                  source={avengerImage}
                  className="h-16 w-16 rounded-full"
                />
              </View>
              {/* title and phone number container */}
              <View className="flex-4">
                <Text className="pb-2 font-semibold">{item.name}</Text>
                <Text>{item.phone}</Text>
              </View>
              {/* icons container */}
              <View className="flex-3 flex-row items-center space-x-3">
                <Ionicons name="ios-call-outline" size={24} color="black" />
                <Ionicons name="md-receipt-outline" size={24} color="black" />
                <MaterialCommunityIcons
                  name="dots-vertical"
                  size={24}
                  color="black"
                />
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Contacts;
