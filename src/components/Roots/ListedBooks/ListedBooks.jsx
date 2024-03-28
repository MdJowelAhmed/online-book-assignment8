import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData, useNavigation } from "react-router-dom";
import { Spinner } from "../../Utilities/Spinner/Spinner";
import { getStoredBooks } from "../../Utilities/LocalStorage";
import sortBy from "sort-by";


const ListedBooks = () => {
    const book=useLoaderData()
    const [sortBook, setSortBook]=useState([])
   const navigation=useNavigation()
    // console.log(book)

    const handleSortBy=(sort)=>{
        if(sort==="all"){
            setSortBook(sortBook)
        }
        
        else if(sort==="rating"){
            const ratingBook=sortBook.sort(item=>item.rating==4.8)
            setSortBook(ratingBook)
            // console.log(ratingBook)
        }
        else if(sort==="numberPages"){
            const pagesBook=sortBook.sort(item=>item.totalPages==384)
            setSortBook(pagesBook)
            console.log(pagesBook)
        }
        else if(sort==="publisherYear"){
            const yearBook=sortBook.sort(item=>item.yearOfPublishing==1983)
            setSortBook(yearBook)
        }
    };

    useEffect(()=>{
        const bookSort=getStoredBooks()
        if (book.length > 0) {
            const sortBy = [];
            for (const id of bookSort) {
                const books = book.find(b => b.bookId === id.bookId);
                if (books) {
                    book.push(books)
                }
                
            }
            setSortBook(sortBy)
            // console.log(sortBy)
          }
        //   const booook=sortBook.sort((a,b)=>a.totalPages.localCompare(b.totalPages))
        //         console.log(booook)
        //   console.log(bookSort)
    }, [book])
    
   
    const [tabIndex, setTabIndex]=useState(0);
    if(navigation.state==='loading') return <Spinner></Spinner>
    return (
        <div className="mx-5 lg:mx-20">
            <h2 className="text-center text-2xl font-semibold bg-amber-100 py-2 my-4"> Books</h2>
            <details className="dropdown m-10 mx-auto ">
                <summary className="m-1 btn">Sort by</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={()=>handleSortBy("all")}><a>All</a></li>
                    <li onClick={()=>handleSortBy("rating")}><a>Rating</a></li>
                    <li onClick={()=>handleSortBy("numberPages")}><a>Number of Page</a></li>
                    <li onClick={()=>handleSortBy("publisherYear")}><a>Publish Year</a></li>
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