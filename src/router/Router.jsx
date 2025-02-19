import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Errorp from "../page/Errorp";
import Home from "../page/Home";
import AddArticles from "../page/AddArticles";
import AllArticles from "../page/AllArticles";
import MyArticles from "../page/MyArticles";
import Subscription from "../page/Subscription";
import PremiumArticles from "../page/PremiumArticles";
import Register from "../page/Register";
import Login from "../page/Login";
import Private from "./Private";
import ArticleDetails from "../page/ArticalDeteles";
import Payment from "../components/Payment";
import DashboardLayout from "../layouts/DashboardLayout";
import AllUser from "../Dashboardr/AdminDashboard/AllUser";
import AddPubliser from "../Dashboardr/AdminDashboard/AddPubliser";
import AllArticle from "../Dashboardr/AdminDashboard/AllArticle";

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
            // {
            //     path:"/dashboard",
            //     element:<Dashboard></Dashboard>
            // },
            {
                path:"/myartical",
                element:<MyArticles></MyArticles>
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
                element:<ArticleDetails/>
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
    },

    {
        path:"dashboard",
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path:"Allusers",
                element:<AllUser></AllUser>
            },
            {
                path:"Articles",
                element:<AllArticle></AllArticle>
            },
            {
                path:"AddPublisher",
                element:<AddPubliser></AddPubliser>
            }
        ]

    }

])
export default router