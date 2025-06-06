const ListaArticoli = ({ Posts }) => {
    return (
        <>
            <div className="container">
                <h1 className="text-center">Lista articoli</h1>
                <ul className="list-group">
                    {Posts.map((curPost) => (
                        <li className="list-group-item">{curPost.titolo}</li>

                    ))}

                </ul>
            </div>
        </>
    )
}

export default ListaArticoli;