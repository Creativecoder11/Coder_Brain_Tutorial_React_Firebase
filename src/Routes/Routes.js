import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Category from "../Pages/Category/Category";
import CourseSummary from "../Pages/CourseSummary/CourseSummary";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Courses from "../Pages/Courses/Courses";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FAQ from "../Pages/FAQ/FAQ";
import Blog from "../Pages/Blog/Blog";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>, 
            },
            {
                path:'/home',
                element: <Home></Home>, 
            },
            {
                path:'/courses',
                element: <Courses></Courses>,
                loader: () => fetch("https://coder-brain-learning-server.vercel.app/course-details") 
            },
            {
                path:'/courses/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://coder-brain-learning-server.vercel.app/courses/${params.id}`) 
            },
            {
                path:'/course-details/:id',
                element: <CourseSummary></CourseSummary>,
                loader: ({params}) => fetch(`https://coder-brain-learning-server.vercel.app/course-details/${params.id}`) 
            },
            {
                path:'/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader:({params})=> fetch(`https://coder-brain-learning-server.vercel.app/course-details/${params.id}`),
            },
            {
                path:'/login',
                element: <Login></Login>,
            },
            {
                path:'/register',
                element: <Register></Register>,
            },
            {
                path:'/faq',
                element: <FAQ></FAQ>
            },
            {
                path:'/blog',
                element: <Blog></Blog>,
            },
            {
                path:'*',
                element: <ErrorPage></ErrorPage>,
            },
        ]
    }
])