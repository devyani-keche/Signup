import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useUser();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLogin = () => {
    if (formData.email && formData.password) {
      setIsLoggedIn(true);
      navigate('/account-settings');
    }
  };
 const isFormValid = formData.email && formData.password;
  return (
    <div
      style={{
        backgroundColor: '#F7F8F9',
        borderRadius: '0.5rem',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        padding: '1.75rem',
        maxWidth: '275px',
        width: '90vw', 
        height: '90vh', 
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Rubik, sans-serif',
      }}
    >
      <div
        style={{
          marginBottom: '1rem',
        }}
      >
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#1D2226',
            marginBottom: '0.5rem',
          }}
        >
          Signin to your <br/>PopX account
        </h2>
        <p
          style={{
            color: '#6C757D',
            fontSize: '0.875rem',
          }}
        >
          Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,
        </p>
      </div>

      <div>
        {[{ label: 'Email Address', field: 'email', type: 'email', placeholder: 'Enter email address' },
          { label: 'Password', field: 'password', type: 'password', placeholder: 'Enter password' }]
          .map(({ label, field, type, placeholder }) => (
            <div
            key={field}
            style={{
              position: 'relative',
              marginBottom: '1.2rem',
              
            }}
          >
               <label
              style={{
                position: 'absolute',
                top: '-0.4rem',
                left: '0.5rem',
                backgroundColor: '#F7F8F9',
                color: '#6C25FF',
                fontSize: '0.65rem',
                padding: '0 0.2rem',
                fontWeight: '500',
              }}
            >
                {label}
              </label>
               <input
              type={type}
              value={formData[field as keyof typeof formData] as string}
              onChange={(e) => handleInputChange(field, e.target.value)}
              style={{
                fontFamily: 'Rubik, sans-serif',
                width: '90%',
                padding: '0.7rem',
                 border: '2px solid rgb(211, 214, 218)',
                borderRadius: '0.375rem',
                fontSize: '0.7rem',
                outline:'none',
                backgroundColor: '#F7F8F9',
                color: '#1D2226',
              }}
              placeholder={placeholder}
            />
            </div>
          ))}
      </div>

      <div
      style={{
        flex: 1,
        justifyContent: 'start',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <button
        onClick={handleLogin}
        disabled={!isFormValid}
        style={{
          width: '100%',
          backgroundColor: isFormValid ? '#6C25FF4B' : '#CBCBCB',
          color: isFormValid ? '#1D2226' : '#FFF',
          padding: '0.6rem',
          borderRadius: '0.3rem',
          fontSize: '1rem',
          fontWeight: '500',
          cursor: isFormValid ? 'pointer' : 'not-allowed',
          border: 'none',
          transition: 'background-color 0.3s, color 0.3s',
        }}
        onMouseOver={(e) => {
          if (isFormValid) {
            e.currentTarget.style.backgroundColor = '#9978E6';
            e.currentTarget.style.color = '#ffffff';
          }
        }}
        onMouseOut={(e) => {
          if (isFormValid) {
            e.currentTarget.style.backgroundColor = '#6C25FF4B';
            e.currentTarget.style.color = '#1D2226';
          }
        }}
      >
        Login
      </button>
    </div>
    </div>
  );
};

export default SignIn;
