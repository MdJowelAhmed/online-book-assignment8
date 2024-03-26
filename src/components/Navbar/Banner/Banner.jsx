import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <section className="bg-amber-50 h-[500px] px-10 pb-4 mx-5">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-2xl lg:text-5xl font-bold leading-none">Books to freshen up your bookshelf
                    </h1>
                      <p className="my-4">By reading this book, you will know something about the biography of Prophet Muhammad (PBUH). Hope you read this book</p>  
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-10">
                       
                        <Link to='/listed' > <button className="btn btn-success">View The List</button></Link>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full">
                    <img src="https://halalcraft.com/wp-content/uploads/2023/01/03.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    );
};

export default Banner;