
import { ToastContainer, toast } from 'react-toastify';

 const getStoredBooks = () => {
  let books = []
  const storedBooks = localStorage.getItem('books')
  if (storedBooks) {
    books = JSON.parse(storedBooks)
  }
  return books
}
 const getStoredBooksWish = () => {
  let wishList = []
  const storedBooks = localStorage.getItem('wishList')
  if (storedBooks) {
    wishList = JSON.parse(storedBooks)
  }
  return wishList
}
 export const saveReadOrWishList = book => {
  let books = getStoredBooks()
  const isExist = books.find(book => book.bookId === book.bookId)
  if (isExist) {
    return toast.error('Already Bookmarked!')
  }
  books.push(book)
  localStorage.setItem('books', JSON.stringify(books))
  toast.success('Added Successfully!')

        // const saveData=JSON.parse(localStorage.getItem('books')) || [];
        // const isData= saveData.find((item)=>item.bookId==book.bookId);
        // if(isData){
        //   return toast.error('Already Bookmarked!')
        // }
        // else{
        //     saveData.push(book);
        //     localStorage.setItem("books", JSON.stringify(saveData))
        //     toast.success('Added Successfully!')
        // }

}

 const deleteStoredBooks = id => {
  let books = getStoredBooks()
  const remaining = books.filter(book => book.bookId !== id)
  localStorage.setItem('books', JSON.stringify(remaining))
  toast.success('Book Removed from read!')
}
 const deleteStoredBooksWish = id => {
  let wishList = getStoredBooks()
  const remaining = wishList.filter(book => book.bookId !== id)
  localStorage.setItem('wishList', JSON.stringify(remaining))
  toast.success('Book Removed from read!')
}

export {getStoredBooks,getStoredBooksWish, deleteStoredBooks,deleteStoredBooksWish}