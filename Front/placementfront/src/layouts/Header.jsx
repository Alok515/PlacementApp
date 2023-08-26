import { NavLink, Outlet } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Header = () => {
    const { emp } = useAuthContext();
    const { logout } = useLogout();
    const handleIt = () =>{
        logout();
    }
  return (
    <>
        <div className="bg-blue-800 text-gray-100 p-2 flex justify-between">
            <div className="font-bold mr-2 p-2">
                <NavLink className="active:bg-blue-400 p-1 m-2 rounded focus:bg-blue-500 text-lg" to='/'>Career Camp</NavLink>
            </div>
            <nav className="p-2">
                { !emp &&
                <>
                    <NavLink className="active:bg-blue-400 ml-2" to='/login'>Login</NavLink>
                    <NavLink className="ml-2 active:bg-blue-400" to="/signup">Sign Up</NavLink>
                </>
                }
                {
                    emp &&
                    <>
                    <NavLink className="active:bg-blue-400 ml-2" to='/'>Home</NavLink>
                    <span className="ml-2">{emp.email}</span>
                    <button onClick={handleIt} className="ml-2">logout</button>

                    </>
                }
            </nav>
        </div>
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default Header;