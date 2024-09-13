import React from "react";
import FavBookImg from "../assets/favoritebook.jpg";
import { Link } from "react-router-dom";

const FavBook = () => {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="md: w-1/2 ">
        <img src={FavBookImg} alt="" className="rounded md:w-10/12" />
      </div>
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-5xl font-bold my-5 md:w-3/7 leading-snug">
          Find Your Favorite <span className="text-blue-600">Book Here</span>
        </h2>
        <p className="mb-10 text-large md:w-5/6 space-y-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
          possimus sed illo officiis minus earum doloremque quia neque
          perferendis? Maiores fugit commodi labore saepe sunt est alias
          nesciunt vero amet?
        </p>
        <div className="flex flex-col sm:flex-row justify-between gap-8 md:w-3/4 my-14">
          <div className="flex flex-col sm:flex-row justify-between gap-8 w-full">
            <div>
              <h3 className="text-3xl font-bold">800+</h3>
              <p className="text-base">Book Listing</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">550+</h3>
              <p className="text-base">Registered users</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">1000+</h3>
              <p className="text-base">PDF Downloads</p>
            </div>
          </div>
          <Link to="/shop" className="mt-12 block">
            <button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FavBook;
