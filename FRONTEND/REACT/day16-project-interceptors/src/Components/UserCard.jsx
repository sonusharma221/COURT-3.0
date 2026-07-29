import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border hover:shadow-xl transition-all duration-300">

      {/* Avatar */}
      <div className="flex justify-center">
        <div className="w-20 h-20 rounded-full bg-indigo-500 text-white flex items-center justify-center text-3xl font-bold">
          {user.name.firstname[0].toUpperCase()}
          {user.name.lastname[0].toUpperCase()}
        </div>
      </div>

      {/* Name */}
      <div className="text-center mt-4">
        <h2 className="text-2xl font-bold capitalize">
          {user.name.firstname} {user.name.lastname}
        </h2>

        <p className="text-gray-500">@{user.username}</p>
      </div>

      {/* Details */}
      <div className="mt-6 space-y-3">

        <div className="flex justify-between">
          <span className="font-semibold">📧 Email</span>
          <span className="text-gray-600 text-sm">
            {user.email}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">📞 Phone</span>
          <span className="text-gray-600">
            {user.phone}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">🏙️ City</span>
          <span className="text-gray-600 capitalize">
            {user.address.city}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">🏠 Street</span>
          <span className="text-gray-600 capitalize">
            {user.address.street}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">📮 Zip Code</span>
          <span className="text-gray-600">
            {user.address.zipcode}
          </span>
        </div>

      </div>

      {/* Button */}
      <button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition">
        View Profile
      </button>
    </div>
  );
};

export default UserCard;