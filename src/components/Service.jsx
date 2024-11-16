import React from 'react';

const Service = ({service}) => {
    return (
<div className="card bg-base-100 max-w-96 border border-orange-300">
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
    <p>{service.description}</p>
    <div className="card-actions justify-start">
      <button className='btn bg-orange-500 text-white'>Check Out More</button>
    </div>
  </div>
</div>
    );
};

export default Service;

