import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';

const AllTreatment = () => {
    const data = useLoaderData()

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    );
};

export default AllTreatment;