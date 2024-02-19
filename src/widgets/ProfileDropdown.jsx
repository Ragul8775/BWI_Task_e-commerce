import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useAuth } from "../context/login";
// Ensure you have @heroicons/react installed

const ProfileDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { logout } = useAuth();
  const { userData } = useAuth();
  console.log("UserData:", userData);
  return (
    <div className="relative ">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center gap-2"
      >
        <img
          src={userData.image}
          alt="Profile"
          className="h-10 w-10 rounded-full  border-light border-2 "
        />
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-xl">
          <a
            href="#"
            className="px-4 py-2  text-black hover:text-secondary flex justify-center items-center"
          >
            Name:<span className="font-semibold">{userData.firstName}</span>
          </a>
          <a
            href=""
            onClick={logout}
            className="px-4 py-2  hover:bg-primary font-semibold text-light hover:text-white border-2 flex justify-center items-center hover:rounded"
          >
            Sign Out
          </a>
        </div>
      )}
    </div>
  );
};
export default ProfileDropdown;
