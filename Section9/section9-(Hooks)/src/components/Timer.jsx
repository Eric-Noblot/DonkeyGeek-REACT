//exercice chaine youtube 

import React, {useState, useEffect, useRef} from 'react';

const Timer = () => {

    const [ count, setCount ] = useState(0)
    const [ showBtn, setShowBtn ] = useState(false)
    const [ showTimer, setShowTimer ] = useState(0)


    useEffect(() => {   

        return () => {
            clearInterval(id.current)
        }
        },[])

        let id = useRef()
        console.log(id)
        
        const handleClick = () => {
        id.current = setInterval(() => {
            // setCount( count + 1)
            // si on fait directement count +1 ca ne marche pas, car setInterval narrete pas de s'exécuter et donc ne prend pas en compte le nouveau state count qui se met à jour
                setCount((prevCount) => {
                    console.log(prevCount)
                    return prevCount +1
                })
            }, 2000)

        }

        //////////////////////////////////////////////////////

        useEffect(() => {

        if (showBtn) {
            const intervalId = setInterval(() => {
                setShowTimer((prevShowTimer) => {
                    console.log("interval")
                    return prevShowTimer + 1
                })
            }, 1000)

            return () => {
                console.log(intervalId)
                clearInterval(intervalId)
            }
        }

    },[showBtn])


    const showText = showBtn ? <p style={{color: "darkblue"}}>Ce texte est caché sauf si vous appuyez sur le bouton</p> : null

    return (
        <div  style={{border: "1px solid black", padding:"5px"}}>
            <h2>setInterval qui ajoute 1</h2>
            <div style={{margin: "20px",fontSize: "1.5em"}}>{count}</div>
            <button onClick={() => handleClick()} style={{padding: "10px", margin:"10px", backgroundColor:"red"}}>Lancer compteur</button>
            <button onClick={() => clearInterval(id.current)} style={{padding: "10px", margin:"10px", backgroundColor: "pink"}}>Pause</button>
            <button onClick={() => {
                clearInterval(id.current)
                setCount(0)}
             } style={{padding: "10px", margin:"10px", backgroundColor: "gold"}}>Réinitialiser</button>
            <hr />

            <button onClick={() => {
                showBtn ? setShowBtn(false)
                : setShowBtn(true)
            }} style={{padding: "10px", margin:"10px"}}>{showBtn? "Cacher" : "Afficher" }</button>
            <p>Durée de la lecture: {showTimer}</p>
            {showText}
        </div>
    );
};

export default Timer; 