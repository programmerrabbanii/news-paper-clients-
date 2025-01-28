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
import Private from "./Private";
import ArticleDetails from "../page/ArticalDeteles";
import Payment from "../components/Payment";

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
                element:<Private><AddArticles></AddArticles></Private>
            },
            {
                path:"/allartical",
                element:<AllArticles></AllArticles>
            },
            // {
            //     path:"/dashboard",
            //     element:<Dashboard></Dashboard>
            // },
            {
                path:"/myartical",
                element:<Private><MyArticles></MyArticles></Private>
            },
            {
                path:"/subscription",
                element:<Private><Subscription></Subscription></Private>
            },
            {
                path:"/premium",
                element:<Private><PremiumArticles></PremiumArticles></Private>
            },
            {
                path: "/articles/:id",
                element: <Private><ArticleDetails/></Private>,
            },
            {
                path:"/payment",
                element:<Private><Payment></Payment></Private>

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