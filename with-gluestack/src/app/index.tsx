import { Box, Text } from "@gluestack-ui/themed";
import { trpc } from "@/utils/trpc";

const Home = () => {
  const firstPost = trpc.firstPost.useQuery();
  return (
    // <Box
    //   flex={1}
    //   justifyContent="center"
    //   alignItems="center"
    //   backgroundColor="$amber300"
    // >
    //   <Text>Open up App.js to start working on your app!</Text>
    // </Box>

    <Box flex={1} justifyContent="center" alignItems="center" mt={20}>
      <Text color="$black" fontSize="$2xl">
        {firstPost.data?.title}
      </Text>
      <Box $web-maxWidth="400px" mx="$3">
        <Text color="$black" fontSize="$md">
          {firstPost.data?.content}
        </Text>
      </Box>
    </Box>
  );
};

export default Home;
