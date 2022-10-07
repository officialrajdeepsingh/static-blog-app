import Link from 'next/link'
import { slugify, ImageUrl, dateConverter } from '../../utils'
import { allPosts } from "contentlayer/generated";
import Image from 'next/future/image'

export default function PostPage({ post }) {

  const date = dateConverter(post.date)

  return (
    <>
      <article className="flex flex-col shadow mx-auto w-6/12">

        <Image
          src={ImageUrl(post.image)}
          width={1000}
          height={500}
          alt={post.title}
          className="my-6 hover:opacity-75 mx-auto"
        />

        <div className="bg-white flex flex-col justify-start p-6">

          <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">{post.categories[0]}</a>

          <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">{post.title}</a>

          <p href="#" className="text-sm pb-8">
            By <a href="#" className="font-semibold hover:text-gray-800">{post.author}</a>, {date}
          </p>

          <div className='article-body' dangerouslySetInnerHTML={{ __html: post.body.html }}></div>

        </div>

        <div className='flex flex-row justify-between m-4 '>
  <h6> Tags :</h6>
          {
            post.tags.map(
              tag => {

                const slug = slugify(tag)

                return (<Link key={tag} href={`/tag/${slug}`}>
                  <a className='ml-2'>
                    <p className='border-solid text-lg border-2 border-red-300 hover:bg-red-300  p-2'>{tag}</p>
                  </a>
                </Link>)

              }
            )
          }
        </div>
      </article>

    </>
  )
}



{/* <h1 className="text-2xl font-bold pb-3">Introduction</h1>
<p className="pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel neque non libero suscipit suscipit eu eu urna. Proin bibendum urna mattis ante malesuada ultrices. Etiam in turpis vitae elit dictum aliquet. Donec mattis risus in turpis dapibus, eget tempus sem tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In est enim, imperdiet sed ornare quis, pellentesque vel risus. Nunc vitae vestibulum turpis. Quisque eget eleifend urna. Etiam et vulputate purus, ut egestas sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis quis neque non urna venenatis mollis et at massa. Pellentesque sem lacus, malesuada vel hendrerit molestie, mollis vel elit.</p>
<h1 className="text-2xl font-bold pb-3">Heading</h1>
<p className="pb-3">Vivamus nec facilisis elit, quis congue justo. In non augue ex. Aenean pretium facilisis hendrerit. Sed sed imperdiet dui. Etiam faucibus a diam sed vehicula. Nullam commodo lacus tincidunt, tincidunt orci sed, dapibus leo. Vivamus vulputate quis risus a ultricies. Aliquam luctus id tellus non condimentum. Aenean maximus viverra ipsum eget vestibulum. Morbi ut tincidunt sem, efficitur volutpat tortor. Donec scelerisque, ipsum eu efficitur semper, neque turpis sodales quam, in aliquam elit lacus varius lorem. Ut ut diam id leo efficitur malesuada eget in velit. Pellentesque tristique orci nunc, vitae fermentum nibh luctus eu. Mauris condimentum justo sed ipsum egestas varius.</p>
<p className="pb-3">Sed sagittis odio a volutpat feugiat. Cras aliquam varius justo, a rhoncus ante bibendum id. Nulla maximus nisl sed enim maximus, ut dictum lectus hendrerit. Fusce venenatis tincidunt eros. Phasellus quis augue vulputate ipsum pellentesque fringilla. Morbi nec tempor felis. Maecenas sollicitudin pellentesque dui, sit amet scelerisque mauris elementum nec. Cras ante metus, mattis in malesuada in, fermentum a nunc. Suspendisse potenti. Sed tempor lacus sed commodo dignissim. Quisque dictum, dolor auctor iaculis cursus, ipsum urna porttitor ex, sed consequat nisi tellus eget ante. Duis molestie mollis eros, eu sollicitudin mauris lobortis quis.</p>
<p className="pb-3">Vivamus sed neque nec massa scelerisque imperdiet eget id sapien. Fusce elementum mi id malesuada luctus. Proin quis lorem id leo porta interdum non ac nisl. Integer nulla sem, ultrices sed neque eget, blandit condimentum metus. Aliquam eget malesuada sapien. Curabitur aliquet orci sit amet ex tincidunt convallis. Mauris urna mi, consequat mattis mollis a, dignissim eget sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam facilisis sem diam, viverra consequat metus consequat vel. Cras a mi eu ex luctus malesuada quis eu ante. Aliquam erat volutpat.</p>
<h1 className="text-2xl font-bold pb-3">Conclusion</h1>
<p className="pb-3">Donec vulputate auctor leo lobortis congue. Sed elementum pharetra turpis. Nulla at condimentum odio. Vestibulum ullamcorper enim eget porttitor bibendum. Proin eros nibh, maximus vitae nisi a, blandit ultricies lectus. Vivamus eu maximus lacus. Maecenas imperdiet iaculis neque, vitae efficitur felis vestibulum sagittis. Nunc a eros aliquet, egestas tortor hendrerit, posuere diam. Proin laoreet, ligula non eleifend bibendum, orci nulla luctus ipsum, dignissim convallis quam dolor et nulla.</p> */}

//  <section className="w-full md:w-2/3 flex flex-col items-center px-3">
//         <div className="container mx-auto">
//           <h1 className='text-4xl text-gray-900 mt-4'>{post.title}</h1>
//           <p className='text-xl text-gray-900'>{post.description}</p>

//           <div className='flex flex-row'>
//             <div className='flex flex-row my-2'>

//               {/* <h6>{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</h6> */}
//               {
//                 post.categories.map(

//                   category => {

//                     const slug = slugify(category)

//                     return (<Link key={category} href={`/category/${slug}`}>
//                       <a className='ml-2'>
//                         <h6 className='border-solid border-b-2 border-sky-500 '>#{category}</h6>
//                       </a>
//                     </Link>)

//                   }
//                 )
//               }
//             </div>
//           </div>

//           <Image
//             src={ImageUrl(post.image)}
//             width={1560}
//             height={724}
//             alt={post.title}
//             className="my-6"
//           />

//           {/* <div className='article-body m-auto font-serif font-medium' dangerouslySetInnerHTML={{ __html: post.body.html }}></div> */}

//         </div>
//       </section> 



export async function getStaticPaths() {



  //  filter the post and get the publish post.
  const posts = allPosts.filter(
    (post, i) => {
      return post.draft === false
    }
  )

  // get all the post slug
  const publish = posts.map((post) => ({ params: { slug: post.slug } }))


  return {
    paths: publish,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {

  // fetch a single post by slug

  const post = allPosts.find((post) => {

    return post.slug === slug

  })

  return { props: { post } }

}