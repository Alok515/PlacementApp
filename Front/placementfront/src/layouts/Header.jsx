import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
        <div className="bg-blue-800 text-gray-100 p-2 flex justify-between">
            <div className="font-bold mr-2 p-2">
                <NavLink className="active:bg-blue-400 p-1 m-2 rounded focus:bg-blue-500 text-lg" to='/'>Career Camp</NavLink>
            </div>
            <nav className="p-2">
                <NavLink className="active:bg-blue-400 ml-2" to='/'>Home</NavLink>
                <NavLink className="active:bg-blue-400 ml-2" to='/login'>Login</NavLink>
                <NavLink className="ml-2 active:bg-blue-400" to="/signup">Sign Up</NavLink>

            </nav>
        </div>
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default Header;