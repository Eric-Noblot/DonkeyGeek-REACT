import React from 'react';

const User = ({user, pictures}) => {

    console.log(pictures)
    const {id, name, username, email} = user

    const stylePicture = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        backgroundImage: `url("${pictures.url}.jpg")`,
        position: "absolute"
    }

    return (
        <div className="userCont">
            <h1>ID : {id}</h1>
            <div className="imgCont">
                <div className="boxPicture">
                    <div style={stylePicture}></div>
                    <div className="filterPicture"></div>
                    <p className="textPicture">{pictures.title}</p>
                </div>
                <ul>
                    <li className="userList"><strong>Name :</strong> {name} </li>
                    <li className="userList"><strong>UserName :</strong> {username} </li>
                    <li className="userList"><strong>Email :</strong> {email}</li>
                </ul>
            </div>
            
        </div>
    );
};

export default User;