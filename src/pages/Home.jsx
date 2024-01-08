import React, { useContext, useEffect } from 'react'
import WeatherCard from '../components/WeatherCard'
import NewsCard from '../components/NewsCard'
import NewsContext from '../context/News/NewsContext'
import { fetchNews } from '../context/News/NewsAction';

function Home() {

    const { allnews, dispatch, topic } = useContext(NewsContext);
    const getNews = async (topic) => {
        const data = await fetchNews(topic);
        dispatch({
            type: "GET_NEWS",
            payload: { news: data, topic: topic },
        })
    }

    useEffect(() => {
        getNews("ujjain");
    }, []);

    if (allnews.length === 0) {
        return <h1 className="my-3 text-center display-1">Loading...</h1>;
    }

    return (
        <>
            <div className="container p-5">
                <h1 className='display-3 text-center '>Top News For {topic}</h1>
                <div className="row">
                    <WeatherCard />
                    <div className="col-md-8 col-sm-12">
                        {allnews.map((news, index) => (
                            <NewsCard key={index} news={news} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home