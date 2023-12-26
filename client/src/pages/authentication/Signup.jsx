import React from "react";
import { Link } from "react-router-dom";
import { firebaseConfig } from "./firebaseconfig";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [cnic, setCnic] = useState("");
  const [registrationId, setRegistrationId] = useState("");
  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      // Use Firebase authentication to create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Access the user information from the user credential
      const user = userCredential.user;

      // Update user profile with additional information
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
        phoneNumber: contactNo,
      });

      console.log(contactNo);
      // Create a user data object with additional attributes
      const userData = {
        userId: user.uid,
        email: user.email,
        firstName,
        lastName,
        contactNo,
        cnic,
        registrationId,
      };

      // Save additional user data to Firebase (replace 'users' with your collection name)
      // await setDoc(doc(db, 'users', user.uid), userData);

      toast.success("User signed up successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error("Error signing up:", error);
    }
  };
  return (
    <div className="bg-[#109CF1] w-full relative min-h-[100vh]">
      <div className="w-full absolute">
        <img src="./Assests/front.png" alt="" className="h-[100vh]  mx-auto" />
        <div className="bg-black/50 h-[100vh]  mx-auto w-full absolute top-0"></div>
      </div>
      <div className="w-full z-20 justify-center items-center flex flex-col gap-8 h-[100vh] bg-">
        <p className="z-20 text-3xl font-bold text-white">Sign Up</p>
        <form
          onSubmit={handleSignup}
          action=""
          className="z-20 flex flex-col gap-8 justify-center items-center"
        >
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
            className="min-w-[500px] z-20 shadow-md font-bold bg-white px-8 py-2 rounded-md"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your last name"
            className="min-w-[500px] z-20 shadow-md font-bold bg-white px-8 py-2 rounded-md"
          />
          <input
            type="text"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
            placeholder="Enter your contact number"
            className="min-w-[500px] z-20 shadow-md font-bold bg-white px-8 py-2 rounded-md"
          />

          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="min-w-[500px]  z-20   shadow-md font-bold  bg-white  px-8 py-2 rounded-md "
          />
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="min-w-[500px]  z-20   shadow-md font-bold  bg-white  px-8 py-2 rounded-md "
          />
          <button
            className="flex z-20 min-w-[200px] justify-center shadow-md font-bold items-center bg-black text-white px-8 py-2 rounded-md "
            type="submit"
          >
            Sign Up
          </button>
          <Link to="/login">
            <p className="text- underline text-white">move to login</p>
          </Link>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </div>
  );
};

export default Signup;
