"use client";

import { getAllPosts } from "@/services/getPosts";
import { usePosts } from "@/store";
import Link from "next/link";
import { useEffect } from "react";
import useSWR from "swr";
import { useShallow } from "zustand/shallow";

const Posts = () => {
  const { data: posts, isLoading } = useSWR("posts", getAllPosts);
  // const [posts, loading, getAllPosts] = usePosts(
  //   useShallow((state) => [state.posts, state.loading, state.getAllPosts])
  // );

  // useEffect(() => {
  //   getAllPosts();
  // }, [getAllPosts]);

  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};
export { Posts };
