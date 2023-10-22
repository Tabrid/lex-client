import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="navbar sticky z-10 top-0 bg-[#1d344a] flex justify-between border-b-2 border-black ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-900 rounded-box w-52">
                        <li className='text-white mt-5'><Link to="/">Home</Link></li>
                        <li className='text-white mt-5'><Link to="/addProduct">Add Product</Link></li>
                        <li className='text-white mt-5'><Link to="/blog">Blog</Link></li>
                        <>


                            <li>

                                <div className="w-10 rounded-full ">
                                    <img alt='' src="https://i.ibb.co/tKB8PxV/user-circle-1.png" />
                                </div>

                            </li>
                        </>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost">
                    <figure ><img className='h-[95px] w-[131px] mt-[-24px]' src="https://i.ibb.co/7QmYQ3C/image.png" alt="logo" /></figure>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex cursor-pointer">
                <ul className="menu menu-horizontal p-0">
                    <li className='text-white mt-5'><Link to="/">Home</Link></li>

                    <li className='text-white mt-5 mr-32'><Link to="/blog">Blog</Link></li>
                    <li className=" "><div id="RootRoot" className="flex flex-row justify-between w-full items-start mt-[-24px]">
                        <img src="" id="LinkPng" />
                        <div className="flex flex-row mt-6 items-start">
                            <div
                                className="bg-white flex flex-col justify-center pl-4 w-64 shrink-0 h-12 items-start rounded-[25px]"
                            >
                                <div className="text-sm font-['Poppins'] text-black/70">Search</div>
                            </div>
                            <button
                                className="bg-[#daa21e] flex flex-col justify-center w-12 shrink-0 h-12 items-center rounded-[25px]"
                            >
                                <img
                                    src="https://file.rendit.io/n/YjixzmTdbw6vchA1G3G0.svg"
                                    className="w-4"
                                />
                            </button>
                        </div>
                    </div>
                    </li>

                    <>


                        <li>

                            <Link to="/dashboard">
                            <div className="w-24 rounded-full ">
                                <img alt='' src="https://i.ibb.co/tKB8PxV/user-circle-1.png" />
                            </div>
                            </Link>

                        </li>
                    </>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;