import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

export default function Form() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    dob: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
                setIsLoading(true)

      const response = await axios.post(
        "http://localhost:5000/api/user",
        formData
      );
      console.log(response.data)
      if (response.status === 201) {
        toast.success(response.data.message || "User data saved successfully", {
          onClose: () => {
            setIsLoading(false)
            navigate("/display")
          }
        });
        console.log("Data saved successfully!");

        setFormData({ firstname: "", lastname: "", dob: "" });
      }
    } catch (error) {
      if (error.response) {
        console.error("Server Error:", error.response.data);
        toast.error(error.response.data.message || "Server error occurred");
      } else if (error.request) {
        console.error("No response received:", error.request);
        toast.error("No response from server");
      } else {
        console.error("Unexpected Error:", error.message);
        toast.error("An unexpected error occurred");
      }
      setIsLoading(false)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
      {isLoading && <LoadingScreen/>}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          User Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter first name"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder-gray-400 placeholder:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter last name"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder-gray-400 placeholder:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="dob"
              className="block text-sm font-medium text-gray-700"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="mt-1 block w-full text-gray-500 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder-gray-400 placeholder:text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
          >
            Submit
          </button>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={1000} />
    </div>
  );
}
