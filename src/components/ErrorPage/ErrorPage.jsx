import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className=" mt-16">
            <h2 className="text-6xl font-bold flex justify-center items-center">Oops !!!!</h2>
            <img className="h-72 w-72 m-3 mx-auto" src="https://img.lovepik.com/free-png/20210918/lovepik-404-page-error-png-image_400217866_wh1200.png" alt="" />
            <div className="text-2xl font-bold flex justify-center items-center my-6"> <Link to='/'><button className="btn">Home</button></Link></div>
        </div>
    );
};

export default ErrorPage;