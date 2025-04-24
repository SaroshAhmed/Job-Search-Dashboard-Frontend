import React from "react";
import profileBanner from "../assets/Rectangle 18369.png";
import profilePicture from "../assets/Oval.png";
import dropdownIcon from "../assets/Vector (1).png";



const Profile = () => {
  return (
    <div className="w-[470px]">
      <div className="inline-block pb-5 rounded-xl bg-white relative">
        <img src={profileBanner} alt="Banner" className="rounded-t-xl" />
        <img
          src={profilePicture}
          alt="User"
          className="absolute xl:top-12 xl:right-32 top-12 right-32 lg:top-9 lg:right-28 md:top-8 md:right-25"
        />
        <div className="text-center mt-10">
          <h1 className="font-bold text-xl">Albert Flores</h1>
          <div className="w-72 mx-auto text-center mt-2">
            <h1>
              Senior Product Designer | UI/UX Designer | Graphic Designer |
              Web...
            </h1>
          <h3 className="text-gray-500 text-sm mt-2">Clinton, Maryland</h3>

          </div>
        </div>
      </div>

      {/* numeric data */}
      <div className="mt-3 p-3 bg-white rounded-xl inline-block md:w-full w-[350px]">
        <div className="flex justify-between border-b border-b-gray-200 py-2">
            <h3>Profile Visitors</h3>
            <h4 className="text-[var(--custom-blue)]">140</h4>
        </div>
        <div className="flex justify-between border-b border-b-gray-200 py-2">
            <h3>Resume Views</h3>
            <h4 className="text-[var(--custom-blue)]">20</h4>
        </div>
        <div className="flex justify-between  pb-4">
            <h3>My Jobs</h3>
            <h4 className="text-[var(--custom-blue)]">88</h4>
        </div>
      </div>

      {/* Calandar */}
      <div className="mt-3 py-1 px-3 bg-white rounded-xl inline-block md:w-full w-[350px]">
        <div className="flex justify-between items-center">
            <div>
            <h2 className="font-bold">My calendar</h2>
            <h3 className="text-sm text-gray-500">Upcoming Interviews</h3>
            </div>
            <img src={dropdownIcon} alt="V" className="" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
