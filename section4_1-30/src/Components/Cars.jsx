import Wrapper from "./Wrapper"

const Cars = ({children, color}) => {
 
    return  (children ?

            <Wrapper>
            <p>Marque: {children}</p>
            <p>Couleur: {color ? color: "Néant (la couleur n'est pas précisée en props)"}</p>
            </Wrapper>

        : 
        <Wrapper>
        <p>Pas de data ! (Il n'y a pas de children dans ce composant) </p>
        </Wrapper>

    )
}

export default Cars