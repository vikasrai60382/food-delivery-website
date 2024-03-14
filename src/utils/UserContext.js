import { createContext } from "react";

const UserContext=createContext({
    user:{
      name:"dummy name",
      email:"dummyemail@gmail.com",
},})
export default UserContext;