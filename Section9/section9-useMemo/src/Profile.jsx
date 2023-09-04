import React from 'react';

const Profile = ({count, profile}) => {
    console.log("je suis dans Profile")

    return (
        <div>
            <ul>
                <li className = "userList"><strong>User ID: {count}</strong></li>
                <li className = "userList">Nom: {profile.name}</li>
                <li className = "userList">Pseudo: {profile.username}</li>
                <li className = "userList">Email: {profile.email}</li>
            </ul>
        </div>
    );
};

export default React.memo(Profile)