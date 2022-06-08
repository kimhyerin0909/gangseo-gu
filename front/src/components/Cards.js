import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Cards() {
    const [card, setCard] = useState([]);
    const getCardData = async () => {
        const response = await axios.get("/api/places")
        .then(res => res.data);
        setCard(response)
    }
    useEffect(() => {
        getCardData();
    }, [])
    return (
        <div>
            {card.map(data => {
                const a = <div className={`card${data["place_id"]}`} key={data["place_id"]}>
                <img alt='images' src={data["img_url"]} />
                    <span>{data["place_name"]}</span>
                    <span>{data["description"]}</span>
                    <span>{data["score"]}</span>
                </div>
                return a;
            })
            }
        </div>
    )
}
