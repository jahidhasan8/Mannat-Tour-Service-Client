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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../../ErrorPage/ErrorPage";
import AboutServices from "../../Pages/Home/AboutServices/AboutServices";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/services',
                element: <Services></Services>,
            },
            {
                path: '/serviceDetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://assignment-11-server-ebon.vercel.app/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
              path:'/aboutservices',
              element:<AboutServices></AboutServices>
            },
            {
                path: '/myReviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/updateReview/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => fetch(`https://assignment-11-server-ebon.vercel.app/reviews/${params.id}`)
            }
        ]

    },

])