import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import AllTreatment from "../AllTreatment";
import Appointment from "../Appointment";
import Profile from "../Profile";

const route = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader:async()=> {
                    const servicesRes = await fetch('/services.json')
                    const servicesData = await servicesRes.json()

                    const feedbackRes = await fetch('/feedback.json')
                    const feedbackData = await feedbackRes.json()
                    return {servicesData, feedbackData}
                    
                }
            },
            {
                path:'/all-treatment',
                element: <AllTreatment></AllTreatment>,
                loader:()=> fetch('/services.json')
            },
            {
                path:'/appointment',
                element: <Appointment></Appointment>
            },
            {
                path:'/profile',
                element: <Profile></Profile>
            }

        ]
    }
])
export default route