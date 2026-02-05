// import React from 'react'
// import Navbar from '../navbar/navbar'
// import c1 from '../../Assests/c1.jpeg'
// import c2 from '../../Assests/c2.png'
// import c3 from '../../Assests/c3.png'
// import c4 from '../../Assests/c4.jpg'
// import c5 from '../../Assests/c5.jpg'
// import c6 from '../../Assests/c6.jpg'
// import c7 from '../../Assests/c7.jpg'
// import bloodimagenew from '../../Assests/bloodimagenew.jpg'
// import { useNavigate } from 'react-router-dom'
// import './Home.css'
// function Home() {
//   document.querySelector('title').textContent = "CancerCare | Home"
//   const navigate = useNavigate()
//   return (
//     <div>
//       <Navbar />
//       <img className='w-100' height="300px" style={{ marginTop: "60px" }} src={bloodimagenew} alt="" />
//       <div className='d-block mx-auto w-75 mt-5'>
//         <div className='d-flex justify-content-between'>
//           <h2 style={{ color: "#03045e", fontWeight: "bold" }} className='mb-4'>Blood Cancers</h2>
//           <button type='button' className='btn btn-primary mb-4' onClick={() => { navigate('/detection') }}>Wanna Check ??</button>
//         </div>
//         <p>Blood cancers affect the production and function of your blood cells. Most of these cancers start in your bone marrow where blood is produced. Stem cells in your bone marrow mature and develop into three types of blood cells: red blood cells, white blood cells, or platelets. In most blood cancers, the normal blood cell development process is interrupted by uncontrolled growth of an abnormal type of blood cell. These abnormal blood cells, or cancerous cells, prevent your blood from performing many of its functions, like fighting off infections or preventing serious bleeding.</p>
//         <p>There are three main types of blood cancers:</p>
//         <ul>
//           <li><p><span className='text-danger'>Leukemia</span>, a type of cancer found in your blood and bone marrow, is caused by the rapid production of abnormal white blood cells. The high number of abnormal white blood cells are not able to fight infection, and they impair the ability of the bone marrow to produce red blood cells and platelet</p></li>
//           <li><p><span className='text-danger'>Lymphoma</span> is a type of blood cancer that affects the lymphatic system, which removes excess fluids from your body and produces immune cells. Lymphocytes are a type of white blood cell that fight infection. Abnormal lymphocytes become lymphoma cells, which multiply and collect in your lymph nodes and other tissues. Over time, these cancerous cells impair your immune system.</p></li>
//           <li><p><span className='text-danger'>Myeloma</span> is a cancer of the plasma cells. Plasma cells are white blood cells that produce disease- and infection-fighting antibodies in your body. Myeloma cells prevent the normal production of antibodies, leaving your body's immune system weakened and susceptible to infection. </p></li>
//         </ul>
//       </div>
//       <div className='imagecarousel mb-5'>
//         <div id="carouselExampleRide" className="carousel carousel-dark slide" data-bs-ride="true">
//           <div className="carousel-inner">
//             <div className="carousel-item active">
//               <img src={c1} className="d-block w-100 cimage" alt="..." />
//             </div>
//             <div className="carousel-item">
//               <img src={c2} className="d-block w-100 cimage" alt="..." />
//             </div>
//             <div className="carousel-item">
//               <img src={c3} className="d-block w-100 cimage" alt="..." />
//             </div>
//             <div className="carousel-item">
//               <img src={c4} className="d-block w-100 cimage" alt="..." />
//             </div>
//             <div className="carousel-item">
//               <img src={c5} className="d-block w-100 cimage" alt="..." />
//             </div>
//             <div className="carousel-item">
//               <img src={c6} className="d-block w-100 cimage" alt="..." />
//             </div>
//             <div className="carousel-item">
//               <img src={c7} className="d-block w-100 cimage" alt="..." />
//             </div>
//           </div>
//           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div>
//       <footer>
//       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /> 
//             <div class="footer-content">
//                 <h3>Thank You</h3>
//                 <p>
// Raising awareness about blood cancer is vital for early detection and better treatment outcomes. Education on symptoms, regular screenings, and available support services can make a significant difference in saving lives.</p>
//                 FOLLOW US<ul class="socials">
//                     <li><a href="https://www.facebook.com/login/" target="_blank"><i class="fa fa-facebook"></i></a></li>
//                     <li><a href="https://www.twitter.com/login/" target="_blank"><i class="fa fa-twitter"></i></a></li>
//                     <li><a href="https://www.google.com/" target="_blank"><i class="fa fa-google"></i></a></li>
//                     <li><a href="https://www.youtube.com/" target="_blank"><i class="fa fa-youtube"></i></a></li>
//                     <li><a href="https://www.linkedin.com/" target="_blank"><i class="fa fa-linkedin-square"></i></a></li>
//                     <li><a href="https://instagram.com/" target="_blank"><i class="fa fa-instagram"></i></a></li>
//                 </ul>
//             </div>
//             <div class="footer-bottom">
//                 <p>Designed by KMIT Students</p>
//                 <p>Send feedback:<a href="mailto:knowaboutcancer@gmail.com;">knowaboutcancer@gmail.com</a></p>
//             </div>
//         </footer>
//     </div>
//   )
// }

