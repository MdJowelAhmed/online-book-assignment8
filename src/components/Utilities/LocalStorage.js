
import toast from 'react-hot-toast'

 const getStoredBooks = () => {
  let books = []
  const storedBooks = localStorage.getItem('books')
  if (storedBooks) {
    blogs = JSON.parse(storedBooks)
  }
  return books
}
const saveReadOrWishList = book => {
  let books = getStoredBooks()
  const isExist = books.find(book => book.id === book.id)
  if (isExist) {
    return toast.error('Already Bookmarked!')
  }
  books.push(book)
  localStorage.setItem('books', JSON.stringify(books))
  toast.success('Added Successfully!')
}

 const deleteStoredBooks = id => {
  let books = getStoredBooks()
  const remaining = books.filter(book => book.id !== id)
  localStorage.setItem('books', JSON.stringify(remaining))
  toast.success('Book Removed from read!')
}

export {getBlogs,saveBlog,deleteBlog}