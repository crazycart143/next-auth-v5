import { unstable_noStore } from "next/cache";
import React, { Suspense } from "react";

// by default nextjs is  caching data
// for data not to be cached, use unstable_noStore()

async function BlogPosts() {
  unstable_noStore(); //this means that this function should not be cached and is running dynamically
  let res = await fetch("https://api.vercel.app/blog");
  let posts = await res.json();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}> {post.title}</li>
      ))}
    </ul>
  );
}

export default function page() {
  return (
    <div>
      <h1>My Blog</h1>
      {/* Suspense should be higher or outside the target component */}
      {/* Suspense is used to pre render a component before it loads the data. Useful for loading skeletons or loading ui */}
      <Suspense fallback="Loading....">
        <BlogPosts />
      </Suspense>
    </div>
  );
}
