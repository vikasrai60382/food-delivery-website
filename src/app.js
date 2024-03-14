import React, { lazy,Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import { Footer } from './components/Footer';
import Body from './components/Body';
// import Footer from "./components/Footer";
import About from './components/about';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Error from './components/error';
import { Outlet } from 'react-router-dom';
import Cart from './components/cart';
import Contact from './components/contact';
import RestaurantMenu from './components/restaurantMenu';
import Profile from './components/profile';
import { useContext } from 'react';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import store from './utils/store';




// const head1=React.createElement(
//     "h1",
//     {
//         id:"title",
//     },
//     "DIPAK"
// );
// const head2=React.createElement(
//     "h2",
//     {
//         id:"title2",
//     },
//     "ROHIT"
// );
// const comp=React.createElement(
//     "div",
//     {
//         id:"comp",
//     },
//     [head1,head2]
// );
// console.log(comp);

//L-4
//JSX syntax
// const head1 =() => (
//         <h1 id="title" key="h1" >hi</h1>
// );
// const Funcomp = () => {
//     return (
//         <div>
//             {head1()}
//             <h2>hello</h2>
//         </div>
//     );
// };

/*
  l5
  create a food orderng app
  -appLauout
     -header
        -logo(left)
        -nav-items(right side)
        -cart
     -body
        -search bar
        -restaurant-list
           -restuarnt-name
           -image
           -rating
           -cuisine
    -footer
         -copyright
         -other descriptions
*/
//lazy loading
//code splitting
//chunking
//dynamic loading
//on demand laading
const Instamart=lazy(()=>import("./utils/instamart"))




//hard data and dynamic data concept
const AppLaout=() =>{
   const [user,setuser]=useState({
      name:"Prabhat Kumar",
      email:"pra854109@gmail.com",
 });
    return(
        <Provider store={store}>
         <UserContext.Provider value={{
         user:user,
         setuser:setuser,
         }}
         >
          <Header />
          <Outlet/>
          <Footer />
          </UserContext.Provider>
        </Provider>
    )
}

const appRouter=createBrowserRouter([
   {
      path:"/",
      element:<AppLaout />,
      errorElement:<Error />,
      children:[{
         path:"/",
         element:<Body />,
      },
      {
         path:"/about",
         element:<About />,
         children:[
            {
               path:"profile",
               element:<Profile />
            }
         ]
      },
      {
         path:"/contact",
         element:<Contact />,
      },
      {
         path:"/cart",
         element:<Cart />,
      },
      {
         path:"/restaurantMenu/:id",
         element:<RestaurantMenu />,
      },
      {
         path:"/instamart",
         element:<Suspense fallback={<h1>Loading....</h1>}>
                <Instamart />
         </Suspense>,
      },
   ]
   },
   
])
const root1=ReactDOM.createRoot(document.getElementById("root"));
root1.render(<RouterProvider router={appRouter} />);