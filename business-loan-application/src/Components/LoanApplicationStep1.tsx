import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import './LoanApplicationStep1.scss';
import '../styles/commonStyles.scss'; // Import shared styles

interface LoanApplicationStep1Props {
  onNextStep: () => void;
}

const LoanApplicationStep1: React.FC<LoanApplicationStep1Props> = ({ onNextStep }) => {
  const [loanAmount, setLoanAmount] = useState<number>(50000);
  const [businessDuration, setBusinessDuration] = useState<string | null>(null);
  const [creditScore, setCreditScore] = useState<number | null>(null);

  const handleNextStep = () => {
    onNextStep();
  };

  return (
    <div className="loan-application-step1">
      <h2>Loan Application - Step 1</h2>
      <div className="loan-amount">
        <h3>Loan Amount</h3>
        <div>
          <p>${loanAmount}</p>
        </div>
        <Slider
          value={loanAmount}
          min={1000}
          max={100000}
          step={1000}
          onChange={(event, newValue) => setLoanAmount(newValue as number)}
        />
      </div>
      <div className="business-duration">
        <h3>Business Duration</h3>
        {/* Add your business duration UI elements here */}
      </div>
      <div className="credit-score">
        <h3>Credit Score</h3>
        {/* Add your credit score UI elements here */}
      </div>
      <Button variant="contained" color="primary" onClick={handleNextStep}>
        Next
      </Button>
    </div>
  );
};

export default LoanApplicationStep1;
