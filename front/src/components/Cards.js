import React, { useEffect, useState } from 'react'
import ScrollHorizontal from 'react-scroll-horizontal';
import axios from 'axios';
export default function Cards(props) {
    const [card, setCard] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line no-unused-vars
        const response = axios.get("/api/places")
        .then(res => {
            setCard(res.data);
            if(res.data.length === 0) setIsEmpty(true);
        });
    }, [isEmpty])

    return (
        <div id='scroll-horizontal' className='card-box' >
            <p className='subtitle'>이곳에 가보시는 건 어떠신가요?</p>
            <ScrollHorizontal >
            {isEmpty ? <div className='data-empty'>데이터와 아리마셍데스</div>
                    : card.map(data => {
                const a = 
                    <div>
                        <div onClick={() => {props.moveToMap(data["address"])}} className={`card card${data["place_id"]}`} key={data["place_id"]} >
                            <img className='place_img' alt='images' src={data["img_url"]} />
                            <span className='place_name'>{data["place_name"]}</span>
                            <section>
                                <div className='stars'>
                                    <div style={{
                                        backgroundPosition:`-${99.5 -(data["score"] * 20)}px`,
                                        marginLeft:`-${99.5-(data["score"] * 20)}px`}
                                        }
                                        className='full-star' alt='star' src='../full_star.png'></div>
                                    <div className='empty-star' alt='star' src='../empty_star.png'></div>
                                </div>
                                <span className='star-point'>{data["score"]}</span>
                                <span className='place_desc'>({data["review_count"]})</span>
                            </section>
                        </div>
                    </div>
                return a; })
            }
            </ScrollHorizontal>
        </div>
    )
}
