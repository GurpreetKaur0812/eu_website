import React, { useState } from "react";
import Carousel from "../components/Carousel";
import RegistrationForm from "../components/RegistrationForm";
import SlidingCards from "../components/ImageSlider";

import image1 from '../assets/img1.jpeg';
import image2 from '../assets/img2.jpeg';
import image3 from '../assets/img3.jpeg';
import image4 from '../assets/img4.jpeg';

const images = [
  "https://eternaluniversity.edu.in/images/activity/AGY01657703203EducationalVisit.jpg",
  "https://eternaluniversity.edu.in/images/activity/AGY11657703203EducationalVisit.jpg",
  "https://eternaluniversity.edu.in/images/event/MI1656487146Conference.jpg",
  "https://eternaluniversity.edu.in/images/activity/AMI1660805268CollegeActivity.jpg",
  "https://eternaluniversity.edu.in/images/event/MI1660799332Camp.jpg",
];



const ClubImages = [image1, image2, image3,image4];

function Clubs() {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRegistrationFormClick = () => {
    setShowRegistrationForm(true);
  };

  const handleFormSubmission = () => {
    console.log("Form submitted");
    setIsSubmitted(true);
    setShowRegistrationForm(false);
  };

  return (
    <div>
      <Carousel images={images} />
      
      <div className="h-[50vh] grid justify-center bg-[#072e33] text-white">
      <p className="lg:text-5xl md:text-4xl text-3xl text-center lg:mt-12 mt-16 font-[990]">
        Clubs
        </p>
        <p className="lg:text-2xl md:w-[70vw] text-center lg:-mt-12 -mt-16 md:text-xl">
          "Joining a college club is like unlocking a secret level—except instead of battling monsters, you conquer new friendships and navigate the maze of exciting events. It's the ultimate cheat code for a memorable college experience!"
        </p>
      </div>
      
      
      <SlidingCards images={ClubImages} />
    
      {!showRegistrationForm || isSubmitted ? (
        <div className="text-center mt-14 mb-10">
          <button
            className="bg-[#072e33] text-white btn btn-primary w-60 h-14 rounded-full text-xl font-bold mt-6"
            onClick={handleRegistrationFormClick}>
            Registration Form
          </button>
        </div>
      ) : (
        <RegistrationForm context="Clubs" onSubmit={handleFormSubmission} />
      )}
    </div>
  );
}

export default Clubs;
