import React from "react";
import { Text, View } from "tamagui";
import { trpc } from "@/utils/trpc";

const Home = () => {
  const firstPost = trpc.firstPost.useQuery();

  return (
    <View
      mt={20}
      backgroundColor={"$red200"}
      flex={1}
      justifyContent="center"
      alignItems="center"
    >
      <Text color={"$blue5Dark"}>hello</Text>
      {/* <Text color="white" fontSize="3xl">
        {firstPost.data?.title}
      </Text>
      <View maxWidth={{ web: 400, native: "auto" }} mx={{ native: 3 }}>
        <Text color="white" fontSize="md">
          {firstPost.data?.content}
        </Text>
      </View> */}
    </View>
  );
};

export default Home;
