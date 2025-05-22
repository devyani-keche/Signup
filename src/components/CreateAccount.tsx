import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const CreateAccount: React.FC = () => {
  const navigate = useNavigate();
  const { updateUserData, setIsLoggedIn } = useUser();

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: true,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCreateAccount = () => {
    if (!formData.fullName || !formData.phoneNumber || !formData.email || !formData.password) {
      alert('Please fill in all required fields');
      return;
    }
    updateUserData(formData);
    setIsLoggedIn(true);
    navigate('/account-settings');
  };

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
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
       
        <h1
          style={{
            fontSize: '1.5rem',
            fontWeight:'600',
             fontFamily: 'Rubik, sans-serif',
            color: '#1D2226',
          }}
        >
          Create your<br/> PopX account
        </h1>
      </div>

      <div style={{ flex: 1,fontFamily: 'Rubik, sans-serif' }}>
        {[
          { label: 'Full Name*', field: 'fullName', type: 'text', placeholder: 'Full Name' },
          { label: 'Phone number*', field: 'phoneNumber', type: 'tel', placeholder: 'Phone Number' },
          { label: 'Email address*', field: 'email', type: 'email', placeholder: 'Email Address' },
          { label: 'Password*', field: 'password', type: 'password', placeholder: 'Password' },
          { label: 'Company name', field: 'companyName', type: 'text', placeholder: 'Company Name' },
        ].map(({ label, field, type, placeholder }) => (
          <div
            key={field}
            style={{
              position: 'relative',
              marginBottom: '1.2rem',
              
            }}
          >
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
               {label.split('*')[0]}
        {label.includes('*') && <span style={{ color: 'red' }}>*</span>}
            </label>
          </div>
        ))}

        <div style={{ marginBottom: '1.5rem' }}>
          <p
            style={{
              color: '#1D2226',
              fontSize: '0.85rem',
              marginBottom: '0.5rem',
            }}
          >
            Are you an Agency?<span style={{ color: 'red' }}>*</span>
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {[
              { label: 'Yes', value: true },
              { label: 'No', value: false },
            ].map(({ label, value }) => (
              <label
                key={label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
              >
                <input
                  type="radio"
                  name="agency"
                  checked={formData.isAgency === value}
                  onChange={() => handleInputChange('isAgency', value)}
                  style={{
                    marginRight: '0.5rem',
                  }}
                />
                <span
                  style={{
                    fontSize: '0.9rem',
                    color: '#4A5568',
                  }}
                >
                  {label}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: '1.5rem' }}>
        <button
          onClick={handleCreateAccount}
          style={{
            display: 'block',
            width: '100%',
            backgroundColor: '#6C25FF',
            color: '#FFF',
            padding: '0.7rem',
            borderRadius: '0.3rem',
            fontSize: '1rem',
            fontWeight: '500',
            cursor: 'pointer',
            border: 'none',
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
      </div>
    </div>
  );
};

export default CreateAccount;
