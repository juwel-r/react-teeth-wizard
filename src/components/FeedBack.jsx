import React from "react";

const FeedBack = ({ feedback }) => {
  const { id, name, userImg, comment, rating } = feedback;
  return (
    <div className="bg-base-100 space-y-4 p-6 border rounded-xl">
      <figure className="col-span-1 flex justify-evenly items-center">
        <img className="rounded-full"
          src={userImg}
          alt={name}
        />
        <h2 className="card-title">{name}</h2>
      </figure>
      <div className="card-body p-0 px-4 pl-8 col-span-9">
        <p>{comment}</p>
        <div className="card-actions justify-end">
          <p className="font-bold">Rating: {rating} </p>
          <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
