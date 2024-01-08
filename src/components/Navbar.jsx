import React, { useContext, useState } from 'react'
import NewsContext from '../context/News/NewsContext'
import { fetchNews } from '../context/News/NewsAction';

function Navbar() {

    const { dispatch } = useContext(NewsContext);
    const [text, setText] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await fetchNews(text);
        dispatch({
            type: "GET_NEWS",
            payload: { news: data, topic: text },
        })
        setText("")
    }
    const handleCategory = async (category) => {
        const data = await fetchNews(category);
        dispatch({
            type: "GET_NEWS",
            payload: { news: data, topic: category },
        })
    }
    return (

        <>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand text-warning fw-bold fs-4" href="#" >News-ApTak</a>
                    <button className="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-light  border-warning mx-2 " aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-light  border-warning mx-2" aria-current="page" href="#">Politics</a>
                            </li>  <li className="nav-item">
                                <a className="nav-link active text-light  border-warning mx-2" aria-current="page" href="#">Business</a>
                            </li>  <li className="nav-item ">
                                <a className="nav-link active text-light  border-warning mx-2 " aria-current="page" href="#">Sports</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={handleSubmit}>
                            <input className="form-control me-2 rounded-5 border-4 border-warning" type="search" placeholder="Search the News" aria-label="Search" value={text} onChange={(e) => setText(e.target.value)} />
                            <button className="btn btn-outline-warning rounded-5" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar