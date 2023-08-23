const customBtn = ({styledBtn, children, onClick}) => {

    const customBtn  = {
        backgroundColor: "grey",
        border: "none",
        color: "#fff",
        fontSize: "19px",
        padding: "15px 30px",
        textAlign: "center",
        textDecoration: "none",
        borderRadius: "7px",
        display: "block",
        margin: "5px auto"
    }



    return(
        <button onClick={onClick} style={{...customBtn, ...styledBtn} } >{children}</button>
    )
}

export default customBtn