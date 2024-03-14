import { Outlet } from "react-router-dom";
import profile from "./profile";
const About=() =>
{
    return(
        <>
        <Outlet />
         <h1>About US</h1>
         <h2>everything about us in this page</h2>
        
        </>
    );
}
export default About;