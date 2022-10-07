import Link from 'next/link'
import Image from 'next/future/image'

export default function ItemPost({ post }) {
   

  return (<div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">

          <Image
            src={post.image}
            alt="Picture of the author"
            width={500}
            height={500}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 ">
              {post.categories[0]}
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {post.title}
            </h1>
            <p className="leading-relaxed mb-3">
              {post.description}
            </p>
            <div className="flex items-center flex-wrap ">

              <Link href={`/blog/${post.slug}`}>
                <a className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">
                  Read Now
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </Link>


            </div>
          </div>
        </div>
      </div>

    
  )
}