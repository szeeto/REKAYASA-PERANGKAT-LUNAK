import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const sidebarMenu = [
  { name: "Blog Management", path: "/admin/blog" },
  { name: "Gallery Management", path: "/admin/gallery" },
  { name: "FAQ Management", path: "/admin/faq" },
];

const AdminSidebar = ({ onLogout }) => (
  <aside className="w-64 bg-white shadow-lg flex flex-col">
    <div className="h-16 flex items-center justify-center font-bold text-xl border-b">Admin Panel</div>
    <nav className="flex-1 p-4 space-y-2">
      {sidebarMenu.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `block px-4 py-2 rounded transition font-medium ${isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-blue-100"}`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
    <button
      onClick={onLogout}
      className="m-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Logout
    </button>
  </aside>
);

export default AdminSidebar;
