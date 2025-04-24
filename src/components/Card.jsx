import React from "react";
import teamsLogo from "../assets/Frame 1321315412.png";
import locationIcon from "../assets/Vector (3).png";
import timeIcon from "../assets/Vector (4).png";
import Button from "../UI/Button";

const Card = () => {
  return (
    <div className="border border-gray-300 rounded-xl bg-white w-48 p-2 ">
      <h1 className="font-bold text-xs mb-2">Promoted</h1>
      <div className="flex justify-start gap-5 items-center">
        <img src={teamsLogo} alt="Teams Logo" className="w-12 h-12" />
        <div>
          <h2 className="text-sm"> UI/ UX Designer</h2>
          <h3 className="text-sm">Teams</h3>
        </div>
      </div>
      <div className="flex justify-start gap-4  items-center mt-2 mb-1">
        <img src={locationIcon} alt="location" className="w-3 h-3" />
        <h3 className="text-gray-500 text-xs">Seattle, USA (Remote)</h3>
      </div>
      <div className="flex justify-start gap-4 items-center mb-2 ">
        <img src={timeIcon} alt="location" className="w-3 h-3" />
        <h3 className="text-gray-500 text-xs">1 day ago <a className="text-[var(--custom-blue)] border-l border-l-gray-500 px-2">22 applicants</a></h3>
      </div>
      <div className="flex justify-start gap-10 items-center mt-4 ">
        <Button variant="primary" className="text-xs">Apply Now</Button>
        <i class="fa-regular fa-bookmark text-2xl text-[#AAAAAA]"></i>
        
      </div>
    </div>
  );
};

export default Card;
