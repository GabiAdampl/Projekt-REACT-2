import React, { useState } from 'react';
import ConversionResult from './ConversionResult';

function ConverterForm() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');
  const [result, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');



  return (
    <main className="form-container d-flex justify-content-center gap-2">
      {/* Pozostała część formularza */}
      <ConversionResult result={result} errorMessage={errorMessage} />
    </main>
  );
}

export default ConverterForm;