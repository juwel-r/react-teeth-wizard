import React from 'react';
import banner from '../assets/banner.jpg'

const Banner = () => {
    return (
<div className="hero bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={banner}
      className="max-w-xl rounded-lg " />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary bg-orange-500 border-none">Book Now</button>
    </div>
  </div>
</div>
    );
};

export default Banner;