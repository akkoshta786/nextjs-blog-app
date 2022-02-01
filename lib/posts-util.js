import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export const getPostsFiles = () => {
  return fs.readdirSync(postsDirectory);
};

export const getPostData = (postIdentifier) => {
  // remove file extension
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);

  const fileContent = fs.readFileSync(filePath, "utf-8");
  // data -> Javascript object
  // content -> String
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  const postsFiles = getPostsFiles();

  const allPosts = postsFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.data > postB.date ? -1 : 1
  );

  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
};
