// components/AudioRecorder.tsx
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";

const AudioRecorder: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [audioSize, setAudioSize] = useState<number | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunks = useRef<Blob[]>([]);

  const startRecording = async () => {
    setIsRecording(true);
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;

    mediaRecorder.ondataavailable = e => {
      chunks.current.push(e.data);
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks.current, { type: "audio/wav" });
      setAudioBlob(blob);
      setAudioURL(URL.createObjectURL(blob));
      setAudioSize(blob.size);
      chunks.current = [];
    };

    mediaRecorder.start();
  };

  const stopRecording = () => {
    setIsRecording(false);
    mediaRecorderRef.current?.stop();
  };

  const uploadAudio = () => {
    if (audioBlob) {
      const formData = new FormData();
      formData.append("file", audioBlob, "recording.wav");
      // Perform your upload logic here (e.g., send to server using fetch or axios)
      console.log("Audio uploaded:", audioBlob);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {!isRecording ? (
        <Button onClick={startRecording} className="bg-blue-500">
          Start Recording
        </Button>
      ) : (
        <Button onClick={stopRecording} className="bg-red-500">
          Stop Recording
        </Button>
      )}

      {audioURL && (
        <div className="space-y-2">
          <h3>Recording Preview:</h3>
          <audio controls src={audioURL} className="w-full" />
          <p>File Size: {audioSize ? (audioSize / 1024).toFixed(2) : 0} KB</p>
          {/* <Button onClick={uploadAudio} className="bg-green-500">
            Upload Audio
          </Button> */}
        </div>
      )}
    </div>
  );
};

export default AudioRecorder;
