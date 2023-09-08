const TableData = ({data}) => {

    //  console.log(data)

    return( 
        <>
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Pseudo</th>
                        <th>Email</th>
                        <th>Adresse</th>
                    </tr>
                </thead>
                <tbody>
                        {
                data.slice(0,10).map(({id, name, username, email, address})=> {
                    return (
                            <tr key ={id}>
                                <td>{name}</td>
                                <td>{username}</td>
                                <td>{email}</td>
                                <td>{address.street} {address.suite} {address.city}</td>
                            </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </>
    )
}

export default TableData