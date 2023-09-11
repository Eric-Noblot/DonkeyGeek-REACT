//ici le hook useSearchParams nous permet de tester la recherche d'info dans l'URL. On crée un tableau en dur avec des users,
//et on va faire en sorte d'afficher les users qui ont les memes lettres dans leur name que ce qu'on tape dans l'input
//il se paramettre comme useState --> const [searchParams, setSearchParams] = useSearchParams(). avec la methode get on peut recupere tout ce qui se trouve apres  "name" (que jai defini en dur dans le parametre)
//a chaque lettre tapée dans le INPUT, on peut voir qu'elle s'affiche dans l'url et un signe = a été crée en relation apres notre string "name"


import React from 'react';
import { Outlet, useSearchParams } from "react-router-dom"
const Users = () => {

    const arrayUsers = ["Pierre", "John", "Victoria", "Patrice", "Michelle", "Victor"]

    const [searchParams, setSearchParams] = useSearchParams()
    const searchName = searchParams.get("name") || ""   //http://localhost:3000/users/4?name=eric
    console.log(searchName)

    const handleChange = (e) => {
        const name = e.target.value
        if (name) {
            setSearchParams({name}) //on renvoie un objet dans le setSearchParams
        } else {
            setSearchParams({})
        }
    }

    const filtredUsers = arrayUsers.filter((user) => user.toLowerCase().includes(searchName.toLowerCase()))

    return (
        <>
            <h1>Users</h1>
            <p className="list-group-item" style={{color: "green", marginLeft:"5px"}}> -- On peut choisir un nombre entre 1 et 10 dans l'URL pour afficher les données d'un utilisateur --</p>

            <Outlet />

            <hr/>
            <input type="text" value = {searchName} onChange = {handleChange} placeholder="Chercher un nom..." style={{ padding: "10px", marginLeft:"10px"}}/>
            <ul>
                {
                    filtredUsers.map((user, index) => <li key={index}>{user}</li>)
                }
            </ul>

        </>
    );
};

export default Users;