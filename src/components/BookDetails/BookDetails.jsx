import { useLoaderData } from "react-router-dom";


const BookDetails = () => {
    const newBook=useLoaderData()
    console.log(newBook)
    return (
        <div>
            <h2>{newBook.bookName} </h2>
            book details
        </div>
    );
};

export default BookDetails;