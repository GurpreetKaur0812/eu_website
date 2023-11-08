import React, { useState } from 'react';
import Carousel from '../components/Carousel';
import RegistrationForm from '../components/RegistrationForm';
const images = [
  'https://eternaluniversity.edu.in/images/activity/AGY01657703203EducationalVisit.jpg',
  'https://eternaluniversity.edu.in/images/activity/AGY11657703203EducationalVisit.jpg',
  'https://eternaluniversity.edu.in/images/event/MI1656487146Conference.jpg',
  'https://eternaluniversity.edu.in/images/activity/AMI1660805268CollegeActivity.jpg',
  'https://eternaluniversity.edu.in/images/event/MI1660799332Camp.jpg',
];

const containerStyles = {
  width: '400px',
  margin: '0',
};

const cardStyles = {
  height: '200px',
  marginBottom: '20px',
  textAlign: 'center',
};

function NCC() {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // Add state to track form submission

  const handleRegistrationFormClick = () => {
    setShowRegistrationForm(true);
  };

  const handleFormSubmission = () => {
    // Perform form submission logic here (if any)
    console.log('Form submitted');
    setIsSubmitted(true); // Set the submitted state to true
    setShowRegistrationForm(false); // Hide the registration form after submission
  };

  return (
    <div className='container' style={containerStyles}>
      <Carousel images={images} />

      <div>
        <h4 className='text-center'>NCC (National Cadet Corps) at Eternal University:</h4>
        <p className='text-center'>NCC is open to school and college students on a voluntary basis. It provides basic military training, instills discipline, and promotes the motto "Unity and Discipline."</p>
      </div>

      <div className='d-flex flex-row'>
      <div className="card rounded-lg backdrop-blur-lg shadow-lg shadow-neutral-600 mt-[25%]" style={cardStyles}>
        <div className="card-body">
          <h6 className="card-subtitle mb-2">Certificates:</h6>
          <p className="card-text text-center"> {/* Add text-center class */}
            C-Certificate is the highest recognition. B-Certificate is the initial qualification for senior NCC cadets.
          </p>
        </div>
      </div>

      <div className="card rounded-lg backdrop-blur-lg shadow-lg shadow-neutral-600 mt-[25%]" style={cardStyles}>
        <div className="card-body">
          <h6 className="card-subtitle mb-2">Activities:</h6>
          <p className="card-text text-center"> {/* Add text-center class */}
            Focus on instilling discipline and fostering healthy competition. Provides leadership, military, and physical training to over 13 lakh youth.
          </p>
        </div>
      </div>

      <div className="card rounded-lg backdrop-blur-lg shadow-lg shadow-neutral-600 mt-[25%]" style={cardStyles}>
        <div className="card-body">
          <h6 className="card-subtitle mb-2">Benefits:</h6>
          <p className="card-text text-center"> {/* Add text-center class */}
            Incentives for NCC certificate holders in recruitment. Special Entry Scheme for graduates. Exemption from CDS examination.
          </p>
        </div>
      </div>

      <div className="card rounded-lg backdrop-blur-lg shadow-lg shadow-neutral-600 mt-[25%]" style={cardStyles}>
        <div className="card-body">
          <h6 className="card-subtitle mb-2">NCC at Eternal University:</h6>
          <p className="card-text text-center"> {/* Add text-center class */}
            Conducted Annual Training Camp for 420 cadets in Himachal Pradesh.
          </p>
        </div>
      </div>
      </div>

      {!showRegistrationForm || isSubmitted ? (
        <div className='text-center'>
          <button className=' color btn btn-primary  mr-40 w-60 h-14 rounded-md text-xl font-bold pt-2 ' onClick={handleRegistrationFormClick}>
            Registration Form
          </button>
        </div>
      ) : (
        <RegistrationForm onSubmit={handleFormSubmission} />
      )}
    </div>
  );
}

export default NCC;

