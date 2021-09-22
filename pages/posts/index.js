import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";
import { Fragment } from "react";

const AllPostsPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="list of posts" />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
