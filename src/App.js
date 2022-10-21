
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SpeakerController from './components/SpeakerController';
import FormSpeaker from './components/FormSpeaker';
import './App.css';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<SpeakerController/>} />
        <Route path="/AddSpeaker" element={<FormSpeaker/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
