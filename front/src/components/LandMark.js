import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import axios from 'axios';
import DetailInfo from './DetailInfo';
const { kakao } = window;

export default function LandMark() {
  const [placeData, setPlaceData] = useState([]); // DB에서 가져온 랜드마크 데이터
  const [isClick, setIsClick] = useState(false); // 카드를 클릭했는지
  const [targetPlace, setTargetPlace] = useState(null); // 클릭된 랜드마크 상세정보
  const [isEmpty, setIsEmpty] = useState(false);
  const makeOverListener = (map, marker, infowindow) => {
    return () => infowindow.open(map,marker);
  }
  const makeOutListener = (infowindow) => {
    return () => infowindow.close();
  }

  const getData = async () => { // DB에서 랜드마크 데이터 가져오기
    await axios.get("/api/places")
    .then(res => {
      setPlaceData(() => res.data)
      if(res.data.length !== 0) setIsEmpty(true);
    })
  }
  
  const showDetailInfo = (add) => {  // 카드 클릭 시 클릭된 장소의 상세 정보 저장
    setTargetPlace(data => add);
    setIsClick(data => !data); 
    if(!isClick) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }

  const showMap = () => {
    const container = document.getElementById('map');
    const options = {
      center : new kakao.maps.LatLng(35.1539342346421, 128.88044789823067),
      level : 9
    };
    const map = new kakao.maps.Map(container, options);
    const geocoder = new kakao.maps.services.Geocoder();
    
    const positions = placeData.map(data => {
      const a = {
        id : data["id"],
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
            content: `<div id="landmark-info">
            <span>${positions[i].title}</span>
          </div>`,
          });
          kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
          kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
          // kakao.maps.event.addListener(marker, 'click', showDetailInfo(positions[i]));
        }
      });
    }
  }

  useEffect(() => {
    getData();
    showMap();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetPlace, isEmpty])
  return (
    <div className='places-box'>
      {isClick ? <DetailInfo deleteInfo={showDetailInfo} info={targetPlace}/> : null}
      <Cards showDetailInfo={showDetailInfo} />
      <article className='landmark'>
        <div id="map" style={{
          width:'100%'
        }}></div>
      </article>
    </div>
  )
}