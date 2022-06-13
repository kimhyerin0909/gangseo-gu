import React, { useEffect,useRef,useState } from 'react'
import ScrollHorizontal from 'react-scroll-horizontal';
import axios from 'axios';
export default function Cards() {
    const star = useRef()
    const [card, setCard] = useState([]);
    const getCardData = async () => {
        const response = await axios.get("/api/places")
        .then(res => {
            setCard(res.data);
        });
        return response;
    }

    useEffect(() => {
        getCardData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div id='scroll-horizontal' className='card-box' >
            <p className='subtitle'>이곳에 가보시는 건 어떠신가요?</p>
            <ScrollHorizontal >
                {card.map(data => {
                    const a = <div className={`card card${data["place_id"]}`} key={data["place_id"]} >
                        <img className='place_img' alt='images' src={data["img_url"]} />
                        <span className='place_name'>{data["place_name"]}</span>
                        <section>
                            <div className='stars'>
                                <div style={{
                                    backgroundPosition:`-${98 -(data["score"] * 20)}px`,
                                    marginLeft:`-${98-(data["score"] * 20)}px`}
                                    }
                                    ref={star}className='full-star' alt='star' src='../full_star.png'></div>
                                <div className='empty-star' alt='star' src='../empty_star.png'></div>
                            </div>
                            <span className='star-point'>{data["score"]}</span>
                            <span className='place_desc'>({data["description"]})</span>
                        </section>
                    </div>
                    return a;
                })
                }
            </ScrollHorizontal>
        </div>
    )
}
