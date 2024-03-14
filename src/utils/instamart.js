import { useState } from "react";
import { Outlet } from "react-router-dom";
const Session=({title,description,isvisible,setisvisible})=>{
    /* const [isvisible,setisvisible]=useState(true); */
    return(
           <div className="border border-black p-5 m-5 cursor-pointer hover:bg-green-100" onClick={()=>{
            {(isvisible)? setisvisible(false):setisvisible(true)}
           }}>
           <h1 className="text-2xl font-bold">{title}</h1>
           {/* {(isvisible)?<button className=" hover:underline cursor-pointer" onClick={()=>{setisvisible(false)}}>Hide</button>
             :
             <button className=" hover:underline cursor-pointer" onClick={()=>{setisvisible(true)}}>show</button>} */}
             {isvisible && <p>{description}</p>}
           </div>
        
    )
}
const Instamart=()=>{
    const [insta,setinsta]=useState("about");
    return(
        <>
        <Outlet/>
         <Session title={"About Instamart:"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} 
          isvisible={insta==="about"} setisvisible={()=>setinsta("about")} />
         <Session title={"Product:"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} 
         isvisible={insta==="product"} setisvisible={()=>setinsta("product")}  />
         <Session title={"Career:"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} 
         isvisible={insta==="career"} setisvisible={()=>setinsta("career")}  />
         
        </>
    )
}
export default Instamart;