import React from 'react'
import { FaCheckCircle } from "react-icons/fa";


const SuccessMessage = ({ message, onClose }) => {
  return (
    <>
    <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-3">
      <FaCheckCircle className="text-xl" />
      <span>{message}</span>
      <button onClick={onClose} className="text-white font-bold text-lg ml-4 focus:outline-none">&times;</button>
    </div>
    <Msgbutton/>
    </>
  );
};

export default SuccessMessage

const Msgbutton = () => {
    const [showSuccess, setShowSuccess] = useState(false);
  
    return (
      <div className="p-10">
        <button
          onClick={() => setShowSuccess(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Show Success Message
        </button>
  
        {showSuccess && (
          <SuccessMessage 
            message="Form submitted successfully!" 
            onClose={() => setShowSuccess(false)}
          />
        )}
      </div>
    );
  };
  