import React from 'react';
import '../styles/commonStyles.scss'; // Import shared styles

interface BusinessInfoFormProps {
  businessName: string;
  setBusinessName: React.Dispatch<React.SetStateAction<string>>;
  businessAddress: string;
  setBusinessAddress: React.Dispatch<React.SetStateAction<string>>;
  nextStep: () => void;
  previousStep: () => void;
}

const BusinessInfoForm: React.FC<BusinessInfoFormProps> = ({
  businessName,
  setBusinessName,
  businessAddress,
  setBusinessAddress,
  nextStep,
  previousStep,
}) => {
  return (
    <div>
      <h2>Business Information</h2>
      <form>
        <div>
          <label htmlFor="businessName">Business Name:</label>
          <input
            type="text"
            id="businessName"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="businessAddress">Business Address:</label>
          <input
            type="text"
            id="businessAddress"
            value={businessAddress}
            onChange={(e) => setBusinessAddress(e.target.value)}
          />
        </div>
        <button type="button" onClick={previousStep}>
          Previous
        </button>
        <button type="button" onClick={nextStep}>
          Next
        </button>
      </form>
    </div>
  );
};

export default BusinessInfoForm;
