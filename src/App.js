import "./App.css";
import { useState } from "react";
import ServiceForm from "./components/ServiceForm";
import ServiceDetails from "./components/ServiceDetails";

function App() {
  const [showForm, setShowForm] = useState(true);

  return (
    <div className="App">
      <button
        className="btn"
        onClick={() => setShowForm((prev) => !prev)}
        disabled={showForm}
      >
        Submit Request
      </button>
      <button
        className="btn"
        onClick={() => setShowForm((prev) => !prev)}
        disabled={!showForm}
      >
        View Requests
      </button>

      {showForm ? <ServiceForm /> : <ServiceDetails />}
    </div>
  );
}

export default App;
