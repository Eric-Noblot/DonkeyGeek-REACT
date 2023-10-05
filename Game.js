import { useState } from "react"
import { Link } from "react-router-dom"

const Game = () => {

    const [title, setTitle] = useState("Vous arrivez dans un désert...")
    const [text, setText] = useState("L'Homme en noir d'abord, mystérieux, qui laisse dans son sillage une légende de faiseur de miracles. Et puis le Pistolero, économe, laconique, dont lui-même ne sait plus s'il est encore humain. Le premier fuit, le second poursuit.")
    const [question, setQuestion] = useState([
        "1 - Vous attaquez le Pistoléro !",
        "2 - Vous attaquez l'homme en noir !",
        "3 - Vous fuyez à travers le désert",
        "4 - Vous les suivez discrètement"
    ])

    const handleClick = (event) => {
        setTitle(event)

        if (event == "Vous attaquez le Pistoléro !") {
            setText("Alors que vous prenez votre arme, le Pistoléro dégaine avant vous et vous vise...")
            setQuestion([
                "1 - Vous tirez en premier",
                "2 - Vous baissez votre arme",
                "3 - Vous décidez de vous mettre à genou",
                "4 - Vous restez de marbre"
            ])
        } else if (event == "Vous attaquez l'homme en noir !") {
            setText("L'homme en noir se retourne et vous fixe dans les yeux...")
            setQuestion([
                "1 - Vous tirez en premier",
                "2 - Vous baissez votre arme",
                "3 - Vous décidez de vous mettre à genou",
                "4 - Vous restez de marbre"
            ])
        } else if (event == "Vous fuyez à travers le désert") {
            setText("Vous tentez de faire demi-tour mais votre cheval trébuche...")
            setQuestion([
                "1 - Vous carressez votre compagnon",
                "2 - Vous rassurez le canasson",
                "3 - Vous descendez du cheval et continuez à pied",
                "4 - Vous restez de marbre"
            ])
        } else if (event == "Vous les suivez discrètement") {
            setText("Vous reprenez votre chemin et laissez une distance raisonnable entre vous et les deux protagonistes...")
            setQuestion([
                "1 - Vous admirez le coucher de soleil tandis que vous avancez",
                "2 - Vous décidez de vous arrêter pour fabriquer un camp",
                "3 - Vous regardez au loin avec vos jumelles",
                "4 - Vous cherchez aux alentours pour tendre un piège"
            ])
        }
    }

    return (
        <div className="appD">
            <h1 className="title">{title}</h1>
            <div className = "questionBox">
                <div className="question">
                     {text}
                </div>
                <ul className = "reponse">
                    <li onClick={() => handleClick("Vous attaquez le Pistoléro !")}>{question[0]}</li>
                    <li onClick={() => handleClick("Vous attaquez l'homme en noir !")}>{question[1]}</li>
                    <li onClick={() => handleClick("Vous fuyez à travers le désert")}>{question[2]}</li>
                    <li onClick={() => handleClick("Vous les suivez discrètement")}>{question[3]}</li>
                </ul>
            </div>
            <Link to= "/"><button></button></Link>
        </div>
    );
};

export default Game;