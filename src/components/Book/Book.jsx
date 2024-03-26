import { IoStarOutline } from "react-icons/io5";
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Book = ({ book }) => {
    const { image, bookName, author, tags, category, rating } = book
    return (
        <NavLink to={`/bookDetails/:${book.bookId}`}>

            <div className="card w-96  bg-base-100 shadow-xl">
                <figure><img className='h-80' src={image} alt="Shoes" /></figure>
                <div className='flex flex-wrap py-6 gap-2 border-t border-dashed '>
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
                <div className="card-body">
                    <h2 className="card-title">{bookName} </h2>
                    <h2>By: {author} </h2>
                    <div className="card-actions justify-between">
                        <h3>{category} </h3>
                        <div className="flex gap-4 items-center">
                            <h3>{rating} </h3>
                            < IoStarOutline className="text-2xl"/>
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