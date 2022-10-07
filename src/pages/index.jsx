import Post from "../components/Post";
import Sidebar from "../components/Sidebar";
import { pageCount, sortByDate } from "../utils";
import Pagnation from "../components/Pagnation";
import { show_per_page } from "../config";
// import Login from '../components/login';
import { allPosts } from "contentlayer/generated";
import { pick } from "@contentlayer/client";
import Banner from "../components/Banner";

export default function Home({ posts, totalPostCount }) {
  return (
    <>
    <Banner/>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
          {posts.map((post) => {
              return <Post key={post.slug} post={post} />;
            })}
          </div>
        </div>
      </section>
      <Pagnation totalPostCount={totalPostCount} />
    </>
  );
}

// fetch first ten posts
export async function getStaticProps() {
  //  help of pick get require filter value
  const posts = allPosts.map((post) =>
    pick(post, [
      "title",
      "date",
      "slug",
      "description",
      "draft",
      "image",
      "tags",
      "categories",
    ])
  );

  // sort article base on  date
  let postSortByDate = posts.sort(sortByDate);

  // filter publish posts
  const publish = postSortByDate.filter(
    (post, i) => {
      return post.draft === false;
    },
  );

  // count how many pages
  let totalPostCount = pageCount(allPosts.length);

  //  get only first ten post
  let totalPosts = publish.slice(0, show_per_page);

  return {
    props: {
      posts: totalPosts,
      totalPostCount,
    },
  };
}
