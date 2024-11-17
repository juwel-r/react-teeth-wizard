import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    return (
<div className="card bg-base-100 max-w-96 border mt-6 border-orange-300">
  <figure className='p-4 max-h-60'>
    <img className='rounded-xl border h-full w-full object-cover'
      src={service.image}
      alt={service.treatment} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    {service.treatment}
      <div className="badge badge-secondary bg-orange-500">Fee: ${service.cost}</div>
    </h2>
    <p>{service.description.slice(0,185)}... <Link className='text-orange-500' to={`/details/${service.id}`}>See More</Link></p>
    <div className="card-actions justify-start">
      <Link to={`/details/${service.id}`}><button className='btn bg-orange-500 text-white'>Check Out More</button></Link>
    </div>
  </div>
</div>
    );
};

export default Service;

