import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className='flex justify-center  bg-gray-900 my-9'>
            <div className="card w-96  bg-gray-900 shadow-2xl ">
                <div className="card-body items-center text-center">
                    <h1 className='text-2xl font-bold text-white'>LOGIN</h1>
                    <form >
                        <input type="email" name='email' placeholder="Type Email" className="input  mt-10 input-bordered w-full max-w-xs" />
                        <input type="password" name='password' placeholder="Type Password" className="input mt-10 input-bordered w-full max-w-xs" />

                        <input className='btn  mt-10' type="submit" value="LogIn" />
                    </form>
                    <div className="divider text-white ">OR</div>
                    <div className="flex gap-4">
                        <button > <img className='g-logo w-10 h-10' src='https://seeklogo.com/images/G/google-2015-logo-65BBD07B01-seeklogo.com.png' alt='' /> </button>
                    <button > <img className='g-logo w-10 h-10' src='https://i.ibb.co/mcCdGpM/image.png' alt='' /> </button>
                    </div>
                    <h1 className='text-white mt-10'>Are you new here? <Link className='underline underline-offset-1' to='/signup'>SignUp</Link></h1>

                </div>
            </div>

        </div>
    );
};

export default Login;