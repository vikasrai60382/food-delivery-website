import { useState, useEffect } from "react";

const useRestromenu = (id) => {
  const [restroMenu, setrestroMenu] = useState([]);
  const [restrodata, setrestrodata] = useState([]);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    try {
      const data = await fetch(
        `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9085454&lng=77.5203792&restaurantId=${id}`
      );

      const json = await data.json();
      const itemCards = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
      console.log(json?.data?.cards[2]?.card?.card?.info)
      setrestroMenu(itemCards);
      setrestrodata(json?.data?.cards[0]?.card?.card?.info);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }

  return [restroMenu, restrodata];
};

export default useRestromenu;