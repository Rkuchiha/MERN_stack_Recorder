import React, { useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import './Recording.css'

function App() {
  const [recordType, setRecordType] = useState("video"); // Default to video recording

  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({
    video: recordType === "video",
    audio: recordType === "audio",
    screen: recordType === "screen",
  });

  return (
    <div className="container">
      <h1>Recording Options</h1>
      <div className="box">
        <label>
          Choose recording type:{" "}
          <select
            className="container_select"
            value={recordType}
            onChange={(e) => setRecordType(e.target.value)}
          >
            <option value="video">Video</option>
            <option value="audio">Audio</option>
            <option value="screen">Screen</option>
          </select>
        </label>
      </div>
      <div className="box02">
        {status !== "recording" && (
          <button onClick={startRecording}>Start Recording</button>
        )}
        {status === "recording" && (
          <button onClick={stopRecording}>Stop Recording</button>
        )}
      </div>
      <div>
        {mediaBlobUrl && (
          <video src={mediaBlobUrl} controls style={{ maxWidth: "100%" }}></video>
        )}
      </div>
    </div>
  );
}

export default App;
