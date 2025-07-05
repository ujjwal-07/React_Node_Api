import React from "react";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="w-16 h-16 border-4 border-indigo-500 border-dashed rounded-full animate-spin"></div>

      <p className="justify-center  mt-4 text-lg font-semibold text-gray-700">
        Loading, please wait...
      </p>
    </div>
  );
}
