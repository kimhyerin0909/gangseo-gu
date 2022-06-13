import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import lm from "../landmark.json";
const { kakao } = window;

export default function LandMark() {
  function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
    };
  }

  // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
  function makeOutListener(infowindow) {
      return function() {
          infowindow.close();
      };
  }

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center : new kakao.maps.LatLng(35.1539342346421, 128.88044789823067),
      level : 9
    };
    const map = new kakao.maps.Map(container, options);
    const positions = lm.map(data => {
      const a = {
        id : data["id"],
        title : data["name"],
        latlng : new kakao.maps.LatLng(data["lat"], data["lon"]),
        content : data["desc"],
        imgUrl : data["img_url"],
        clickable: true
      }
      return a;
    }) 
    for (var i = 0; i < positions.length; i ++) {
      var marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: positions[i].latlng, // 마커를 표시할 위치
          title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      });
      var infowindow = new kakao.maps.InfoWindow({
        content: `<div className="landmark-info">
        <span>${positions[i].title}</span>
      </div>`,
      });
      kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
      kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
    }
    
  }, [])
  return (
    <div>
      <Cards />
      <article className='landmark'>
        <p className='subtitle'>강서구 랜드마크</p>
        <div id="map" style={{
          width:'100%',
          height:'500px'
        }}></div>
      </article>
    </div>
    
  )
}
