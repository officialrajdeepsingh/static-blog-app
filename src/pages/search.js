import Post from '../components/Post'
import Banner from "../components/Banner";
import { allPosts } from "contentlayer/generated";
// import { ImageUrl } from '../utils'
import { useEffect } from 'react';
import { useState } from 'react';


export default function Search() {

    const [search, setSearch] = useState(undefined)

    let searchResultposts = []
    let loading = undefined

    function onChangeFunction(event) {
        loading = true
        setSearch(event.target.value)
    }

    if (search?.trim()) {
        allPosts.map(
            (post) => {
                if (post.draft === false) {
                    if (post.title.toLowerCase().includes(search.trim()) || post.description.toLowerCase().includes(search.trim())) {
                        loading = false
                        searchResultposts.push(post)
                    }
                }
            }
        )
    }


    return (
        <>
            <section className="flex flex-col max-w-4xl  items-center mx-auto overflow-hidden bg-white rounded-lg shadow-lg  md:flex-row md:h-48">

                <div className="justify-between pb-6 md:py-0 md:w-1/2 h-12 flex flex-col p-1.5 mx-auto overflow-hidden border rounded-lg lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                    <input onChange={onChangeFunction} value={search !== undefined ? search : ''} className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none  focus:placeholder-transparent dark:focus:placeholder-transparent" type="text" name="serach" placeholder="Enter your query" aria-label="Enter your query" />

                    <button className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">Search</button>
                </div>

            </section>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                {
                            searchResultposts?.length > 0 ?
                                searchResultposts?.map((post, index) => (
                                    <Post key={index} post={post} />
                                )) : searchResultposts?.length > 0 && search === undefined ? <h2 className='text-center'>
                                No found post realted to {search}
                            </h2>: ""
                        }
                        
                        {
                            loading ? <div className='m-auto p-5 mx-5 '>
                                <h2 className='text-center'>
                                    loading...
                                </h2>
                            </div> : ''
                        }
                        {
                         searchResultposts?.length === 0 && search?.trim().length > 0  ? <h2 className='text-center'>
                            No found post realted to {search}
                        </h2>: ""
                        }
                </div>
                </div>
            </section>

            {/* <div className="container">
                <div className="row">
                    <div className="col-lg-8 m-auto">
                        {
                            searchResultposts?.length > 0 ?
                                searchResultposts?.map((post, index) => (
                                    <Post key={index} post={post} />
                                )) : searchResultposts?.length > 0 && search === undefined ? <h2 className='text-center'>
                                No found post realted to {search}
                            </h2>: ""
                        }
                        
                        {
                            loading ? <div className='m-auto p-5 mx-5 '>
                                <h2 className='text-center'>
                                    loading...
                                </h2>
                            </div> : ''
                        }
                        {
                         searchResultposts?.length === 0 && search?.trim().length > 0  ? <h2 className='text-center'>
                            No found post realted to {search}
                        </h2>: ""
                        }

                    </div>
                </div>
            </div> */}
        </>
    )
}
