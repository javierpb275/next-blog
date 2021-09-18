import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "best-framework-ever",
    title: "Best Framework Ever",
    image: "nextjs.png",
    excerpt:
      "Next.js is the React Framework for Production. It makes building fullstack React apps and sites very easy.",
    date: "2021-09-18",
  },
  {
    slug: "best-framework-ever-2",
    title: "Best Framework Ever",
    image: "nextjs.png",
    excerpt:
      "Next.js is the React Framework for Production. It makes building fullstack React apps and sites very easy.",
    date: "2021-09-18",
  },
  {
    slug: "best-framework-ever-3",
    title: "Best Framework Ever",
    image: "nextjs.png",
    excerpt:
      "Next.js is the React Framework for Production. It makes building fullstack React apps and sites very easy.",
    date: "2021-09-18",
  },
  {
    slug: "best-framework-ever-4",
    title: "Best Framework Ever",
    image: "nextjs.png",
    excerpt:
      "Next.js is the React Framework for Production. It makes building fullstack React apps and sites very easy.",
    date: "2021-09-18",
  },
];

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
