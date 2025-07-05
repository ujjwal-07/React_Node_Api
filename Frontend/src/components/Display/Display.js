import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import "react-toastify/dist/ReactToastify.css";

export default function Display() {
    const [isLoading, setIsLoading] = useState(true);
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        dob: "",
    });
    const [age, setAge] = useState("");
    const [dogImage, setDogImage] = useState("");
    const navigate = useNavigate();

    const fetchData = async () => {
        try {

            setIsLoading(true);


            const userResponse = await axios.get("http://localhost:5000/api/user");
            const user = userResponse.data.data;

            setFormData({
                firstname: user.firstname,
                lastname: user.lastname,
                dob: user.dob,
            });


            const imageResponse = await fetch("https://dog.ceo/api/breeds/image/random");
            console.log(imageResponse)
            if(imageResponse.status === 200){
            const imageData = await imageResponse.json();
            setDogImage(imageData.message);
            }
            else{
                setIsLoading(false)
                console.error("Error while fetching image")
            }
            

        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to fetch data");
            setIsLoading(false)
        }
    };


    useEffect(() => {
        if (formData.dob) {
            const birthDate = new Date(formData.dob);
            const today = new Date();
            let calculatedAge = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            const dayDiff = today.getDate() - birthDate.getDate();
            if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
                calculatedAge--;
            }
            setAge(calculatedAge);
        }
    }, [formData.dob]);

    useEffect(() => {
        fetchData();
    }, []);

    const handleImageLoad = () => {

        setIsLoading(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
            {isLoading && <LoadingScreen />}

            <div>
                <button
                    onClick={() => navigate("/")}
                    className="fixed top-4 left-4 z-50 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition-all duration-200 ease-in-out"
                >
                    ← Back
                </button>
            </div>

            <div className="flex flex-col gap-4 w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    User Details
                </h2>

                <div><h1>FirstName: {formData.firstname}</h1></div>
                <div><h1>LastName: {formData.lastname}</h1></div>
                <div><h1>DOB: {formData.dob}</h1></div>
                <div><h1>Age: {age}</h1></div>

                <div className="items-center">
                    <img
                        src={dogImage}
                        alt="Random Dog"
                        className="rounded-2xl"
                        onLoad={handleImageLoad}
                    />
                </div>
            </div>

            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
}
