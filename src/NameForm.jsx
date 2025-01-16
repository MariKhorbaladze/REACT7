import { useState } from 'react';

const NameForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  const handleClear = () => {
    setFirstName('');
    setLastName('');
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Firstname"
        />

        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Lastname"
        />
      </div>

      {(firstName || lastName) && (
        <div>
          {firstName} {lastName}
        </div>
      )}

      <button
        onClick={handleClear}
      >
        Clear
      </button>
    </div>
  );
};

export default NameForm;