// export default Home
import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "../navbar/navbar.js";
import bloodimagenew from '../../Assests/bloodimagenew.jpg'
// import c1 from "../../assets/c1.jpeg";
// import rest... c2, c3 etc
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Helmet><title>CancerCare | Home</title></Helmet>
      <Navbar />

      {/* Hero Banner */}
      <section className="hero">
        <img src={bloodimagenew} alt="Blood Cells" className="hero-img" />
      </section>

      {/* Intro Section */}
<section className="intro-section">
  <div className="intro-header">
  <div className="intro-text-wrapper">
    <h2 className="section-title">Blood Cancers</h2>
    <p className="section-subtitle">
      Early detection and awareness play a crucial role in saving lives.
    </p>
  </div>

  <button
    className="btn-primary"
    onClick={() => navigate("/detection")}>
    Run Detection Test
  </button>
  </div>


  <div className="intro-content">
    <p className="intro-description">
      Blood cancer is a group of cancers that affect the production and function of blood cells. These cancers usually begin in the bone marrow, where blood is formed. When abnormal blood cells grow uncontrollably, they interfere with the body’s ability to fight infections, transport oxygen, and prevent bleeding.
      Early detection plays a crucial role in improving survival rates and treatment outcomes. This project aims to provide an accessible and technology-driven approach to assist in the early identification of blood cancer risks using diagnostic analysis.
    </p>

    <div className="cancer-types">
      <div className="cancer-card">
        <h4 className="cancer-name">Leukemia</h4>
        <p className="cancer-desc">
          Cancer caused by abnormal white blood cell production.
        </p>
      </div>

      <div className="cancer-card">
        <h4 className="cancer-name">Lymphoma</h4>
        <p className="cancer-desc">
          Cancer affecting the lymphatic system and immune response.
        </p>
      </div>

      <div className="cancer-card">
        <h4 className="cancer-name">Myeloma</h4>
        <p className="cancer-desc">
          Cancer of plasma cells weakening the immune system.
        </p>
      </div>
    </div>
  </div>
  <h4 className="overview">
    🧪 Diagnostic Test Overview
  </h4>
  <p>The Run Diagnostic Test feature allows users to:</p>
  <ul>
    <li>Analyze key health and blood-related parameters</li>
    <li>Identify potential risk patterns using computational logic / machine learning</li>
    <li>Receive a preliminary risk indication for blood cancer</li>
  </ul>
  <p><i>⚠️ This tool is designed for educational and research purposes and does not replace professional medical diagnosis.</i></p>
</section>


      {/* Carousel */}
      <section className="imagecarousel">
        {/* Keep existing bootstrap carousel code but reduced styles */}
      </section>

            <footer>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /> 
            <div className="footer-content">
                <h3>Thank You</h3>
                <p>Raising awareness about blood cancer is vital for early detection and better treatment outcomes. Education on symptoms, regular screenings, and available support services can make a significant difference in saving lives.</p>
                FOLLOW US<ul className="socials">
                    <li><a href="https://www.facebook.com/login/" target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="https://www.twitter.com/login/" target="_blank"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="https://www.google.com/" target="_blank"><i class="fa fa-google"></i></a></li>
                    <li><a href="https://www.youtube.com/" target="_blank"><i class="fa fa-youtube"></i></a></li>
                    <li><a href="https://www.linkedin.com/" target="_blank"><i class="fa fa-linkedin-square"></i></a></li>
                    <li><a href="https://instagram.com/" target="_blank"><i class="fa fa-instagram"></i></a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>Designed by KMIT Students</p>
                <p>Send feedback:<a href="mailto:knowaboutcancer@gmail.com;" >knowaboutcancer@gmail.com</a></p>
            </div>
        </footer>
    </div>
  );
}

export default Home;
