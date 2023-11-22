import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const DetailsPage = () => {
    
    const { id } = useParams();
    const {details} = useLoaderData();
    console.log(details);
    console.log(id);
    const [detailsNews, setDetailsNews] = useState([]);
    console.log(detailsNews.length);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/blog.json/${id}`);
                const data = await response.json();
                console.log('Data:', data); 
                setDetailsNews(data);
            } catch (error) {
                console.log(error.message)
                
            }
        };
    
        fetchData();
    }, [id]);
   
    

    return (
        <div>
        <h2>Details:{detailsNews.length}</h2>
        <div>
            {detailsNews.length > 0 ? (
            
                detailsNews.map(newsItem => (
                    <div key={newsItem.id}>
                        <h2>{newsItem.title}</h2>
                        <p>ID: {newsItem.id}</p>
                        <p>Content: {newsItem.content}</p>
                    </div>
                ))
            ) : (
                <p>najmul</p>
            )}
        </div>
    </div>
    );
};

export default DetailsPage;
