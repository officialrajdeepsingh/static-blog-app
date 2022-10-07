import Link from 'next/link'
import ItemPost from '../../components/ItemPost'
import { slugify, ImageUrl } from '../../utils'
import { allPosts } from "contentlayer/generated";

export default function tag({ posts }) {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {
              posts.map((post, index) => {
                return <ItemPost key={index} post={post} />
              })
            }
          </div>
        </div>
      </section>

    </>
  )
}

export async function getStaticPaths() {

  let paths = []
  // get all tag paths  
  allPosts.map(
    post => {
      if (post.draft === false) {
        post.tags.map(
          tag => {
            const slug = slugify(tag)
            paths.push({ params: { slug } })
          }
        )

      }
    }
  )

  return {
    paths,
    fallback: false,
  }


}

export async function getStaticProps({ params: { slug } }) {
  let posts = []

  // get all tag posts base on slug  
  const post = allPosts.map(
    (post) => {

      if (post.draft === false) {

        post.tags.filter(
          tag => {
            const tagSlug = slugify(tag)
            if (tagSlug === slug) {
              posts.push(post)
            }
          }

        )
        return posts
      }
    }
  )

  return { props: { posts } }


}

