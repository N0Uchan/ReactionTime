// imgList = ['../assets/cat (1).jpg','../assets/cat (2).jpg','../assets/cat (3).jpg','../assets/cat (4).jpg',
// '../assets/cat (5).jpg','../assets/cat (6).jpg','../assets/cat (7).jpg','../assets/cat (8).jpg',
// '../assets/cat (9).jpg','../assets/cat (10).jpg','../assets/cat (11).jpg']
// // const imgLink = imgList[imgId];
// const img = require('../assets/cat ('+imgId+').jpg')
import img1 from '../assets/cat (1).jpg';import img2 from '../assets/cat (2).jpg';import img3 from '../assets/cat (3).jpg';import img4 from '../assets/cat (4).jpg';import img5 from '../assets/cat (5).jpg';import img6 from '../assets/cat (6).jpg';import img7 from '../assets/cat (7).jpg';import img8 from '../assets/cat (8).jpg';import img9 from '../assets/cat (9).jpg';import img10 from '../assets/cat (10).jpg';import img11 from '../assets/cat (11).jpg';
const imgList = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11];

export default function Image({imgId}) {
    
    return (
        <img src = {imgList[imgId-1]} alt='image of a cat.' />
    )
}
