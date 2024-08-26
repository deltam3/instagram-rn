import { FlatList } from "react-native";
import posts from "../../../assets/data/posts.json";
import PostListItem from "~/src/components/PostListItem";
import { styled } from "nativewind";

export default function FeedScreen() {
  return (
    <FlatList
      data={posts}
      contentContainerStyle={{
        gap: 10,
        maxWidth: 512,
        width: "100%",
        alignSelf: "center",
      }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <PostListItem post={item} />}
    />
  );
}
