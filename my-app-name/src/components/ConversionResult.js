import React from 'react';

function ConversionResult({ result, errorMessage }) {
  return (
    <>
      <button id="convertButton">Przelicz</button>
      <p className="d-flex justify-content-center align-items-center">TO</p>
      <p id="resultOutput">{result}</p>
      <p id="error-message" className="error-message">{errorMessage}</p>
    </>
  );
}

export default ConversionResult;