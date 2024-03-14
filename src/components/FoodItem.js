import { IMG_URL } from "../constatnts"

const FoodItem=(props)=>{
  const {defaultPrice,name,imageId,price}=props;
    return(
       <div className="border w-1/6 h-1/6 ">
        <img className="rounded-3xl" src={IMG_URL+imageId}></img>
        <div className="flex justify-center">{name}</div>
        <div className="flex justify-center">Price: Rs.{(defaultPrice)?defaultPrice/100:price/100}</div>
       </div>
    )
}
export default FoodItem;