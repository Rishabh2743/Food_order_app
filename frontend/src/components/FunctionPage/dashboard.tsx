import Sidebar from "../SideBars";

const UserDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 flex-1 p-10 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Welcome, {user?.email?.split("@")[0] || "Guest"}!</h1>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Profile Summary</h2>
            <p><strong>Email:</strong> {user?.email || "Not available"}</p>
            <p><strong>Joined:</strong> Jan 2024</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Edit Profile</button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
            <ul className="space-y-2">
              <li>📦 Orders Placed: <strong>12</strong></li>
              <li>⭐ Average Rating: <strong>4.8</strong></li>
              <li>🕒 Last Order: <strong>2 days ago</strong></li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b font-medium">
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
                  <td className="px-4 py-2 text-green-600 font-semibold">Delivered</td>
                  <td className="px-4 py-2">Apr 27, 2025</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">#1022</td>
                  <td className="px-4 py-2">1x Pizza</td>
                  <td className="px-4 py-2 text-yellow-600 font-semibold">Pending</td>
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
