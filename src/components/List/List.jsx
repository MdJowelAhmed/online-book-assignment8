import { IoLocationOutline } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { BiMemoryCard } from "react-icons/bi";
import PropTypes from 'prop-types'
import { useState } from "react";
import SortBy from "../SortBy/SortedBy";
// import { useLoaderData } from 'react-router-dom'

const List = ({ book }) => {
  const { image, bookName, author, tags, category, rating, publisher, totalPages, yearOfPublishing } = book
  // console.log(book)
  


  return (
    
    <div >
      
      <div className="hero bg-base-200 border-2 border-blue-200 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="w-72 h-72 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl font-bold"> {bookName}</h1>
            <h2>By: <span className=" font-bold">{author}</span> </h2>
            <div className='flex'>
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
              <div className="flex items-center gap-2 font-semibold">
                <IoLocationOutline className="text-2xl" />
                <h3 className='font-semibold items-center'> Year of publishing : {yearOfPublishing} </h3>
              </div>
            </div>
            <div className='flex gap-20 my-3'>
              <div className="flex items-center gap-2 font-semibold">
                <IoPeople className="text-2xl" />
                <h4>{publisher} </h4>
              </div>
              <div className="flex items-center gap-2 font-semibold ">
                <BiMemoryCard className="text-2xl" />
                <p>{totalPages} </p>
              </div>
            </div>
            <div className="text-2xl font-bold">
              <hr />
            </div>
            <div className="my-4 flex justify-between">
              <h2 className="bg-amber-50 p-3 rounded-lg font-bold">Category: {category} </h2>
              <h3 className="bg-green-200 p-3 rounded-lg font-bold">Rating: {rating} </h3>
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

List.propTypes = {
  book: PropTypes.object.isRequired
}

export default List