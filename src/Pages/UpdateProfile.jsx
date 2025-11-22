import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import { auth } from "../firebase/firebase.config";
const UpdateProfile = () => {
  const { user, updateProfileFunc, setUser } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdateUser = (e) => {
    e.preventDefault();
    updateProfileFunc(displayName, photoURL)
      .then(() => {
        toast.success("Profile updated successfully");
        setUser({ ...auth.currentUser });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="min-h-80 md:min-h-[400px] lg:min-h-[480px] flex justify-center items-center bg-gray-100">
      <div className="max-w-xl w-full mx-4">
        <section className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <form
            onSubmit={handleUpdateUser}
            className="mt-10 space-y-4 w-full max-w-md"
          >
            <input
              type="text"
              value={displayName}
              required
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Update name"
              className="input input-bordered w-full"
            />

            <input
              type="text"
              value={photoURL}
              required
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Update photo URL"
              className="input input-bordered w-full"
            />

            <button type="submit" className="btn btn-primary w-full">
              Update Profile
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default UpdateProfile;
