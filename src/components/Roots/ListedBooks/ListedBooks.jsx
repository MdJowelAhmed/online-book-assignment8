import { useState } from "react";
import { Link, Outlet, useLoaderData, useNavigation } from "react-router-dom";
import { Spinner } from "../../Utilities/Spinner/Spinner";


const ListedBooks = () => {
    const book=useLoaderData()
   const navigation=useNavigation()
    console.log(book)
   
    const [tabIndex, setTabIndex]=useState(0);
    if(navigation.state==='loading') return <Spinner></Spinner>
    return (
        <div className="mx-5 lg:mx-20">
            <h2 className="text-center text-2xl font-semibold bg-amber-100 py-2 my-4"> Books</h2>
            <details className="dropdown  flex justify-center ">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 text-center flex flex-col justify-end">
                    <li className=""><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </details>

            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                <Link 
                to=''
                 onClick={()=> setTabIndex(0)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex ===0 ? ' border border-b-0': ' border border-b border-t-0'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>

                    <span>Read Books</span>
                </Link>
                <Link 
                to={`wish`}
                onClick={()=>setTabIndex(1)}  rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3  ${tabIndex ===1 ? ' border border-b-0': ' border border-b border-t-0'} dark:border-gray-600 dark:text-gray-600`}>

                    <span>WishList Books</span>
                </Link>
                

            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;