import { IoStarOutline } from "react-icons/io5";
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Book = ({ book }) => {
    const { image, bookName, author, tags, category, rating } = book
    return (
        <NavLink to={`/bookDetails/${book.bookId}`}>

            <div className="card w-96 h-[500px]  bg-base-100 shadow-xl">
                <figure><img className='h-80 mb-3' src={image} alt="Shoes" /></figure>
                <div className='flex flex-wrap gap-2  text-blue-600 mx-5'>
                    {tags &&
                        tags.map(tag => (
                            <a
                                key={tag}
                                rel='noopener noreferrer'
                                href='#'
                                className='px-3 py-1 rounded-sm hover:underline '
                            >
                                #{tag}
                            </a>
                        ))}
                </div>
                <div className="p-7 space-y-4">
                    <h2 className="card-title font-bold">{bookName} </h2>
                    <h2>By: <span className=" font-bold">{author}</span> </h2>
                    <div className="card-actions justify-between">
                        <h3 className="font-semibold text-green-600">{category} </h3>
                        <div className="flex gap-4 items-center">
                            <h3 className=" font-semibold">{rating} </h3>
                            < IoStarOutline className="text-2xl font-bold"/>
                        </div>

                    </div>
                </div>
            </div>
        </NavLink>

    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired
}

export default Book