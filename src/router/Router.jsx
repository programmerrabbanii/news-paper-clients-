import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Errorp from "../page/Errorp";
import Home from "../page/Home";
import AddArticles from "../page/AddArticles";
import AllArticles from "../page/AllArticles";
import Dashboard from "../page/Dashboard";
import MyArticles from "../page/MyArticles";
import Subscription from "../page/Subscription";
import PremiumArticles from "../page/PremiumArticles";
import Register from "../page/Register";
import Login from "../page/Login";

const router=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<Errorp></Errorp>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/addartical",
                element:<AddArticles></AddArticles>
            },
            {
                path:"/allartical",
                element:<AllArticles></AllArticles>
            },
            {
                path:"/dashboard",
                element:<Dashboard></Dashboard>
            },
            {
                path:"/myartical",
                element:<MyArticles></MyArticles>
            },
            {
                path:"/subscription",
                element:<Subscription></Subscription>
            },
            {
                path:"/premium",
                element:<PremiumArticles></PremiumArticles>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/login",
                element:<Login></Login>
            } 

        ]
    }
])
export default router