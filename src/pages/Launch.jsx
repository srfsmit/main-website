import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Launch.css"; // Custom CSS for fireworks and curtains

const Launch = () => {
  const [isLaunched, setIsLaunched] = useState(false);
  const [isFireworksVisible, setIsFireworksVisible] = useState(false);
  const navigate = useNavigate();

  // Curtain animation variants
  const curtainVariants = {
    hidden: { x: "0%" },
    visible: {
      x: "-100%",
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  // Handle the Launch button click
  const handleLaunch = () => {
    setIsLaunched(true);
    setTimeout(() => {
      setIsFireworksVisible(true);
    }, 1500); // Fireworks after curtains open

    // Navigate to home page after fireworks
    setTimeout(() => {
      setIsFireworksVisible(false); // Stop fireworks
      navigate("/"); // Navigate to home page
    }, 4500); // 3 seconds of fireworks display
  };

  return (
    <div className="launch-container">
      {!isLaunched && (
        <div className="content">
          <h1 className="title">Welcome to SMU SRF</h1>
          <button className="launch-button" onClick={handleLaunch}>
            Launch
          </button>
        </div>
      )}

      {/* Fireworks effect after curtains open */}
      {isFireworksVisible && (
        <div className="fireworks-container">
          <div className="firework"></div>
          <div className="firework"></div>
          <div className="firework"></div>
        </div>
      )}

      {/* Left Curtain */}
      <motion.div
        className={`curtain curtain-left ${isLaunched ? "" : "hidden"}`}
        variants={curtainVariants}
        initial="hidden"
        animate={isLaunched ? "visible" : "hidden"}
      ></motion.div>

      {/* Right Curtain */}
      <motion.div
        className={`curtain curtain-right ${isLaunched ? "" : "hidden"}`}
        variants={curtainVariants}
        initial="hidden"
        animate={isLaunched ? "visible" : "hidden"}
      ></motion.div>
    </div>
  );
};

export default Launch;
