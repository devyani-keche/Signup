import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: '#F7F8F9',
        borderRadius: '0.5rem',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        padding: '1.75rem',
        maxWidth: '275px',
        width: '90vw', // Responsive width
        height: '90vh', // Scales height to viewport
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'end'
      }}
    >
      <div style={{ textAlign: 'left' }}>
        <h1
          style={{
            fontSize: '1.5rem', // Scaled font size
            fontWeight: '700',
            color: '#1D2226', // Gray-800
            marginBottom: '1rem',
            fontFamily: 'Rubik, sans-serif',
            alignItems:'end',
          }}
        >
          Welcome to PopX
        </h1>
        <p
          style={{
            color: '#A0AEC0', // Gray-500
            fontSize: '1rem',
            fontFamily: 'Rubik, sans-serif',
            lineHeight: '1.5',
          }}
        >
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <button
          onClick={() => navigate('/create-account')}
          style={{
            width: '100%',
            backgroundColor: '#6C25FF',
            color: 'white',
            padding: '0.8rem',
            borderRadius: '0.3rem',
            border: 'none',
            fontWeight: '600',
            fontSize: '0.9rem',
            transition: 'all 0.2s ease',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer',
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = '#381384')
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = '#6C25FF')
          }
        >
          Create Account
        </button>

        <button
          onClick={() => navigate('/signin')}
          style={{
            width: '100%',
            backgroundColor: '#6C25FF4B',
            color: '#1D2226',
           
            padding: '0.8rem',
            borderRadius: '0.3rem',
            border: 'none',
            fontWeight: '600',
            fontSize: '0.9rem',
            transition: 'all 0.2s ease',
            cursor: 'pointer',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#9978E6';
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#6C25FF4B';
            e.currentTarget.style.color = '#1D2226';
          }}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Welcome;
