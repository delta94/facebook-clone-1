
import React, { useState, useEffect } from "react";
import { Post as PostInterface } from "../../../interfaces/interfaces";
import { db } from "../../../firebase";
import Stories from "./Stories/Stories";
import PostCreator from "./PostCreator/PostCreator";
import Post from "./Post/Post";

const MiddleSection = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);

  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => {
      setPosts(snapshot.docs.map((doc: any) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);

  return (
    <>
      <Stories />
      <PostCreator />
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </>
  );
};

export default MiddleSection;