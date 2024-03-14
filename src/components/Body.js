import { restaurants,IMG_URL } from "../constatnts";
import { useContext, useEffect, useState } from "react";
import { Shimmer } from "./shimmer";
import { Link } from "react-router-dom";
import UserContext from "../../src/utils/UserContext";
const Rest=({
    name,
    locality,
    cuisines,
    avgRating,
    cloudinaryImageId,
}) =>{
    const {user}=useContext(UserContext);
        return(
            <>
            <div className="w-[290px] h-[500px]  p-3 shadow-xl mx-1 hover:bg-green-100">
                <img className="w-auto" src={IMG_URL + cloudinaryImageId }></img>
                <h3 className="font-bold text-lg">{name}</h3>
                <h3 className="text-md ">[ {locality} ]</h3>
                <h4 className="text-sm">{cuisines.join(", ")}</h4>
                <h4 className="text-sm bg-green-200 text-black inline-block p-2 " >{"⭐"+avgRating}</h4>
                {/* <h4>{user.name}</h4>
                <h4>{user.email}</h4> */}
            </div>
        </>
        );
};
function filterData(submitText,restaurant)
{
   return (
    restaurant.filter((restro) =>
            restro.info.name.toLowerCase().includes(submitText.toLowerCase())
        )
   );
}
const Body=() =>{
    
    const [submitText,setsubmitText]=useState("");
    /* const [searchclick,setsearchclick]=useState("false"); */
    const [allrestaurant,setallrestaurant]=useState([]);
    const [filteredrestaurant,setfilteredrestaurant]=useState([]);
    /* const [originalrestro,setoriginalrestro]=useState(RestList); */
      useEffect(()=>{
        getRestaurants();

    },[]);

    async function getRestaurants()
    {
        try{
        const data=await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
        const json= await data.json();
        console.log(json);
        setallrestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredrestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        catch (error) { 
            console.error("Error fetching data:", error.message);
            // Handle the error appropriately, e.g., show a user-friendly message
          }
    } 
   /*  console.log("render()") */
   if(!allrestaurant) return null;
//    if(filteredrestaurant?.length===0)

//     return <h1>no restro</h1>;
const {user,setuser}=useContext(UserContext);
    return (allrestaurant?.length===0)?<Shimmer/>: (
        <>
        <div className="flex m-1 px-5 justify-center">
        <input type="text" 
                placeholder="Search your favourite restro..."
                className="m-5 w-1/2 rounded-lg p-3 border-2 border-gray-300 "
                value={submitText}
                onChange={(e) =>{
                    setsubmitText(e.target.value);
                }}
                ></input>
               {/*  <h1>{searchclick}</h1> */}
                <button className="w-1/12 text-lg border-[2px] border-red-200 p-3 m-5 bg-green-300 rounded-lg" onClick={()=>{
                    /* setsearchclick("true"); */
                    //need to filter data
                    const data=filterData(submitText,allrestaurant);
                    //update the state-restaurant
                    setfilteredrestaurant(data);
                }}>search</button>
               
        </div>
                
        <div className="flex flex-wrap ">
        {
            (filteredrestaurant.length === 0)?<h1 className="justify-center text-4xl p-10 m-auto">No restro found!!!</h1>:filteredrestaurant.map((rest) => {
                return(
                   <Link to={"/restaurantMenu/"+rest.info.id} key={rest.info.id}>
                      <Rest {...rest.info} />
                    </Link>
                );
            })
        }
        </div>
        </>
        
    )
}
export default Body;