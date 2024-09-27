// pages/index.tsx
import React from "react";
import AudioRecorder from "../components/AudioRecorder";
import Layout from "../components/Layout";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Audio Recorder</h1>
        <AudioRecorder />
      </div>
    </Layout>
  );
};

export default HomePage;
