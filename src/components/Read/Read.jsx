import { useEffect, useState } from "react";
import { getStoredBooks } from "../Utilities/LocalStorage";
// import Book from "../Book/Book";
import List from "../List/List";


const Read = () => {
    const [read, setRead] = useState([])

    useEffect(() => {
        const readBook = getStoredBooks()
        setRead(readBook)
    }, [])

    const [sortBook, setSortBook] = useState([])
    const handleSortBy =function (sort) {
        if (sort === "rating") {
            return this.sort((a, b) => b.rating - a.rating);
            // const ratingBook = sortBook.sort(item => item.rating == 4.8)
            // setSortBook(ratingBook)
            // console.log(ratingBook)
        }
        else if (sort === "numberPages") {
            return this.sort((a, b) => a.totalPages - b.totalPages);
            // const pagesBook = sortBook.sort(item => item.totalPages == 384)
            // setSortBook(pagesBook)
            // console.log(pagesBook)
        }
        else if (sort === "publisherYear") {
            return this.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
            // const yearBook = sortBook.sort(item => item.yearOfPublishing == 1983)
            // setSortBook(yearBook)
        }
    };
    const customSortedYear = ((a, b) => {
        const dataA = new Date(a.yearOfPublishing)
        const dataB = new Date(b.yearOfPublishing)
        if (dataA > dataB) return 1;
        else if (dataA < dataB) return -1;
        return 0;
    })


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
                    read.map(book => <List key={book.id} book={book}></List>)
                }


            </div>
        </div>
    );
};

export default Read;