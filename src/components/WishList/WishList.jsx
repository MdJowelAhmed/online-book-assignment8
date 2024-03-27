import { useEffect, useState } from "react";
import { getStoredBooksWish, } from "../Utilities/LocalStorage";
import List from "../List/List";

const WishList = () => {
    // const wishBook=useLoaderData();
    const [wishBook, setWishBook] = useState([])

    useEffect(() => {
        const wishBookStore = getStoredBooksWish()
        setWishBook(wishBookStore)
    }, [])
    return (
        <div>
           
            <div className="grid grid-cols-1 gap-4">
                {
                    wishBook.map(book => <List key={book.id} book={book}></List>)
                }


            </div>
        </div>
    );
};

export default WishList;