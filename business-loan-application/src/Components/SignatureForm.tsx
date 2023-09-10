import React from 'react';
import '../styles/commonStyles.scss'; // Import shared styles

interface SignatureFormProps {
  signature: string;
  setSignature: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
}

const SignatureForm: React.FC<SignatureFormProps> = ({
  signature,
  setSignature,
  handleSubmit,
}) => {
  const handleSignatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignature(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <div>
      <h2>Signature</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="signature">Your Signature:</label>
          <input
            type="text"
            id="signature"
            value={signature}
            onChange={handleSignatureChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignatureForm;
