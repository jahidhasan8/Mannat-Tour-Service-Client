import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Services from '../../Pages/Services/Services'
import ServiceDetails from '../../Pages/ServiceDetails/ServiceDetails'
import MyReviews from "../../Pages/MyReviews/MyReviews";
import AddService from "../../Pages/AddService/AddService";
import UpdateReview from "../../Pages/MyReviews/UpdateReview/UpdateReview";

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
                
            },
            {
              path:'/services',
              element:<Services></Services>,
              loader:()=>fetch('http://localhost:5000/services')
            },
            {
                path:'/serviceDetails/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/myReviews',
                element:<MyReviews></MyReviews>
            },
            {
                path:'/addService',
                element:<AddService></AddService>
            },
            {
                path:'/updateReview/:id',
                element:<UpdateReview></UpdateReview>,
                loader:({params})=>fetch(`http://localhost:5000/reviews/${params.id}`)
            }
        ]

    },
   
])