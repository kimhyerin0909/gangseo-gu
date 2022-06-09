import React, { useEffect, useRef, useState } from 'react'
import ScrollHorizontal from 'react-scroll-horizontal';
import axios from 'axios';

export default function Cards() {
    const [card, setCard] = useState([]);
    const fullStarImg = useRef();
    const getCardData = async () => {
        const response = await axios.get("/api/places")
        .then(res => res.data);
        setCard(response)
    }

    const showStarPoint = () => {
        let point = card["score"];
        point = point * 20;
        // console.log(fullStarImg.current.style)
        // fullStarImg.current.style = `width : ${point}px`
    }

    useEffect(() => {
        getCardData();
        showStarPoint();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div id='scroll-horizontal' className='card-box' >
            <ScrollHorizontal >
                {card.map(data => {
                    const a = <div className={`card card${data["place_id"]}`} key={data["place_id"]} >
                        <img className='place_img' alt='images' src={data["img_url"]} />
                        <span className='place_name'>{data["place_name"]}</span>
                        <span className='place_desc'>{data["description"]}</span>
                        <section>
                            <img ref={fullStarImg} className='star full-star' alt='star' src='../full_star.png'/>
                            <img className='star' alt='star' src='../empty_star.png'/>
                            <span className='star-point'>{data["score"]}</span>
                        </section>
                    </div>
                    return a;
                })
                }
            </ScrollHorizontal>
        </div>
    )
}
