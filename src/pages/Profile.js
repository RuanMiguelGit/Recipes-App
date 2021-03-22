import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Profile = () => (
  <div>
    <Header
      name="Perfil"
      foodClass="Profile"
      Show={ false }
    />
    <Footer
      foodClass="Profile-footer"
    />
  </div>
);

export default Profile;
