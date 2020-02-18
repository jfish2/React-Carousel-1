import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from './Header';

let styles = {
    margin: 'auto',
    width: '500px'
};

function App() {
  return (
    <div style={styles}>
      <Header />
      <Carousel showThumbs = {false}>
        <div>
          <img src = "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2016/07/Dazaifu-Tenmangu-Flickr-1024x683.jpg" alt="Dazaifu"/>
          <p className="legend">Dazaifu</p>
        </div>
        <div>
          <img src = "https://cdn.triplelights.com/uploads/2019-08/uZTOfPGv_original-17.jpg" alt="Kinkakuji"/>
          <p className="legend">Kinkauji</p>
        </div>
        <div>
          <img src = "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2016/05/Ginkaku-ji-Temple.jpg" alt="Ginkakuji"/>
          <p className="legend">Ginkakuji</p>
        </div>
        <div>
          <img src = "https://www.jrailpass.com/blog/wp-content/uploads/2019/04/kiyomidu-dera-temple-kyoto.jpg" alt="Kiyomizudera"/>
          <p className="legend">Kiyomizudera</p>
        </div>
        <div>
          <img src = "https://thetruejapan.com/wp-content/uploads/2017/10/Sensoji-Temple-at-Night-e1507469976304-830x450.jpg" alt="Sensoji"/>
          <p className="legend">Sensoji</p>
        </div>
        <div>
          <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGuLNoQ9jQF7MI0SkhmH3i721dzBS2laavsSAjF9JGgnKYO8je" alt="Ryoanji"/>
          <p className="legend">Ryonaji</p>
        </div>
        <div>
          <img src = "https://d3bbatwdaufxg9.cloudfront.net/thumb/m/2014/5558/6539/02-20150722_Manpukuji_lotus-123.jpg" alt="Obakusan Manpukuji"/>
          <p className="Manpukuji">Japan</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
