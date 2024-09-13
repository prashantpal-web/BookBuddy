import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const {
    _id,
    bookTitle,
    imageURL,
    authorName,
    bookDescription,
    category,
    bookPdfUrl,
  } = useLoaderData();

  return (
    <div className="pt-16 px-4 lg:px-24 py-8">
      {" "}
      {/* Adjust padding-top to account for navbar height */}
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src={imageURL}
              alt={bookTitle}
              className="w-full h-auto max-w-sm rounded-lg shadow-lg"
            />
          </div>
          {/* Details Section */}
          <div className="flex-grow">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {bookTitle}
            </h1>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              by {authorName}
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Category:{" "}
              <span className="font-medium text-gray-700">{category}</span>
            </p>
            <p className="text-gray-800 mb-6">{bookDescription}</p>
            {bookPdfUrl && (
              <a
                href={bookPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              >
                Read PDF
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
