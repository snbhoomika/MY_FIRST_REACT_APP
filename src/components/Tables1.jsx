import React, { useEffect, useState } from 'react';
import './Tables.css';
import { Card } from 'antd';


const { Meta } = Card;

const Tables1 = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/breeds")
            .then(res => res.json())
            .then(data => setCats(data));
    }, []);

    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            padding: "20px"
        }}>
            {cats.map((cat) => (
                <Card
                    key={cat.id}
                    style={{ width: 300 }}
                    cover={
                        <img
                            draggable={false}
                            alt={cat.name}
                            src={
                                cat.reference_image_id
                                    ? `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`
                                    : "https://via.placeholder.com/300?text=No+Image"
                            }
                        />
                    }

                >
                    <Meta

                        title={cat.name}
                        description={cat.temperament}
                        wikipedia_url={cat.wikipedia_url}
                    />
                </Card>
            ))}
        </div>
    );
};

export default Tables1;
