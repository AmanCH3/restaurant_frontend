import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const baseURL = "http://127.0.0.1:8000/api"; 

const Profile = () => {
  const authTokens = useContext(AuthContext); 
  const [profile, setProfile] = useState({
    fullname: '',
    email: '',
    address: '',
    phone: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  // Fetch user profile on component mount
  useEffect(() => {
    const fetchProfile = async () => {
      if (!authTokens?.access) {
        setLoading(false);
        setError('You need to log in first');
        return;
      }

      try {
        const response = await axios.get(`${baseURL}/profile/`, {
          headers: {
            Authorization: `Bearer ${authTokens.access}`,
          },
        });
        setProfile(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load profile');
        setLoading(false);
      }
    };

    fetchProfile();
  }, [authTokens]);

  // Handle input field changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [id]: value,
    }));
  };

  // Handle profile update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    try {
      const response = await axios.put(`${baseURL}/profile/`, profile, {
        headers: {
          Authorization: `Bearer ${authTokens.access}`,
        },
      });

      if (response.status === 200) {
        setProfile(response.data);
        setIsUpdating(false);
        alert('Profile updated successfully');
      } else {
        throw new Error('Failed to update profile');
      }
    } catch (error) {
      setError(error , 'Failed to update profile');
      setIsUpdating(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="profile-container">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullname" className="block text-sm">Full Name</label>
          <input
            type="text"
            id="fullname"
            value={profile.fullname}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="block text-sm">Email</label>
          <input
            type="email"
            id="email"
            value={profile.email}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address" className="block text-sm">Address</label>
          <input
            type="text"
            id="address"
            value={profile.address}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="block text-sm">Phone</label>
          <input
            type="text"
            id="phone"
            value={profile.phone}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        <button
          type="submit"
          className={`submit-button ${isUpdating ? 'loading' : ''}`}
          disabled={isUpdating}
        >
          {isUpdating ? 'Updating...' : 'Update Profile'}
        </button>
      </form>
    </div>
  );
};

export default Profile;


