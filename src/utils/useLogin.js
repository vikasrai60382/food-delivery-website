import { useEffect, useState } from "react"

const useLogin=()=>{
    const [isonline,setisonline]=useState(true);
   
    useEffect(()=>{
        const handleonline=()=>{
            setisonline(true);
        }
         const handleoffline=()=>{
            setisonline(false);
        }
        window.addEventListener("online",handleonline);
        window.addEventListener("offline",handleoffline);

        return ()=>{
                window.removeEventListener("online",handleonline);
                window.removeEventListener("offline",handleoffline);
            }
    },[])
    return(
        isonline
    )
}
export default useLogin;