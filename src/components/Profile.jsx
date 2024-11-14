
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex flex-col items-center justify-center px-6 pb-6 pt-0 bg-gray-50 min-h-screen">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Your Profile</h2>
        {/* Profile Picture Section */}
        <div className="relative mb-6 w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200">
          <img
            src={user.picture || "/path-to-your-default-image.jpg"} 
            alt={user.name}
            className="object-cover w-full h-full"
          />
        </div>

        
        

        {/* Name */}
        <div className="mb-4 text-center">
          <label className="text-lg font-semibold text-black">Name:</label>
          <p className="text-xl text-gray-800">{user.name || "No Name Available"}</p>
        </div>

        {/* Email */}
        <div className="mb-4 text-center">
          <label className="text-lg font-semibold text-black">Email:</label>
          <p className="text-xl text-gray-800">{user.email || "No Email Available"}</p>
        </div>
      </div>
    )
  );
};

export default Profile;
