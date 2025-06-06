import { useState } from "react";

const ListaArticoli = ({ Posts }) => {
    const [newPosts, setNewPost] = useState(Posts);
    const [articleName, setArticleName] = useState("");

    const newPost = {
        titolo: articleName
    }

    const gestioneSubmit = (event) => {
        event.preventDefault();
        setNewPost([...newPosts, newPost]);
        setArticleName("");

    }
   
    return (
        <>
            <div className="container">
                <h1 className="text-center">Lista articoli</h1>

                <form onSubmit={gestioneSubmit} className="d-flex justify-content-between mb-3">

                    <input
                        type="text"
                        className="form-control"
                        value={articleName}
                        onChange={(event) => setArticleName(event.target.value)}
                    />

                    <button className="btn btn-primary">Submit</button>

                </form>

                <ul className="list-group">
                    {newPosts.map((curPost, index) => (
                        <li key={index} className="list-group-item">{curPost.titolo}</li>

                    ))}

                </ul>
            </div>
        </>
    )
}

export default ListaArticoli;