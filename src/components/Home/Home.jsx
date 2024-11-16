import React from "react";
import Banner from "../Banner";
import { Link, useLoaderData } from "react-router-dom";
import Service from "../Service";
import FeedBack from "../FeedBack";

const Home = () => {
  const { servicesData, feedbackData } = useLoaderData();
  //   const {servicesData , feedbackData} = data
  console.log(servicesData, feedbackData);
  return (
    <div>
      <Banner />
      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {servicesData.slice(0, 4).map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
        <Link to="/all-treatment">
          <button className="btn bg-orange-500 text-white block mx-auto w-1/4 my-6">
            See More
          </button>
        </Link>
      </section>
      <section>
        <div className="space-y-4 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                feedbackData.slice(0,6).map(feedback=><FeedBack key={feedback.id} feedback={feedback}></FeedBack>)
            }
        </div>
      </section>
    </div>
  );
};

export default Home;
