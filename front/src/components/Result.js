import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Result(props) {
    const [card, setCard] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);
    const [isResult, setIsResult] = useState(false);
    const [yourPlace, setYourPlace] = useState({
        id:0,
        place_name:"로딩 중...",
        address:"",
        img_url: "",
        description:"",
    });
    useEffect(() => {
        let recArr = [];
        // eslint-disable-next-line no-unused-vars
        const response = axios.get("/api/places")
        .then(res => {
            setCard(res.data);
            if(res.data.length !== 0) setIsEmpty(true);
        });
        if(isEmpty && !isResult) {
            card.forEach(e => {
                if(e["group"] === props.max) {
                    recArr.push(e);
                }
            })
            let random = Math.floor(Math.random() * recArr.length);
            setYourPlace(() => recArr[random])
            setIsResult(da => !da);
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ isEmpty, isResult, props.max, yourPlace])
  return (
    <div className='result'>
        <h2>{yourPlace["place_name"]}</h2><p>{yourPlace["address"]}</p>
        <img className='result-img' alt='로딩 중' src={yourPlace["img_url"]} />
        <p>{yourPlace["description"]}</p>
        <button onClick={() => window.location.reload()} className='re-test'>다시 테스트하기</button>
    </div>
  )
}
