import { useEffect, useState } from "react";
import { getStoredBooks } from "../Utilities/LocalStorage";
// import Book from "../Book/Book";
import List from "../List/List";


const Read = () => {
    const [read,setRead]=useState([])

    useEffect(()=>{
        const readBook=getStoredBooks()
        setRead(readBook)
    },[])
    return (
        <div>
           <div className="grid grid-cols-1 gap-4">
                {
                    read.map(book=> <List key={book.id} book={book}></List>)
                }
                
                
            </div>
        </div>
    );
};

export default Read;