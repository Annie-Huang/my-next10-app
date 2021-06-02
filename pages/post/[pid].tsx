import React from 'react';
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  console.log(router.query);

  return <div>Post Item: {router.query.pid}</div>;
};

export default Post;
