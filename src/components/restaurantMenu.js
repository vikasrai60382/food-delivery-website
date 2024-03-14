
import { useParams } from "react-router-dom";
import { IMG_URL } from "../constatnts";
// import { IMG_URL } from "../constatnts";
import useRestromenu from "../utils/useRestromenu";
import { Shimmer } from "./shimmer";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlices";



const RestaurantMenu=()=>{
    //how to read dynamic url:-usePrams()
    const {id}=useParams();
    const [restroMenu,restrodata]=useRestromenu(id);
   
    const dispatch=useDispatch();
    const addFooditem=(item)=>{
      dispatch(addItems(item));
    }

    return(
        <div className="flex  flex-wrap flex-col justify-center mx-10 p-10">
           <div className="ml-2 py-5 flex justify-center flex-col">
             <div className="  mb-3 text-3xl font-bold">{restrodata?.name}-[{restrodata?.locality}]</div>
           {/* <h1>restro id:{id}</h1> */}
             <img className="mb-3 flex justify-center   w-1/4 h-[300px]" src={IMG_URL+restrodata?.cloudinaryImageId} />
                {/* <h2 className="text-xl font-medium p-2">{restrodata?.locality}</h2> */}
             <div className="text-xl font-medium  border bg-slate-900 w-fit flex justify-center text-white">{restrodata?.avgRating}</div>
           </div>
           
             <ul className="py-8 ">
            {(!restrodata || !restroMenu)?<Shimmer/>:
              (!restroMenu)?<Shimmer/>: restroMenu.map((restro) =>  {
                return (
                   <>
                   <li key={restro?.card?.info?.id} 
                      className="pl-3 py-4 flex justify-between hover:bg-orange-300 hover:rounded-xl"
                      >{restro?.card?.info?.name}
                      <button className="mr-8 p-3 bg-blue-400 rounded-lg text-white " onClick={()=>{addFooditem(restro.card.info)}}>Add</button>
                      </li>
                      <div className="border bottom-2 bg-black-800"></div>
                      </>
              );
                 }
               )
            }
              </ul>  
            
          
        </div>
    )
}
export default RestaurantMenu;