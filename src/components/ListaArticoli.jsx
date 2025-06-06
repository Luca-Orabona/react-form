import { useState } from "react";

const ListaArticoli = ({ Posts }) => {
    const [newPosts, setNewPost] = useState(Posts);
    const [articleName, setArticleName] = useState("");

    const newPost = {
        titolo: articleName
    }

    const gestioneSubmit = (event) => {
        event.preventDefault();
        if (articleName.trim().length > 0) {
            setNewPost([...newPosts, newPost]);
            setArticleName("");
        } else {
            alert("inserisci il titolo di un articolo")
        }
    }

    const deleteArticle = (index) => {
        const newArrayPost = newPosts.toSpliced(index, 1);
        setNewPost(newArrayPost); 
    }

    return (
        <>
            <div className="container">
                <h1 className="text-center">Lista articoli</h1>

                <form onSubmit={gestioneSubmit} className="d-flex justify-content-between align-items-center mb-3 gap-3">
                    <div className="flex-grow-1">
                        <label htmlFor="article" className="form-label">Crea nuovo articolo</label>
                        <input
                            id="articole"
                            type="text"
                            className="form-control"
                            value={articleName}
                            onChange={(event) => setArticleName(event.target.value)}
                        />
                    </div>

                    <button className="btn btn-primary align-self-end">Submit</button>

                </form>

                <ul className="list-group">
                    {newPosts.map((curPost, index) => (

                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            {curPost.titolo}
                            <button onClick={() =>{deleteArticle(index)}} className="border-0 bg-white"><i className="fa-solid fa-trash-can text-danger"></i></button>
                        </li>



                    ))}

                </ul>
            </div>
        </>
    )
}

export default ListaArticoli;