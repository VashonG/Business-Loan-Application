import React from 'react';
import '../styles/commonStyles.scss'; // Import shared styles

interface PersonalInfoFormProps {
  firstName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  lastName: string;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  nextStep: () => void;
  previousStep: () => void;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  nextStep,
  previousStep,
}) => {
  return (
    <div>
      <h2>Personal Information</h2>
      <form>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

export default PersonalInfoForm;
