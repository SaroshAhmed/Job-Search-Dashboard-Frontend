import React, { useState } from 'react';
import logo from "../assets/Group 1907.png";
import profileIcon from "../assets/Rectangle 1516.png";
import searchIcon from "../assets/Group 1321315337.png";
import Button from '../UI/Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="flex justify-between items-center py-4 px-6 lg:px-8">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-10 shrink-0" />

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6 text-sm text-gray-500">
          <li className="text-[var(--custom-blue)] font-bold">Find Jobs</li>
          <li>Top Companies</li>
          <li>Job Tracker</li>
          <li>My Calendar</li>
          <li>Documents</li>
          <li>Messages</li>
          <li>Notifications</li>
        </ul>

        {/* Search Bar */}
        <form className="hidden lg:flex">
          <div className="flex items-center gap-2 bg-[#F6F9FF] rounded px-3 py-2">
            <img src={searchIcon} alt="Search" />
            <input
              type="text"
              placeholder="Search"
              className="outline-0 w-72 bg-transparent"
            />
          </div>
        </form>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          <Button>Resume Builder</Button>
          <img src={profileIcon} alt="Profile" className="h-10 w-10 rounded-full" />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden block text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            // Close Icon (X)
            <i class="fa-solid fa-xmark"></i>
          ) : (
            // Hamburger Icon
            <i class="fa-solid fa-bars"></i>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden px-6 pb-4">
          <ul className="flex flex-col gap-3 text-gray-700">
            <li className="text-[var(--custom-blue)] font-bold">Find Jobs</li>
            <li>Top Companies</li>
            <li>Job Tracker</li>
            <li>My Calendar</li>
            <li>Documents</li>
            <li>Messages</li>
            <li>Notifications</li>
          </ul>

          <form className="mt-4">
            <div className="flex items-center gap-2 bg-[#F6F9FF] rounded px-3 py-2">
              <img src={searchIcon} alt="Search" />
              <input
                type="text"
                placeholder="Search"
                className="outline-0 w-full bg-transparent"
              />
            </div>
          </form>

          <div className="mt-4 flex flex-row justify-between md:flex-col gap-3">
            <Button variant="primary">Resume Builder</Button>
            <img src={profileIcon} alt="Profile" className="h-10 w-10 rounded-full self-start" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
