import { useEffect, useState } from "react";
import { getStoredBooks } from "../Utilities/LocalStorage";
import Book from "../Book/Book";


const Read = () => {
    const [read,setRead]=useState([])

    useEffect(()=>{
        const readBook=getStoredBooks()
        setRead(readBook)
    },[])
    return (
        <div>
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    read.map(book=> <Book key={book.id} book={book}></Book>)
                }
                
                
            </div>
        </div>
    );
};

export default Read;