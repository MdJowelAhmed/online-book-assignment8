import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

const Books = () => {
    const newBooks = useLoaderData()

    // console.log(newBooks)
    return (
        <div>
            <h2 className="my-12 text-3xl font-bold text-center">Books </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    newBooks.map(book=> <Book key={book.id} book={book}></Book>)
                }
                
                
            </div>
        </div>
    );
};

export default Books;