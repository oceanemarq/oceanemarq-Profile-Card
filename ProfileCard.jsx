import React from 'react';

const ProfileCard = ({ image, name, jobTitle, bio }) => {
    return (
        <div className="profile-card">
            <h1> {name} </h1>
        </div>
    );

};

export default ProfileCard;