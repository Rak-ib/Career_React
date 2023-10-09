import { NavLink, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error=useRouteError();
    console.log(error);
    return (
        <div className='text-center text-6xl mt-20'>
            <h2>{error.statusText|| error.message}</h2>
            <NavLink to={'/'} className="text-xl"><button type="button" className="border-2 border-black rounded-3xl p-5 text-blue-700 font-bold">Back to main page</button></NavLink>
        </div>
    );
};

export default ErrorPage;