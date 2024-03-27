import { useEffect, useState } from "react";
import { getStoredBooksWish, } from "../Utilities/LocalStorage";
import Book from "../Book/Book";
import { useLoaderData } from "react-router-dom";

const WishList = () => {
    // const wishBook=useLoaderData();
    const [wishBook, setWishBook] = useState([])

    useEffect(() => {
        const wishBookStore = getStoredBooksWish()
        setWishBook(wishBookStore)
    }, [])
    return (
        <div>
           
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    wishBook.map(book => <Book key={book.id} book={book}></Book>)
                }


            </div>
        </div>
    );
};

export default WishList;