import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import AllTreatment from "../AllTreatment";
import Appointment from "../Appointment";
import Profile from "../Profile";
import TreatmentDetails from "../TreatmentDetails";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const servicesRes = await fetch("/services.json");
          const servicesData = await servicesRes.json();

          const feedbackRes = await fetch("/feedback.json");
          const feedbackData = await feedbackRes.json();
          return { servicesData, feedbackData };
        },
      },
      {
        path: "/all-treatment",
        element: <AllTreatment></AllTreatment>,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/details/:id",
        element: <TreatmentDetails></TreatmentDetails>,
        loader: async ({ params }) => {
          const res = await fetch("/services.json");
          const data = await res.json();
          const singleData = data.find(d=>d.id == params.id);
          console.log(singleData)
          return singleData
        },
      },
    ],
  },
]);
export default route;
