// App.tsx
import React, { useState } from 'react';
import LoanApplicationStep1 from './LoanApplicationStep1';
import BusinessInfoForm from './BusinessInfoForm';
import PersonalInfoForm from './PersonalInfoForm';
import SignatureForm from './SignatureForm';
import '../styles/App.scss';

enum FormStep {
  Step1,
  BusinessInfo,
  PersonalInfo,
  Signature,
}

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<FormStep>(FormStep.Step1);
  const [businessName, setBusinessName] = useState<string>('');
  const [businessAddress, setBusinessAddress] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [signature, setSignature] = useState<string>('');

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const submitForm = () => {
    // Implement your form submission logic here
    // You can send the form data to a server or perform other actions
    console.log('Form submitted');
  };

  return (
    <div className="App">
      {currentStep === FormStep.Step1 && (
        <LoanApplicationStep1 onNextStep={nextStep} />
      )}
      {currentStep === FormStep.BusinessInfo && (
        <BusinessInfoForm
          businessName={businessName}
          setBusinessName={setBusinessName}
          businessAddress={businessAddress}
          setBusinessAddress={setBusinessAddress}
          nextStep={nextStep}
          previousStep={previousStep}
        />
      )}
      {currentStep === FormStep.PersonalInfo && (
        <PersonalInfoForm
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          email={email}
          setEmail={setEmail}
          nextStep={nextStep}
          previousStep={previousStep}
        />
      )}
      {currentStep === FormStep.Signature && (
        <SignatureForm
          signature={signature}
          setSignature={setSignature}
          handleSubmit={submitForm} // Use the submitForm function here
        />
      )}
    </div>
  );
};

export default App;
