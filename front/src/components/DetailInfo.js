import React from 'react'

export default function DetailInfo(props) {
  return (
    <div className='detail-info'>
        <article>
            <button onClick={props.deleteInfo}>X</button>
            <h4>{props.info["place_name"]}</h4>
            <img alt='gg' src={props.info["img_url"]} />
            <p>{props.info["description"]}</p>
        </article>
    </div>
  )
}
