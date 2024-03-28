import { useEffect, useState } from "react";
import { getStoredBooksWish, } from "../Utilities/LocalStorage";
import List from "../List/List";
import SortBy from "../SortBy/SortedBy";
import SortedBy from "../SortBy/SortedBy";

const WishList = () => {
    // const wishBook=useLoaderData();
    const [wishBook, setWishBook] = useState([])
    const [sortedBooks, setSortedBooks] = useState(wishBook);
    const [sortBy, setSortBy] = useState(null);

    useEffect(() => {
        const wishBookStore = getStoredBooksWish()
        setWishBook(wishBookStore)
        setSortedBooks(wishBookStore)
    }, [])
    const handleSortBy = (sorting) => {
        let sorted = [];
        if (sorting === "rating") {
            sorted = [...sortedBooks].sort((a, b) => b.rating - a.rating);
            setSortedBooks(sorted)
        } else if (sorting === "numberPages") {
            sorted = [...sortedBooks].sort((a, b) => a.totalPages - b.totalPages);
        } else if (sorting === "publisherYear") {
            sorted = [...sortedBooks].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
        }
        setSortedBooks(sorted);
        setSortBy(sorting);
    };
    return (
        <div>
         
            <div>
                <details className="dropdown m-2 mx-auto ">
                    <summary className="m-1 btn">Sort by</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleSortBy("rating")}><a>Rating</a></li>
                        <li onClick={() => handleSortBy("numberPages")}><a>Number of Page</a></li>
                        <li onClick={() => handleSortBy("publisherYear")}><a>Publish Year</a></li>
                    </ul>
                </details>
            </div>
            <div className="grid grid-cols-1 gap-4">
                {
                    sortedBooks.map(book => <List key={book.id} book={book}></List>)
                }


            </div>
        </div>
    );
};

export default WishList;