import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Convert Text File to WAV</h1>
      <form action="/upload" method="post" encType="multipart/form-data" className="upload-form">
        <label htmlFor="file" className="file-label">
          Upload a text file:
        </label>
        <input type="file" id="file" name="file" accept=".txt" required className="file-input" />
        <button type="submit" className="convert-button">Convert</button>
      </form>
    </div>
  );
}

export default App;
