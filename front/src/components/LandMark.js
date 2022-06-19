import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import axios from 'axios';
const { kakao } = window;

export default function LandMark() {
  const [placeData, setPlaceData] = useState([]);
  const [flag, setFlag] = useState(false);
  const [targetPlace, setTargetPlace] = useState(null);
  const makeOverListener = (map, marker, infowindow) => {
    return () => infowindow.open(map,marker);
  }
  // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
  const makeOutListener = (infowindow) => {
    return () => infowindow.close();
  }

  const getData = async () => {
    await axios.get("/api/places")
    .then(res => {
      setPlaceData(res.data)
      setFlag(true)
    })
  }
  
  const moveToMap = (add) => {
    setTargetPlace((data) => add);
    console.log(targetPlace)
  }

  useEffect(() => {
    getData();
    const container = document.getElementById('map');
    const options = {
      center : new kakao.maps.LatLng(35.1539342346421, 128.88044789823067),
      level : 9
    };
    const map = new kakao.maps.Map(container, options);
    const geocoder = new kakao.maps.services.Geocoder();
    
    const positions = placeData.map(data => {
      const a = {
        id : data["place_id"],
        address : data["address"],
        title : data["place_name"],
        content : data["description"],
        imgUrl : data["img_url"],
        clickable: true
      }
      return a;
    })
    for (let i = 0; i < positions.length; i++) {
      // eslint-disable-next-line no-loop-func
      geocoder.addressSearch(positions[i].address, (res, sta) => {
        if(sta === kakao.maps.services.Status.OK) {
          let coords = new kakao.maps.LatLng(res[0].y, res[0].x);
          let marker = new kakao.maps.Marker({
            map : map,
            position : coords,
          })
          let infowindow = new kakao.maps.InfoWindow({
            content: `<div className="landmark-info">
            <span>${positions[i].title}</span>
          </div>`,
          });
          kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
          kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
        }
      });
      // console.log(targetPlace);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag, targetPlace])
  return (
    <div>
      <Cards moveToMap={moveToMap} />
      <article className='landmark'>
        <div id="map" style={{
          width:'100%',
          height:'500px'
        }}></div>
      </article>
    </div>
  )
}