import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { Camera } from 'lucide-react';
import photo from '../assets/photo/photo.png';
const AccountSettings: React.FC = () => {
  const navigate = useNavigate();
  const { userData, updateUserData, setIsLoggedIn } = useUser();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        updateUserData({ profileImage: result });
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    updateUserData({
      fullName: '',
      phoneNumber: '',
      email: '',
      password: '',
      companyName: '',
      isAgency: true,
      profileImage: undefined,
    });
    navigate('/');
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
        fontFamily: 'Rubik, sans-serif',
      }}
    >
       <div
    style={{
      backgroundColor: '#ffffff',
      padding: '5px',
      width: 'calc(100% + 2.8rem)', // Add padding from both sides (1.75rem * 2)
      marginLeft: '-1.75rem', // Negative margin to offset padding
      marginRight: '-1.75rem',
    }}
  >
    <h2 style={{
            fontSize: '1rem',
            fontWeight: '400',
            color: '#333',
            marginBottom: '1rem',
             paddingLeft: '1rem',
          }}
        >
         Account Settings
        </h2>
</div>
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
    marginTop: '0.5rem',
            gap: '1rem',
          }}
        >
          <div style={{ position: 'relative' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundColor: '#F0F0F0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {userData.profileImage ? (
                <img
                  src={userData.profileImage}
                  alt="Profile"
                  style={{ width: '90%', height: '90%', objectFit: 'cover' }}
                />
              ) : (
                <img
                  src={photo}
                  alt="Default"
                  style={{ width: '90%', height: '90%', objectFit: 'cover' ,marginTop: '0.5rem'}}   
                  />
              //   <User style={{ width: '32px', height: '32px', color: '#AAA' }} />
              )}
            </div>
            <button
              onClick={handleCameraClick}
              disabled={isUploading}
              style={{
                position: 'absolute',
                bottom: '-4px',
                right: '-4px',
                width: '24px',
                height: '24px',
                backgroundColor: '#6B46C1',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: 'none',
                cursor: 'pointer',
                opacity: isUploading ? 0.5 : 1,
              }}
            >
              <Camera style={{ width: '16px', height: '16px', color: '#FFF' }} />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <h3
              style={{
                fontWeight: '500',
                fontSize: '.9rem',
                color: '#333',
                marginBottom: '0.25rem',
              }}
            >
              {userData.fullName || 'User Name'}
            </h3>
            <p
              style={{
                marginTop: '0.25rem',
                fontSize: '0.75rem',
                color: '#575B5E',
              }}
            >
              {userData.email || 'user@email.com'}
            </p>
          </div>
        </div>

        {isUploading && (
          <div style={{ textAlign: 'center', color: '#6B46C1', fontSize: '0.875rem', marginBottom: '1rem' }}>
            Uploading image...
          </div>
        )}
   <p
          style={{
            fontSize: '0.68rem',
            color: '#666',
            lineHeight: '1.5',
            marginTop: '1.5rem',
            marginBottom: '-0.5rem',
          }}
        >
          Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elit, Sed Diam Nonummy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
        <div
    style={{
      padding: '5px',
      width: 'calc(100% + 2.8rem)', // Add padding from both sides (1.75rem * 2)
      marginLeft: '-1.75rem', // Negative margin to offset padding
      marginRight: '-1.75rem',
      marginTop: '1rem',
      fontSize: '0.8rem',
      color: '#d4d4d4',
    }}
  >---------------------------------------------------</div>
        <div>
       
        
          <h4
            style={{
              fontWeight: '600',
              fontSize: '0.9rem',
              color: '#333',
              marginBottom: '0.75rem',
            }}
          >
            Profile Information
          </h4>
          <div style={{ fontSize: '0.8rem', color: '#666', lineHeight: '1', marginBottom:'3rem' }}>
            <p><strong>Full Name:</strong> {userData.fullName || 'Not provided'}</p>
            <p><strong>Phone:</strong> {userData.phoneNumber || 'Not provided'}</p>
            <p><strong>Email:</strong> {userData.email || 'Not provided'}</p>
            <p><strong>Company:</strong> {userData.companyName || 'Not provided'}</p>
            <p><strong>Agency:</strong> {userData.isAgency ? 'Yes' : 'No'}</p>
          </div>
        </div>

     
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' ,gap: '0.7rem' }}>
        <button
        onClick={() => navigate('/create-account')}
    onMouseEnter={(e) =>
      (e.currentTarget.style.backgroundColor = '#D9C7FF')
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.backgroundColor = '#EEE6FF')
    }
         
          style={{
            width: '100%',
            backgroundColor: '#EEE6FF',
            color: '#6B46C1',
            padding: '0.6rem',
            borderRadius: '0.3rem',
            fontSize: '1rem',
            fontWeight: '500',
            border: 'none',
            cursor: 'pointer',
             transition: 'background-color 0.3s ease',
          }}
        >
          Edit Profile
        </button>
        <button
          onClick={handleLogout}
          onMouseEnter={(e) =>
      (e.currentTarget.style.backgroundColor = '#41237F')
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.backgroundColor = '#6B46C1')
    }
          style={{
            width: '100%',
            backgroundColor: '#6B46C1',
            color: '#FFF',
            padding: '0.6rem',
            borderRadius: '0.3rem',
            fontSize: '1rem',
            fontWeight: '500',
            border: 'none',
            cursor: 'pointer',
             transition: 'background-color 0.3s ease',
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AccountSettings;
