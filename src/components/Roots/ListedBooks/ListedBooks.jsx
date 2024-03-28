import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData, useNavigation } from "react-router-dom";
import { Spinner } from "../../Utilities/Spinner/Spinner";
import { getStoredBooks } from "../../Utilities/LocalStorage";
import sortBy from "sort-by";


const ListedBooks = () => {
    const book = useLoaderData()
    
    const navigation = useNavigation()
    // console.log(book)

    
    useEffect(() => {
        const bookSort = getStoredBooks()
        if (book.length > 0) {
            const sortBy = [];
            for (const id of bookSort) {
                const books = book.find(b => b.bookId === id.bookId);
                if (books) {
                    book.push(books)
                }
                // const handleSortBy = (sort) => {
                //     if (sort === "all") {
                //         setSortBook(sortBook)
                //     }
                //     else if (sort === "rating") {
                //         const sortedRating =(bookSort.sort(customSortedRating))
                //         setSortBook(sortedRating)
                //         console.log(sortedRating)
                //     }

                //     else if (sort === "publisherYear") {
                //         const sortedYear = (bookSort.sort(customSortedYear))
                //         setSortBook(sortedYear)
                //         console.log(sortedYear)
                //     }
                // }

                    // console.log(bookSort)
                    // const sorted = (bookSort.sort(customSortedYear))
                    // setSortBook(sorted);
                
                }
                // setSortBook(sortBy)
                // console.log(sortBy)
            }
            //   const booking=sortBook.sort((a,b)=>a.totalPages.localCompare(b.totalPages))
            //         console.log(booking)
            //   console.log(bookSort)
        }, [book]);




    const [tabIndex, setTabIndex] = useState(0);
    if (navigation.state === 'loading') return <Spinner></Spinner>
    return (
        <div className="mx-5 lg:mx-20">
            <h2 className="text-center text-2xl font-semibold bg-amber-100 py-2 my-4"> Books</h2>
           

            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                <Link
                    to=''
                    onClick={() => setTabIndex(0)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? ' border border-b-0' : ' border border-b border-t-0'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>

                    <span>Read Books</span>
                </Link>
                <Link
                    to={`wish`}
                    onClick={() => setTabIndex(1)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3  ${tabIndex === 1 ? ' border border-b-0' : ' border border-b border-t-0'} dark:border-gray-600 dark:text-gray-600`}>

                    <span>WishList Books</span>
                </Link>


            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;