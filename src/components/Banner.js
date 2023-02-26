import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';
import TrackVisibility from 'react-on-screen';
import videobg from "../assets/img/vid bg vid.mp4"
// import metaverse from "../assets/img/metaverse-115035.mp4"

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "TECHNICAL", "NON-TECHNICAL", "WORKSHOP" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <div className="relative"   >
      <video src={videobg}autoPlay muted playsInline loop className="w-full h-full object-cover opacity-70"  >
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">         
                  <h1 className="text-4xl font-bold text-white" >{`VIDYUTRENZ 23`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "TECHNICAL", "NON-TECHNICAL", "WORKSHOP" ]'><span className="wrap">{text}</span></span></h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button onClick={() => {}}>Let’s explore <ArrowRightCircle size={25} /></button>
        </div>
            
            <Col xs={12} md={6} xl={5}>
           
                    <img src={""} alt=""/>
            </Col>
       </video>    
        
    </div>
    
    
    
    

    
  )
}
