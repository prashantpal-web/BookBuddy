import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="mt-10 px-4 lg:px-24">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        All Books are Here
      </h2>
      <div className="grid gap-8 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map((book) => (
          <Card key={book.id} className="shadow-lg rounded-lg overflow-hidden">
            <img
              src={book.imageURL}
              alt={book.bookTitle}
              className="h-40 w-full object-cover"
            />
            <div className="p-2">
              <h5 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                {book.bookTitle}
              </h5>
              <p className="text-gray-700 dark:text-gray-400 mb-4 text-xs">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <button className="bg-blue-700 hover:bg-blue-800 font-semibold text-white py-2 w-full rounded">
                Buy Now
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
