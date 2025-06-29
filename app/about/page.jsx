"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 py-14">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              About Forever
            </h1>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Forever was born from a passion for fashion and a vision to make
                style accessible to everyone. Since our inception, we've been
                committed to bringing you the latest trends, timeless classics,
                and everything in between.
              </p>
              <p className="text-gray-600">
                We believe that fashion is more than just clothing - it's a form
                of self-expression, confidence, and creativity. Our carefully
                curated collection reflects this philosophy, offering pieces
                that help you tell your unique story.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                10,000+
              </div>
              <div className="text-gray-600">Happy Customers</div>
              <div className="text-3xl font-bold text-orange-600 mb-2 mt-4">
                1,000+
              </div>
              <div className="text-gray-600">Products Available</div>
              <div className="text-3xl font-bold text-orange-600 mb-2 mt-4">
                5★
              </div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">Q</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Quality
                </h3>
                <p className="text-gray-600">
                  We source only the finest materials and work with trusted
                  manufacturers to ensure every piece meets our high standards.
                </p>
              </div>

              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">S</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Style
                </h3>
                <p className="text-gray-600">
                  Our design team stays ahead of trends while honoring timeless
                  aesthetics, creating pieces that are both current and
                  enduring.
                </p>
              </div>

              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">C</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Customer Care
                </h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We're committed to
                  providing exceptional service from browsing to delivery and
                  beyond.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Join the Forever Family
            </h2>
            <p className="text-gray-600 mb-6">
              Discover fashion that speaks to you. Whether you're looking for
              everyday essentials or statement pieces, we're here to help you
              express your unique style.
            </p>
            <button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition">
              Start Shopping
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
