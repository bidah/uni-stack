import React from "react";
import { Text, View } from "tamagui";
import { trpc } from "@/utils/trpc";

const Home = () => {
  const firstPost = trpc.firstPost.useQuery();

  return (
    <View
      backgroundColor={"white"}
      flex={1}
      justifyContent="center"
      alignItems="center"
    >
      <Text color="black" fontSize="$9">
        {firstPost.data?.title}
      </Text>
      <View>
        <Text color="black" fontSize="$4">
          {firstPost.data?.content}
        </Text>
      </View>
    </View>
  );
};

export default Home;
