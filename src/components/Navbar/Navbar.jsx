import { NavLink } from "react-router-dom";
{/* <header className="p-4 dark:bg-gray-100 dark:text-gray-800 mx-5">
    <div className="container flex justify-between h-16 mx-auto">

        <h2 className="text-3xl font-bold text-cyan-900"> Online Book</h2>

        <div className="">
            <NavLink to='/' className={({ isActive }) => isActive ? "btn btn-primary mx-3 font-semibold text-xl" : "btn btn-secondary mx-3"}>
                <button > Home Page</button>
            </NavLink>
            <NavLink to='/listed' className={({ isActive }) => isActive ? "btn btn-primary mx-3 font-semibold text-xl" : "btn btn-secondary mx-3"}>
                <button > Listed Books</button>
            </NavLink>
            <NavLink to='/pages' className={({ isActive }) => isActive ? "btn btn-primary mx-3 font-semibold text-xl" : "btn btn-secondary mx-3"}>
                <button> Pages to Read</button>
            </NavLink>
            <NavLink to='/upcoming' className={({ isActive }) => isActive ? "btn btn-primary mx-3 font-semibold text-xl" : "btn btn-secondary mx-3"}>
                <button > Upcoming</button>
            </NavLink>
            <NavLink to='/popular' className={({ isActive }) => isActive ? "btn btn-primary mx-3 font-semibold text-xl" : "btn btn-secondary mx-3"}>
                <button > Popular</button>
            </NavLink>
        </div>



        <div className="items-center flex-shrink-0 hidden lg:flex">
            <button className="self-center px-8 py-3 rounded btn btn-success">Sign in</button>
            <button className="self-center px-8 py-3 font-semibold rounded btn btn-accent ml-4 ">Sign up</button>
        </div>
        <button className="p-4 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </button>
    </div>
</header> */}

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box ">
                        {
                            <div className="">
                                <NavLink to='/' className={({ isActive }) => isActive ? "btn btn-primary mx-3 font-semibold text-xl" : "btn btn-secondary mx-3"}>
                                    <button > Home</button>
                                </NavLink>
                                <NavLink to='/listed' className={({ isActive }) => isActive ? "btn btn-primary mx-3 font-semibold text-xl" : "btn btn-secondary mx-3"}>
                                    <button > Listed Books</button>
                                </NavLink>
                                <NavLink to='/pages' className={({ isActive }) => isActive ? "btn btn-primary mx-3 font-semibold text-xl" : "btn btn-secondary mx-3"}>
                                    <button> Pages to Read</button>
                                </NavLink>
                                <NavLink to='/upcoming' className={({ isActive }) => isActive ? "btn btn-primary mx-3 font-semibold text-xl" : "btn btn-secondary mx-3"}>
                                    <button > Upcoming</button>
                                </NavLink>
                                <NavLink to='/popular' className={({ isActive }) => isActive ? "btn btn-primary mx-3 font-semibold text-xl" : "btn btn-secondary mx-3"}>
                                    <button > Popular</button>
                                </NavLink>

                            </div>
                        }


                    </ul>
                </div>
                <h2 className="text-3xl font-bold text-cyan-900"> Online Book</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        <div className="">
                            <NavLink to='/' className={({ isActive }) => isActive ? "btn btn-primary mx-3 font-semibold text-xl" : "btn btn-secondary mx-3"}>
                                <button > Home</button>
                            </NavLink>
                            <NavLink to='/listed' className={({ isActive }) => isActive ? "btn btn-primary mx-3 font-semibold text-xl" : "btn btn-secondary mx-3"}>
                                <button > Listed Books</button>
                            </NavLink>
                            <NavLink to='/pages' className={({ isActive }) => isActive ? "btn btn-primary mx-3 font-semibold text-xl" : "btn btn-secondary mx-3"}>
                                <button> Pages to Read</button>
                            </NavLink>
                            <NavLink to='/upcoming' className={({ isActive }) => isActive ? "btn btn-primary mx-3 font-semibold text-xl" : "btn btn-secondary mx-3"}>
                                <button > Upcoming</button>
                            </NavLink>
                            <NavLink to='/popular' className={({ isActive }) => isActive ? "btn btn-primary mx-3 font-semibold text-xl" : "btn btn-secondary mx-3"}>
                                <button > Popular</button>
                            </NavLink>
                        </div>
                    }
                </ul>
            </div>
            <div className="items-center flex-shrink-0 hidden lg:flex lg:ml-10">
                <button className="self-center lg:px-8 py-3 rounded btn btn-success">Sign in</button>
                <button className="self-center lg:px-8 py-3 font-semibold rounded btn btn-accent ml-4 ">Sign up</button>
            </div>
        </div>
    );
};

export default Navbar;