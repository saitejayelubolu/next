import React from "react";
import AudioRecorder from "./components/AudioRecorder";
// import Layout from "./components/Layout";
import "./styles/globals.css";

const HomePage: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Audio Recorder</h1>
        <AudioRecorder />
      </div>
    </section>
  );
};

export default HomePage;
