import ItemPost from '../../components/ItemPost'
import { slugify, ImageUrl } from '../../utils'

import { allPosts } from "contentlayer/generated";



export default function Category({ posts }) {

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

  let paths =[]

  // get all category paths  
  allPosts.map(
    post => {
      if (post.draft===false){
         post.categories.map(
              category=> {
                const  slug = slugify(category)
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

  let posts =[]

// get all category posts base on slug  
 const post= allPosts.map(
    (post) => {

      if (post.draft===false){

          post.categories.filter(
            category => {
              const  categorySlug = slugify(category)
              if(categorySlug === slug ){
                posts.push(post)
              }
            }

        )
        return posts
      }
    }
  )
   


  return { props: { posts} }


}
