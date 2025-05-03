import Sidebar from "../SideBars";
import FoodCollection from "./foodCollection";

const UserDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 min-h-screen p-10 ml-64 bg-gray-50">
        <h1 className="mb-6 text-3xl font-bold">Welcome, {user?.email?.split("@")[0] || "Guest"}!</h1>

        <section className="grid grid-cols-1 gap-6 mb-10 md:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="mb-2 text-xl font-semibold">Profile Summary</h2>
            <p><strong>Email:</strong> {user?.email || "Not available"}</p>
            <p><strong>Joined:</strong> Jan 2024</p>
            <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600">Edit Profile</button>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="mb-4 text-xl font-semibold">Quick Stats</h2>
            <ul className="space-y-2">
              <li>📦 Orders Placed: <strong>12</strong></li>
              <li>⭐ Average Rating: <strong>4.8</strong></li>
              <li>🕒 Last Order: <strong>2 days ago</strong></li>
            </ul>
          </div>
        </section>
         <FoodCollection></FoodCollection>
        <section className="p-6 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-xl font-semibold">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead className="font-medium border-b">
                <tr>
                  <th className="px-4 py-2">Order ID</th>
                  <th className="px-4 py-2">Items</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2">#1023</td>
                  <td className="px-4 py-2">2x Burger, 1x Fries</td>
                  <td className="px-4 py-2 font-semibold text-green-600">Delivered</td>
                  <td className="px-4 py-2">Apr 27, 2025</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">#1022</td>
                  <td className="px-4 py-2">1x Pizza</td>
                  <td className="px-4 py-2 font-semibold text-yellow-600">Pending</td>
                  <td className="px-4 py-2">Apr 26, 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserDashboard;
