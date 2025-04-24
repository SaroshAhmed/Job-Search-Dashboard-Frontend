import React from "react";
import dropdownIcon2 from "../assets/Vector (2).png";
import Button from "../UI/Button";
import searchIcon from "../assets/Group 1321315337 (1).png";
import Card from "./Card";
const JobSearch = () => {
  const cards5 = Array(5).fill(null); // for 5 cards
  const cards10 = Array(10).fill(null); // for 10 cards

  return (
    <div className="mx-auto w-full">
      <div className="grid grid-cols-1 gap-2 mb-6">
        <h1 className="font-bold text-2xl">
          Find your Dream Job,{" "}
          <span className="text-[var(--custom-blue)]"> Albert!</span>
        </h1>
        <h3 className="text-gray-500 text-sm">
          Explore the latest job openings and apply for the best oppurtunities
          available today!
        </h3>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white px-4 py-4 rounded-xl gap-4 md:gap-0">
        <h3 className="text-gray-500 text-sm">
          Job Title, Company, or Keywords
        </h3>

        <div className="flex flex-col sm:flex-row justify-end w-full md:w-auto gap-4">
          <div className="flex gap-3 items-center text-gray-500 text-sm border-t sm:border-t-0 sm:border-l border-gray-200 pt-4 sm:pt-0 sm:px-4">
            <h3>Select Location</h3>
            <img src={dropdownIcon2} alt="Dropdown" />
          </div>

          <div className="flex gap-3 items-center text-gray-500 text-sm border-t sm:border-t-0 sm:border-l border-gray-200 pt-4 sm:pt-0 sm:px-4">
            <h3>Job Type</h3>
            <img src={dropdownIcon2} alt="Dropdown" />
          </div>

          {/* Search Button */}
          {/* <div className="flex gap-3 items-center justify-center px-6 py-2 bg-[var(--custom-blue)] rounded-lg text-sm">
            <img src={searchIcon} alt="Search" className="h-4 w-4" />
            <h5 className="text-white">Search</h5>
          </div> */}
          <Button className="flex items-center gap-3"> <img src={searchIcon} alt="Search" className="h-4 w-4" /> Search</Button>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap justify-start gap-4 items-center text-sm text-gray-500 mt-6 ">
        <h3>Similiar: </h3>
        <Button variant="outline"> Frontend </Button>
        <Button variant="outline"> Backend </Button>
        <Button variant="outline"> Graphics Designer </Button>
      </div>

      {/* Featured Jobs */}
      <div className="flex items-center gap-6 my-4 border-t border-t-[#E9ECEF] pt-6">
        <h1 className="text-xl">Featured Jobs</h1>
        <a className="text-lg text-[var(--custom-blue)] underline">
          See Featured Jobs
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-1 md:gap-5 justify-self-center">
        {cards5.map((_, index) => (
          <Card key={`featured-${index}`} />
        ))}
      </div>

      {/* Recommended Jobs */}
      <div className="flex items-center gap-6 my-4 border-t border-t-[#E9ECEF] pt-6">
        <h1 className="text-xl">See Recommended Jobs</h1>
        <a className="text-lg text-[var(--custom-blue)] underline">
          See Featured Jobs
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-1 md:gap-5 justify-self-center">
        {cards10.map((_, index) => (
          <Card key={`recommended-${index}`} />
        ))}
      </div>

      {/* Latest Jobs */}
      <div className="flex items-center gap-6 my-4 border-t border-t-[#E9ECEF] pt-6">
        <h1 className="text-xl">Latest Jobs</h1>
        <a className="text-lg text-[var(--custom-blue)] underline">
          See Latest Jobs
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-1 md:gap-5 justify-self-center">
        {cards10.map((_, index) => (
          <Card key={`recommended-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default JobSearch;
