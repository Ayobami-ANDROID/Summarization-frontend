import React, { useState } from "react";
import axios from "axios";

const Classify = () => {
  const [inputText, setInputText] = useState("");
  const [prediction, setPrediction] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handlePredict = async (event) => {
    event.preventDefault();

    if (!inputText.trim()) {
      setError("Input text cannot be empty!");
      setTimeout(() => {
        setError("");
      }, 5000);
      setLoading(false);
      return; // Exit early if input text is empty
    }

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:7000/predict", {
        text: inputText,
      });

      if (!response.data.error) {
        setPrediction(` the document is ${response.data.prediction}`);
        setError("");
        setInputText("")
      } else {
        setError("Error predicting text. Please try again.");
        setInputText("")
        setTimeout(() => {
          setError("");
        }, 5000);
      }
    } catch (error) {
      setError("Error predicting text. Please try again.");
      setInputText("")
      setTimeout(() => {
        setError("");
      }, 5000);
      console.error(error);
    } finally {
      setLoading(false); // Set loading to false after the prediction request completes
    }
  };

  return (
    <div className="centering body__wrapper">
      <h1 className="title mb-24">Classify</h1>

      <div className="centering mb-24 form__wrapper">
        <form id="summaryForm" className="centering" onSubmit={handlePredict}>
          <div className="article-block mb-24">
            <textarea
              id="articleText"
              rows="10"
              cols="50"
              value={inputText}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button
            id="summarizeButton"
            className="centering mb-24"
            type="submit"
          >
            {loading ? "Loading..." : "Classify"}
          </button>
          <p id="errorText">{error}</p>
        </form>
      </div>

      <div className="centering summary__wrapper">
        <h2 className="title mb-24">Prediction</h2>

        <div id="summaryBlock" className="centering">
          <p id="summaryText">{prediction}</p>
        </div>
      </div>
    </div>
  );
};

export default Classify;
