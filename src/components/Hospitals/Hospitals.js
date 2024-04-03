import React from 'react'
import Navbar from '../navbar/navbar'
import { useNavigate } from 'react-router-dom'
import './Hospitals.css'

function Hospitals() {
  document.querySelector('title').textContent = "CancerCare | Hospitals"
  const navigate = useNavigate()
  return ( 
    
    <div>
      <Navbar /><br /><br /><br/>
      <div class="no"><h1>Here are some well-known institutions for cancer treatment in India.</h1></div>
      <div class="info"><p>India is home to several renowned institutions dedicated to cancer treatment, research, and care. Here are some of the well-known institutions recognized for their expertise and advanced facilities in cancer care:
</p></div>
      
      <div class="container">
      <div class="card">
        <div class="card-header">
          <img src="https://www.healthcareitnews.com/sites/hitn/files/Screen%20Shot%202022-10-27%20at%201.55.04%20PM.jpg" alt="" />
        </div>
        <div class="card-body">
          <h4>All India Institute Of Medical Sciences, Delhi (Government Hospital)</h4>
          <p>
          <ul>
  <li>Houses one of the top cancer hospitals in India, Bhim Rao Institute
Rotary Cancer Hospital.</li>
  <li>Staff of expert oncologists, consultants, nurses, para medical staff, along
with other support staff providing best cancer care in Delhi, India.</li>
  <li>Immunotherapy, Personalized Therapy, Radiation Therapy, etc.</li>
</ul>  
          </p>
          <div class="user">
            <p><b>Details:</b> </p><br />
            <div class="user-info">
              <p>Address: Sri Aurobindo Marg, Ansari Nagar, Ansari Nagar East, New Delhi,
Delhi 110029<br /> Phone: +011-2658 8500 <br />
<a href="https://www.aiims.edu">https://www.aiims.edu</a>
</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card">
        <div class="card-header">
          <img src="https://assets.telegraphindia.com/telegraph/ab515557-32bb-4fc8-a183-8eb932d48808.jpg" alt="" />
        </div>
        <div class="card-body">
          <h4>
          Tata Memorial Hospital, Mumbai (Government)
          </h4>
          <p>
          <ul>
  <li>One of the best government hospitals for cancer treatment in India.Founded in 1941 by Dorab Tata Trust.</li>

  <li>Provide international standard healthcare services at affordable cost for
economically backward people.</li>
  <li>Provide free cancer care to almost 70% of cancer patients.</li>
</ul>  </p>
          <div class="user">
          <p><b>Details:</b> </p>
            <div class="user-info">
              <p>Address: Dr. E, Dr Ernest Borges Rd, Parel, Mumbai, Maharashtra 400012<br />
Phone: 022 2417 7000<br />
              <a href="https://tmc.gov.in">https://tmc.gov.in</a></p>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
          <div class="card-header">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/97/Basavatarakam_Cancer_Hospital_Hyderabad_2.jpg" alt="" />
          </div>
          <div class="card-body">
            <h4>Basavatarakam Indo American Cancer Hospital &
Research Institute, Hyderabad</h4>
<p>
<ul>
  <li>Basavatarakam Indo American Cancer Hospital & Research Institute,
Hyderabad was established by US and was inaugurated in the year 2000
by then Honorable Prime Minister of Government of India, Sri. Atal
Bihari Vajpayee.</li>

  <li>Latest equipment available at Basavatarakam Indo American Cancer
Hospital & Research Institute – IGRT, 2D&3D IGBT Brachytherapy,
SBRT, SRS, etc.</li>
</ul> 
            </p>
            <div class="user">
            <p><b>Details:</b> </p>
              <div class="user-info">
                <p>Address: Rd Number 10, IAS Officers Quaters, Nandi Nagar, Banjara Hills,
Hyderabad, Telangana 500034<br />
Phone: 0402355 1235
<br />
                <a href="https://induscancer.com/">https://induscancer.com/</a></p>
              </div>
            </div>
          </div>
        </div>
      <div class="card">
          <div class="card-header">
            <img src="https://www.americanoncology.com/static/uploads/5b748b0a-a4fd-438c-ac19-6e5d55c0f526-1709113966108.jpg" alt="" />
          </div>
          <div class="card-body">
            <h4>American Oncology Institute, Hyderabad</h4>
            <p>
            <ul>
  <li>American Oncology Institute, Hyderabad was founded by a team of
oncologists at the University of Pittsburgh Medical Center (USA).</li>

  <li>250 bedded capacity multi specialty cancer hospital in Hyderabad, India.</li>
  <li>The hospital keep up with the latest technologies and cutting edge
equipment in their oncology department to offer international standard
care to cancer patients.</li>
</ul>  

            </p>
            <div class="user">
            <p><b>Details: </b> </p>
              <div class="user-info">
                <p>Address: Near aparna Sarovar, Nallagandla, Serilingampally, Hyderabad,
Telangana – 530019<br />
Phone : +91-9515668363<br />
                <a href=" https://www.americanoncology.com/">https://www.americanoncology.com/</a></p>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
        <div class="card-header">
          <img src="https://www.foxchase.org/sites/default/files/pr-4.jpg" alt="" />
        </div>
        <div class="card-body">
          <h4>Rajiv Gandhi Cancer Institute and Research
Centre, Delhi (Charitable Hospital)</h4>
          <p>
          <ul>
  		<li>It is unit of Indraprastha Cancer Society</li>
  		<li>Rajiv Gandhi Cancer Institute was founded in the year 1996 with the sole
aim to provide quality cancer care to every section of the society.
Therefore, if you belong from a weak financial background, then you can
consider getting treatment from this government cancer hospital in India.</li>
  		<li>The hospital have a capacity of 300 beds for cancer patients and have an
exclusive pediatric cancer care unit.
 Good number of support staff to take proper care and provide guidance to
people affected by cancer.
		</li>
	  </ul>  
          </p>
          <div class="user">
            <p><b>Details:</b> </p><br />
            <div class="user-info">
              <p>Address: Sir Chotu Ram Marg, Sector – 5, Rohini Institutional Area, Rohini, New
Delhi, Delhi – 110085, India<br /> Phone: +91-11-47022222 <br />
<a href="https://www.rgcirc.org/">https://www.rgcirc.org/</a>
</p>
            </div>
          </div>
        </div>
      </div>
        <div class="card">
        <div class="card-header">
          <img src="https://sipaniproperties.com/product/Kidwai-Memorial-Institute-of-Oncology-(KMIO)_(1).jpg" alt="" />
        </div>
        <div class="card-body">
          <h4>Kidwai Memorial Institute Of Oncology,Bangalore (Government)</h4>
          <p>
          <ul>
  		<li>Another government hospital for cancer treatment in India. It was
		established by the government of Karnataka and government of India to
		provide multi disciplinary and economical care to cancer patients without
		any compromise on quality.</li>
  		<li>Kidwai Institute Oncology, Bangalore was founded in the year 1973. First 		hospital in the Bangalore city to perform a surgery using robotic
		system.</li>
  		<li>Latest equipment for cancer diagnosis and treatment including Laser
		Surgery System, Mammogram, Ultra-sonography, etc. are available.
		</li>
	  </ul>  
          </p>
          <div class="user">
            <p><b>Details:</b> </p><br />
            <div class="user-info">
              <p>Address: Dr M H, Marigowda Rd, Near, Bengaluru, Karnataka 560029<br /> Phone: 080 2656 0703 <br />
<a href="http://www.kmio.org/">http://www.kmio.org/</a>
</p>
            </div>
          </div>
        </div>
      </div>
        
        <div class="card">
          <div class="card-header">
            <img src="https://i.ytimg.com/vi/aFx6URvxJ-I/maxresdefault.jpg" alt="" />
          </div>
          <div class="card-body">
            
            <h4>Kokilaben Dhirubhai Ambani hospital, Mumbai
(Private)
</h4>
<p>
<ul>
  <li>Kokilaben Dhirubhai Ambani Hospital offers modern cancer treatment
methods including advanced robotic surgeries, Edge Radiosurgery, etc.
making it one of best cancer hospitals in India for surgical treatment.</li>

  <li>High success rate in surgical treatment as compared to other top oncology
hospitals in India.</li>
  <li>One of the few cancer hospitals in Mumbai, India to have a full specialist
program.</li>
</ul>  


            </p>
            <div class="user">
            <p><b>Details:</b> </p>
              <div class="user-info">
                <p>Address: Rao Saheb, Achutrao Patwardhan Marg, Four Bungalows, Andheri West,
Mumbai, Maharashtra 400053<br />
Phone: 912230999999
<br />
                <a href=" https://www.kokilabenhospital.com/">https://www.kokilabenhospital.com/</a></p>
              </div>
            </div>
          </div>
        </div>
        
    <div class="card">
        <div class="card-header">
          <img src="https://www.medicalindiatourism.com/wp-content/uploads/2021/11/129-1024x597.jpg" alt="" />
        </div>
        <div class="card-body">
          <h4>Fortis Hospital, Mumbai</h4>
          <p>
          <ul>
      <li>Chain of multi-specialty hospitals across major cities in India including
        Delhi, Mumbai, Chennai, etc.</li>
      <li>5 times received the reputed JCI accredition</li>
      <li>The staff is highly qualified and professional.</li>
          </ul>  
          </p>
          <div class="user">
          <p><b>Details:</b></p>
            <div class="user-info">
              <p>Address: Mulund Goregaon Link Rd, Industrial Area, Mulund West, Mumbai,
                Maharashtra 400078<br />
                Phone: +91 8956051535
              <br />

              <a href="https://www.fortishealthcare.com/" >https://www.fortishealthcare.com/</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    

  
    
    <footer>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /> 
            <div class="footer-content">
                <h3>Thank You</h3>
                <p>Raising awareness about blood cancer is vital for early detection and better treatment outcomes. Education on symptoms, regular screenings, and available support services can make a significant difference in saving lives.</p>
                FOLLOW US<ul class="socials">
                    <li><a href="https://www.facebook.com/login/" target="_blank"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="https://www.twitter.com/login/" target="_blank"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="https://www.google.com/" target="_blank"><i class="fa fa-google"></i></a></li>
                    <li><a href="https://www.youtube.com/" target="_blank"><i class="fa fa-youtube"></i></a></li>
                    <li><a href="https://www.linkedin.com/" target="_blank"><i class="fa fa-linkedin-square"></i></a></li>
                    <li><a href="https://instagram.com/" target="_blank"><i class="fa fa-instagram"></i></a></li>
                </ul>
            </div>
            <div class="footer-bottom">
                <p>Designed by KMIT Students</p>
                <p>Send feedback:<a href="mailto:knowaboutcancer@gmail.com;">knowaboutcancer@gmail.com</a></p>
            </div>
        </footer>
    </div>
  )
}
export default Hospitals;