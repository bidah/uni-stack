import React from "react";
import { Text, View } from "react-native";
import { trpc } from "@/utils/trpc";

const Home = () => {
  const firstPost = trpc.firstPost.useQuery();

  return (
    <View className="mt-20 bg-gray-300 flex-1 justify-center items-center">
      <Text className="text-white text-3xl">{firstPost.data?.title}</Text>
      <View className="web:max-w-[400px] native:mx-3">
        <Text className="text-white text-md">{firstPost.data?.content}</Text>
      </View>
    </View>
  );
};

export default Home;
