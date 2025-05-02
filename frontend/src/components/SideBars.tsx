import { FaHome, FaUserAlt, FaSignOutAlt, FaUtensils } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-[#FF4B2B] text-white flex flex-col p-6 fixed">
      <h1 className="text-2xl font-bold mb-10">Foodie App</h1>
      <nav className="flex flex-col gap-6 text-lg">
        <Link to="/dashboard" className="flex items-center gap-2 hover:text-gray-200">Dashboard</Link>
        <Link to="/orders" className="flex items-center gap-2 hover:text-gray-200"> Orders</Link>
        <Link to="/profile" className="flex items-center gap-2 hover:text-gray-200">Profile</Link>
        <Link to="/logout" className="flex items-center gap-2 hover:text-gray-200 mt-auto"> Logout</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
