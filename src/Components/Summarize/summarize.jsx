import React, { useState } from 'react';
import './Summarize.css';
import axios from 'axios';

const SummarizerComponent = () => {
  const [sentences, setSentences] = useState('');
  const [summary, setSummary] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setSentences(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
  
    if (!sentences.trim()) {
      setError('Input cannot be empty.');
      setSummary('');
      setLoading(false)
      return;
    }
  
    if (sentences.length <= 40) {
      setError('Input text must be more than 40 characters.');
      setSummary('');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:7000/v1/summarize', { sentences });
  
      const data = response.data;
      setSummary(data.summary_text);
      setError('');
    } catch (error) {
      setError(error.response?.data?.error || 'An error occurred.');
      setSummary('');
    }finally{
      setLoading(false)
    }
  };
  
  return (
    <div className="centering body__wrapper">
      <h1 className="title mb-24">Text Summarization</h1>

      <div className="centering mb-24 form__wrapper">
        <form id="summaryForm" className="centering" onSubmit={handleSubmit}>
          <div className="article-block mb-24">
            <textarea
              id="articleText"
              rows="10"
              cols="50"
              value={sentences}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button
            id="summarizeButton"
            className="centering mb-24"
            type="submit"
          >
            {loading ? 'Loading...' : 'Summarize'}
          </button>
          <p id="errorText">{error}</p>
        </form>
      </div>

      <div className="centering summary__wrapper">
        <h2 className="title mb-24">Summary</h2>

        <div id="summaryBlock" className="centering">
          <p id="summaryText">{summary}</p>
        </div>
      </div>
    </div>
  );
};

export default SummarizerComponent;
