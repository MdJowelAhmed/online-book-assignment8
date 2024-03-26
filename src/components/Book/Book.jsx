
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Book = ({ book }) => {
    const { image, bookName, author, tags, id } = book
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
                    <h2>{author} </h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
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