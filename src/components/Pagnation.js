import React from 'react'
import Link from "next/link";
import { useRouter } from "next/router";

function Pagnation({ totalPostCount }) {
  let router = useRouter()

  /*
   pages give number,base on number we create a array. base on array we map a list elements
   totalPostCount = 3
   conver into array [0,1,2]
   base on array create list in array
  */

  let pageIntoArray = Array.from(Array(totalPostCount).keys())


  return (
    <div className="flex justify-center ">
      {
        pageIntoArray.map(page => {
          return (<Link key={page} href={page === 0 ? "/" : `/page/${page + 1}`}>
            <a className="items-center px-4 py-2 mx-1 text-gray-100 transition-colors duration-300 transform bg-red-500 rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
              {page + 1}
            </a>
          </Link>)
        })
      }
    </div>
  )
}

export default Pagnation