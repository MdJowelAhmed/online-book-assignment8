// import { useEffect, useState } from "react";
import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Spinner } from "../Utilities/Spinner/Spinner";
// import { saveReadOrWishList } from "../Utilities/LocalStorage";


const BookDetails = () => {
    const navigation=useNavigation()
    const books = useLoaderData()
    
    const { bookId } = useParams();
    const idInt = parseInt(bookId);
    const book = books.find(book => book.bookId === idInt);
    // console.log(bookId)
    console.log(book)
    if(navigation.state==='loading') return <Spinner></Spinner>
    const { tags } = book

    const handleReadAndWishList = () => {
        const saveData=JSON.parse(localStorage.getItem('books')) || [];
        const isData= saveData.find((item)=>item.bookId==book.bookId);
        if(isData){
            return toast.error('Already Read added!')

        }
        else{
            saveData.push(book);
            localStorage.setItem("books", JSON.stringify(saveData))
            toast.success('Added Read Successfully!')
        }
    }
    const handleWishList = () => {
        const saveData=JSON.parse(localStorage.getItem('wishList')) || [];
        const isData= saveData.find((item)=>item.bookId==book.bookId );
        if(isData && handleReadAndWishList()){
            return toast.error('Already Wish List added!')
        }
        else{
            saveData.push(book);
            localStorage.setItem("wishList", JSON.stringify(saveData))
            toast.success('Added Wish List Success!')
        }
    }
    return (
        <div>
            {/* <h2>{book.bookName} </h2> */}
            book details

            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center lg:w-2/5 justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={book.image} alt="" className="object-contain  h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>

                    <div className="flex flex-col lg:w-3/5 justify-center ">
                        <h1 className="text-2xl lg:text-5xl font-bold lg:mx-5 mb-5"> {book.bookName}
                        </h1>
                        <h2>By: <span className=" font-bold text-xl m-5"> {book.author}</span> </h2>
                        <hr />
                        <h4 className="m-4 text-amber-700 font-medium">{book.category} </h4>
                        <hr />
                        <p className="mt-6 mb-8 text-lg sm:mb-12"><span className="text-xl font-semibold">Review:</span> {book.review}
                        </p>
                        <div className='flex flex-wrap gap-2  text-blue-600 mx-5 mb-4'>
                            {tags &&
                                tags.map(tag => (
                                    <a
                                        key={tag}
                                        rel='noopener noreferrer'
                                        href='#'
                                        className='px-3 py-1 rounded-sm hover:underline '
                                    >
                                        #{tag}
                                    </a>
                                ))}
                        </div>
                        <hr />
                        <div className="space-y-2 mb-6">
                            <p>Number of pages <span className=" ml-[55px] font-bold">{book.totalPages}</span></p>
                            <p>Publisher <span className=" ml-28 font-bold">{book.publisher} </span></p>
                            <p>Year of Published<span className="ml-[55px] font-bold">{book.yearOfPublishing} </span></p>
                            <p>Rating <span className=" ml-32 font-bold">{book.rating} </span></p>
                        </div>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <button onClick={()=>handleReadAndWishList()} className="btn btn-success mr-5">Read</button>
                            <button onClick={()=>handleWishList()} className="btn btn-secondary ml-5">WishList</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* <ToastContainer /> */}
        </div>
    );
};

export default BookDetails;