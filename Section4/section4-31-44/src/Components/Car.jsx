import carPicture from "../car.svg"

function Car ({color}) {

    const style = {
        height: "300px",
        width: "300px",
        padding: "20px",
        margin: "20px",
        background: `linear-gradient(130deg, ${color}, white)`
    }
    
    return (
        <img src={carPicture} alt="" className ="carPiture" style={style}></img>
    )
}

export default Car