import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from './Modal';

const TreatmentDetails = () => {
    const data = useLoaderData()
    const {id, treatment,image, description, cost } = data
    console.log(data)
    return (
        <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-orange-300 p-6">
        <img
          src={image}
          alt={treatment}
          className="w-full object-cover rounded-xl border"
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            {treatment}
          </h2>
          <p className="text-gray-600 text-justify mb-4">{description}</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-orange-600">Fee: {cost}</span>
            <button onClick={()=>document.getElementById('my_modal_1').showModal()} className="px-5 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Book Now
            </button>
          </div>
        </div>
        <Modal></Modal>
      </div>
    );
};

export default TreatmentDetails;