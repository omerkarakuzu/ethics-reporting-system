import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import ReportForm from './components/ReportForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/report" element={<ReportForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;