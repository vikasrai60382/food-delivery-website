import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../utils/useLogin";
import UserContext from "../../src/utils/UserContext";
import { useSelector } from "react-redux";
const Header=() =>{
    const [isloggedin,setisloggedin]=useState("true");
    const islogin=useLogin(true)
    /* const {user}=useContext(UserContext); */
    const cartItems=useSelector(store=>store.cart.items)
    // console.log(cartItems);
    return(
        <div className="flex justify-between bg-teal-500">
            <Link to={"./"}><img  className="h-20" src="https://mir-s3-cdn-cf.behance.net/projects/404/a0327b179363355.Y3JvcCwxOTk5LDE1NjQsMCwyMTc.jpg" alt="logo"></img></Link> 
            <div className="">
                <ul className="flex flex-row py-4 m-2">
                    <li className="px-3"><Link to={"/"}>Home</Link></li>
                    <li className="px-3"><Link to={"/about"}>About</Link></li>
                    <li className="px-3"><Link to={"/contact"}>Contact</Link></li>
                    <li className="px-3"><Link to={"/instamart"}>Instamart</Link></li>
                    <li className="px-3"><Link to={"/cart"}>cart-{cartItems.length}</Link></li>
                    <li className="px-3">{(islogin) ? <p>✅</p>:<p>❌</p>}</li>
                    <li className="px-3"> {
                    (isloggedin==="true")?<button className=" text-red-600" onClick={
                       ()=>setisloggedin("false")}>Logout</button>
                       :<button onClick={()=>setisloggedin("true")}>Login</button>
                    }
                    </li>
                    {/* <h1>{user.name}</h1> */}
                </ul>
            </div>
        </div>
    );
  };
  export default Header;