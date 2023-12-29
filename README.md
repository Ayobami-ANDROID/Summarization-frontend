# Document Summarization and Classification UI

This repository contains the front-end interface for interacting with the Document Summarization and Classification API.

## Key Functionalities of the UI

### Summarization

The UI provides an interface to input a set of sentences or text and receive a summarized version of the input using the `/v1/summarize` endpoint from the API.

### Document Classification

It allows users to input a document and receive the predicted class label using the `/predict` endpoint from the API.

## API Endpoints Used by the UI

The UI interacts with the following API endpoints:

- `/v1/summarize` - Used for generating text summaries based on a set of sentences or text.
- `/predict` - Used for document classification to predict the document's class label.

## Challenges Faced in Building the Front-End

- **Asynchronous Data Handling**: Implementing asynchronous fetching and displaying of data from the API endpoints while maintaining smooth user experience.
- **Error Handling**: Properly managing and displaying errors received from API responses to users.

## Improvements for the Front-End

Given more time, the front-end could be improved in several ways:

- **Enhanced User Experience**: Implement better loading indicators or animations to provide visual feedback during API requests.
- **Error Handling and Validation**: Enhance error handling by providing clearer error messages and implementing better data validation on user inputs.
- **UI/UX Enhancements**: Improve the overall design and user experience by refining the layout, styling, and responsiveness.

### How to Use

To run the front-end UI:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.

