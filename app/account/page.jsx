"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "react-hot-toast";
import Link from "next/link";

const Account = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, New York, NY 10001",
  });

  const orderHistory = [
    {
      id: "#ORD-001",
      date: "2024-01-15",
      status: "Delivered",
      total: "$89.99",
      items: "Women's Summer Dress",
    },
    {
      id: "#ORD-002",
      date: "2024-01-10",
      status: "Shipped",
      total: "$149.99",
      items: "Winter Coat, Classic Sneakers",
    },
  ];

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    toast.success("Profile updated successfully!");
  };

  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 py-14 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              My Account
            </h1>
            <p className="text-gray-600">
              Manage your account settings and view your order history
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="md:col-span-1">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`w-full text-left px-4 py-3 rounded-lg transition ${
                      activeTab === "profile"
                        ? "bg-orange-50 text-orange-600 border border-orange-200"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    Profile Information
                  </button>
                  <button
                    onClick={() => setActiveTab("orders")}
                    className={`w-full text-left px-4 py-3 rounded-lg transition ${
                      activeTab === "orders"
                        ? "bg-orange-50 text-orange-600 border border-orange-200"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    Order History
                  </button>
                  <button
                    onClick={() => setActiveTab("addresses")}
                    className={`w-full text-left px-4 py-3 rounded-lg transition ${
                      activeTab === "addresses"
                        ? "bg-orange-50 text-orange-600 border border-orange-200"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    Saved Addresses
                  </button>
                  <button
                    onClick={() => setActiveTab("security")}
                    className={`w-full text-left px-4 py-3 rounded-lg transition ${
                      activeTab === "security"
                        ? "bg-orange-50 text-orange-600 border border-orange-200"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    Security
                  </button>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-3">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                {/* Profile Information Tab */}
                {activeTab === "profile" && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">
                      Profile Information
                    </h2>
                    <form onSubmit={handleUpdateProfile} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            value={profileData.name}
                            onChange={(e) =>
                              setProfileData({
                                ...profileData,
                                name: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            value={profileData.email}
                            onChange={(e) =>
                              setProfileData({
                                ...profileData,
                                email: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={profileData.phone}
                            onChange={(e) =>
                              setProfileData({
                                ...profileData,
                                phone: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Address
                          </label>
                          <input
                            type="text"
                            value={profileData.address}
                            onChange={(e) =>
                              setProfileData({
                                ...profileData,
                                address: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition"
                      >
                        Update Profile
                      </button>
                    </form>
                  </div>
                )}

                {/* Order History Tab */}
                {activeTab === "orders" && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">
                      Order History
                    </h2>
                    <div className="space-y-4">
                      {orderHistory.map((order, index) => (
                        <div
                          key={index}
                          className="border border-gray-200 rounded-lg p-4"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium text-gray-800">
                                {order.id}
                              </h3>
                              <p className="text-sm text-gray-600">
                                Ordered on {order.date}
                              </p>
                              <p className="text-sm text-gray-600 mt-1">
                                {order.items}
                              </p>
                            </div>
                            <div className="text-right">
                              <span
                                className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                                  order.status === "Delivered"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-blue-100 text-blue-800"
                                }`}
                              >
                                {order.status}
                              </span>
                              <p className="text-lg font-semibold text-gray-800 mt-2">
                                {order.total}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                      {orderHistory.length === 0 && (
                        <div className="text-center py-8">
                          <p className="text-gray-500">No orders found</p>
                          <Link
                            href="/all-products"
                            className="text-orange-600 hover:text-orange-700 mt-2 inline-block"
                          >
                            Start Shopping
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Addresses Tab */}
                {activeTab === "addresses" && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">
                      Saved Addresses
                    </h2>
                    <div className="space-y-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-gray-800">Home</h3>
                            <p className="text-gray-600">
                              123 Main St, New York, NY 10001
                            </p>
                          </div>
                          <button className="text-orange-600 hover:text-orange-700 text-sm">
                            Edit
                          </button>
                        </div>
                      </div>
                      <Link
                        href="/add-address"
                        className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-orange-300 transition"
                      >
                        <p className="text-gray-600">+ Add New Address</p>
                      </Link>
                    </div>
                  </div>
                )}

                {/* Security Tab */}
                {activeTab === "security" && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">
                      Security Settings
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium text-gray-800 mb-3">
                          Change Password
                        </h3>
                        <form className="space-y-4">
                          <input
                            type="password"
                            placeholder="Current Password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                          />
                          <input
                            type="password"
                            placeholder="New Password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                          />
                          <input
                            type="password"
                            placeholder="Confirm New Password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                          />
                          <button
                            type="submit"
                            className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition"
                          >
                            Update Password
                          </button>
                        </form>
                      </div>

                      <div>
                        <h3 className="font-medium text-gray-800 mb-3">
                          Two-Factor Authentication
                        </h3>
                        <p className="text-gray-600 mb-3">
                          Add an extra layer of security to your account
                        </p>
                        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                          Enable 2FA
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Account;
