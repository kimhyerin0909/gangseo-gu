/* eslint-disable */
import React, { useState } from 'react';
import tendency from '../data/quiz.json';
import Result from './Result';
let group1= 0, group2= 0, group3= 0, group4= 0;

export default function Quiz() {
    const [num, setNum] = useState(1);
    const [quiz, setQuiz] = useState(tendency[0]);
    const [isEnd, setIsEnd] = useState(false);
    const [maxNum, setMaxNum] = useState(0);
    // 1 : 공원, 2 : 산, 3 : 바다, 4 : 역사

    const point = (group) => {
        if(quiz === tendency[0]) {
            switch(group) {
                case 0 :
                    group1 += 50;
                    group2 += 100;
                    group3 += 0;
                    group4 += 50;
                    break;
                case 1 :
                    group1 += 50;
                    group2 += 80;
                    group3 += 20;
                    group4 += 50;
                    break;
                case 2 :
                    group1 += 50;
                    group2 += 30;
                    group3 += 70;
                    group4 += 50;
                    break;
                case 3 :
                    group1 += 50;
                    group2 += 0;
                    group3 += 100;
                    group4 += 50;
                    break;
            }
        } else if(quiz === tendency[1]) {
            switch(group) {
                case 0 :
                    group1 += 30; // 공원, 산, 바다, 역사
                    group2 += 50;
                    group3 += 20;
                    group4 += 100;
                    break;
                case 1 :
                    group1 += 45;
                    group2 += 45;
                    group3 += 30;
                    group4 += 80;
                    break;
                case 2 :
                    group1 += 60;
                    group2 += 60;
                    group3 += 50;
                    group4 += 30;
                    break;
                case 3 :
                    group1 += 70;
                    group2 += 70;
                    group3 += 60;
                    group4 += 0;
                    break;
            }
        } else if(quiz === tendency[2]) {
            switch(group) {
                case 0 :
                    group1 += 100; // 공원, 산, 바다, 역사
                    group2 += 35;
                    group3 += 30;
                    group4 += 35;
                    break;
                case 1 :
                    group1 += 80;
                    group2 += 45;
                    group3 += 30;
                    group4 += 45;
                    break;
                case 2 :
                    group1 += 30;
                    group2 += 60;
                    group3 += 50;
                    group4 += 60;
                    break;
                case 3 :
                    group1 += 0;
                    group2 += 70;
                    group3 += 60;
                    group4 += 70;
                    break;
            }
        } else if(quiz === tendency[3]) {
            switch(group) {
                case 0 :
                    group1 += 35; // 공원, 산, 바다, 역사
                    group2 += 35;
                    group3 += 100;
                    group4 += 30;
                    break;
                case 1 :
                    group1 += 30;
                    group2 += 100;
                    group3 += 35;
                    group4 += 35;
                    break;
                case 2 :
                    group1 += 100;
                    group2 += 35;
                    group3 += 30;
                    group4 += 35;
                    break;
                case 3 :
                    group1 += 35;
                    group2 += 30;
                    group3 += 35;
                    group4 += 100;
                    break;
            }
        } 
        
        if(num === 4) {
            const max = Math.max(group1, group2, group3, group4);
            sendResult(max);
            setIsEnd(e => !e);
        } else {
            setNum(n => n += 1);
            setQuiz(tendency[num]);
        }
    }

    const sendResult = (max) => {
        for(let i = 1; i < 4; i++) {
            if(group1 === max) {
                setMaxNum(1);
            } else if(group2 === max) {
                setMaxNum(2);
            } else if(group3 === max) {
                setMaxNum(3);
            } else if(group4 === max) {
                setMaxNum(4);
            } 
        }
    }

    return (
        <div className='quiz'>
            {isEnd ? <Result max={maxNum} /> : <div>
                <h3>{quiz.name}</h3>
                <div className="ilust">
                <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_ugfqunra.json"  background="transparent"  speed="1.5"  loop autoplay></lottie-player>
                </div>
                <button className='quiz-list' onClick={() => point(0)}>{quiz.answers[0]}</button>
                <button className='quiz-list' onClick={() => point(1)}>{quiz.answers[1]}</button>
                <button className='quiz-list' onClick={() => point(2)}>{quiz.answers[2]}</button>
                <button className='quiz-list' onClick={() => point(3)}>{quiz.answers[3]}</button>
            </div>
            }
        </div>
    )
}
