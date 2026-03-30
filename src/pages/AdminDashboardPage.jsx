

import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextUtils.js";
import { useNavigate } from "react-router-dom";
import { FaBlog, FaImages, FaQuestionCircle, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import logo from '../assets/logo.png';

const sidebarMenu = [
	{ name: "Blog", path: "/admin/blog", icon: <FaBlog /> },
	{ name: "Galeri", path: "/admin/gallery", icon: <FaImages /> },
	{ name: "FAQ", path: "/admin/faq", icon: <FaQuestionCircle /> },
];


export default function AdminDashboardPage() {
	const { user, logout } = useAuth() || {};
	const navigate = useNavigate();

	const handleLogout = async () => {
		await logout();
		navigate('/');
	};

	return (
		<div className="min-h-screen flex bg-gradient-to-tr from-[#0f2027] via-[#2c5364] to-[#24243e]">
			{/* Sidebar */}
			<aside className="w-72 bg-white/20 backdrop-blur-lg shadow-2xl flex flex-col rounded-r-3xl border-r border-white/30">
				<div className="h-24 flex flex-col items-center justify-center border-b border-white/20">
					<img src={logo} alt="Logo" className="w-16 h-16 rounded-full shadow-lg mb-2 bg-white/80" />
					<span className="font-bold text-lg text-white tracking-widest drop-shadow">Admin Panel</span>
				</div>
				<div className="flex flex-col items-center py-6">
					<FaUserCircle className="text-5xl text-white/80 mb-2" />
					<span className="text-white font-semibold text-base">{user?.email || 'Admin'}</span>
				</div>
				<nav className="flex-1 px-6 space-y-2">
					{sidebarMenu.map((item) => (
						<NavLink
							key={item.path}
							to={item.path}
							className={({ isActive }) =>
								`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-lg transition-all duration-200 ${isActive ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg scale-105" : "text-white/80 hover:bg-white/10 hover:scale-105"}`
							}
						>
							<span className="text-2xl">{item.icon}</span>
							{item.name}
						</NavLink>
					))}
				</nav>
				<div className="p-6 mt-auto">
					<button
						className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold shadow-lg hover:scale-105 transition-all"
						onClick={handleLogout}
					>
						<FaSignOutAlt /> Logout
					</button>
				</div>
			</aside>
			{/* Main Content */}
			<main className="flex-1 p-8 overflow-y-auto">
				<section className="py-16 text-center bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 text-white rounded-3xl shadow-2xl mb-10 animate-fade-in" data-aos="fade-right">
					<h1 className="text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg" data-aos="fade-up">Admin Dashboard</h1>
					<p className="text-xl mb-8 opacity-90">Kelola konten dan data website di sini</p>
				</section>
				<section className="py-12 px-4 max-w-6xl mx-auto" data-aos="fade-left">
					<h2 className="text-3xl font-bold mb-8 text-center text-white/90">Menu Admin</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
						<div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-all duration-200 border border-white/20 animate-float">
							<FaBlog className="text-4xl text-purple-600 mb-3" />
							<h3 className="text-xl font-semibold mb-2 text-white">Manajemen Blog</h3>
							<p className="text-white/80 text-center">Tambah, edit, dan hapus postingan blog.</p>
						</div>
						<div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-all duration-200 border border-white/20 animate-float-delay">
							<FaImages className="text-4xl text-blue-500 mb-3" />
							<h3 className="text-xl font-semibold mb-2 text-white">Manajemen Galeri</h3>
							<p className="text-white/80 text-center">Kelola gambar dan album galeri.</p>
						</div>
						<div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-all duration-200 border border-white/20 animate-float-delay2">
							<FaQuestionCircle className="text-4xl text-pink-500 mb-3" />
							<h3 className="text-xl font-semibold mb-2 text-white">Manajemen FAQ</h3>
							<p className="text-white/80 text-center">Atur pertanyaan yang sering diajukan.</p>
						</div>
					</div>
				</section>
				<Outlet />
			</main>
		</div>
	);
}
