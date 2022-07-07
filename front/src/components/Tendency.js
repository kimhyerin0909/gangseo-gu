import React, { useState } from 'react';
import Quiz from './Quiz';

export default function Tendency() {
    const [isStart, setIsStart] = useState(false);

    const startTest = () => {
        setIsStart(is => !is);
    }

    return (
    <div className='tendency'>
        {isStart ? <Quiz /> : <div className='start-page'>
            <div className='start-box'>
                <h2>나에게 맞는 강서구 관광지 추천받기!</h2>
                <h4>당신의 여행 성향에 따라 추천해줘요!</h4>
                <img alt='청두리' src='https://www.bsgangseo.go.kr/bsgangseo/data/06/02_04_02_2013_b3.jpg' />
                <button title='Button push blue/green button btnPush btnBlueGreen' onClick={startTest}>테스트 시작하기</button>
            </div>
        </div>}
    </div>
    )
}
