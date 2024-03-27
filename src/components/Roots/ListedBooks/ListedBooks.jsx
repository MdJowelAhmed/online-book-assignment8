import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const ListedBooks = () => {
    const book=useLoaderData()
    console.log(book)
    const [tabIndex, setTabIndex]=useState(0)
    return (
        <div>
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                <Link 
                // to=''
                 onClick={()=> setTabIndex(0)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex ===0 ? ' border border-b-0': ' border border-b border-t-0'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>

                    <span>Read Books</span>
                </Link>
                <Link onClick={()=>setTabIndex(1)}  rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3  ${tabIndex ===1 ? ' border border-b-0': ' border border-b border-t-0'} dark:border-gray-600 dark:text-gray-600`}>

                    <span>WishList Books</span>
                </Link>
                

            </div>
        </div>
    );
};

export default ListedBooks;