import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react"

const Profile = () => {

    const id = useParams()
    const [userData, setUserData] = useState({})

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/users/${id.profileId}`)
        .then( res => res.json())
        .then(data => setUserData(data))
    },[])
     console.log(userData)

    return (
        <ul className="list-group list-group-flush">
            <li className="list-group-item">ID DANS L'URL : {id.profileId}</li>
            <li className="list-group-item">NOM : {userData.name}</li>
            <li className="list-group-item">EMAIL : {userData.email}</li>
            <li className="list-group-item">TEL : {userData.phone}</li>
        </ul>
    );
};

export default Profile;