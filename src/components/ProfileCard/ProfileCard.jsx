// src/components/ProfileCard/ProfileCard.jsx
import React from 'react';
import './ProfileCard.scss';

const ProfileCard = ({ image, title, subtitle, description }) => {
  return (
    <div className="profile-card">
      <div className="profile-card__image">
        <img src={image} alt={title} />
      </div>
      <div className="profile-card__header">
        <h3 className="profile-card__title">{title}</h3>
        <h3 className="profile-card__subtitle">{subtitle}</h3>
      </div>
      <div className="profile-card__content">
        <p className="profile-card__description">{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;