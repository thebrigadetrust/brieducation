import atriya from "../assets/atriya.jpg";
import "./Founder.css";
import React from "react";
import founder1 from "../assets/founder1.png";
import founder2 from "../assets/founder2.png";

export default function Founder() {
    return (
        <>
            <section className="founder-creative">
                <div className="container founder-flex">

                    {/* PHOTO SECTION */}
                    <div className="founder-photo-section">
                        <div className="founder-photo-wrap">
                            <img src={atriya} className="founder-round" />
                            <div className="founder-glow"></div>
                        </div>
                        <h2 className="founder-name">Shri K. V. Atriya</h2>
                        <p className="founder-title">
                            Founder President — The Brigade Education Trust
                        </p>

                        <blockquote className="founder-quote">
                            Education is not information — it is human engineering.
                        </blockquote>
                    </div>

                    {/* TEXT CONTENT */}
                    <div className="founder-content">
                        {/* FULL PROFILE */}
                        <p className="founder-full-profile">
                            Shri K V Atriya is a Post Graduate in English, holds a Bachelor's in Education and in Commerce, a Post Graduate Diploma in Environment Protection Management, a Post Graduate Diploma in Industrial Relations and Personnel Management and a Post Graduate Diploma in Journalism in which he was conferred with Sri Vasudev Rao Aurangabadkar Memorial Gold-Medal by Bhartiya Vidya Bhavan (2001)<br /><br />

                            He belongs to a rare professional category whose work experience range from Government Service to Private Service, School Education to Higher Education, from a regular service to Independent Service, from classroom teaching to faculty training, from a formal teaching/training to Educational Community Development Programs with research as his passion<br /><br />

                            An Educationalist, researcher and analyst, he worked across Boards viz., CBSE, AP Govt Board, Gujarat Govt Board, in ICSE/ISC as a TGT, PGT, Administrative Officer, Hostels Superintendent in Sainik School Balachadi, Jamnagar, GJ, Min. Of Defence, Govt Of India, as Principal, as Secretary & Correspondent as part of his regular service from 1998 to 2016. Further, he lead School Management Committee Training in 1797 Govt schools' complexes spread across in all 348 Mandals of 06 Districts of AP, covering training for 2,09,235 SMC elected and nominated members as per Govt. records (2016-17) for Sarva Shiksha Abhiyan (now Samagra Shiksha), Ministry of Human Resource Development, Govt. of Andhra Pradesh as Training Head & Project Co-ordinator.<br /><br />

                            He is well versed with the educational history and philosophy of India including NEP 2020 with special inclination towards teaching, learning standards & learning outcomes.<br /><br />

                            His research work includes reviewing articles, commentaries, literature review as part of blind peer review process of Current Issues in Education, Arizona State University, USA (2009-2015) & recent publications (2025) include "Bridging the Gap Between Academic Achievement and Employability: A Case Study of Soft Skills Integration in some Rural and Semi Urban Mandals of West Godavari District, Andhra Pradesh", International Journal for Innovative Research in Multidisciplinary Field, ISSN(O): 2455-0620, Vol-11, Issue-6, Pp.378-389. Available on – <a href="https://www.ijirmf.com/" target="_blank" rel="noopener noreferrer">https://www.ijirmf.com/</a> and "Cross-Domain Brain Activation in Learning: A Neuroscientific Study of an Extramural Combination of Co-Scholastic Competencies to Enhancing Educational Quality and Inclusivity in Rural Public Schools of Vikarabad District of Telangana State." International Journal of Indian Psychology. 13, 3 (Sep. 2025). <a href="https://ijip.in/" target="_blank" rel="noopener noreferrer">https://ijip.in/</a><br /><br />

                            His talks on "Importance of Education" at the All India Radio and "Role of Teachers in Education" at Doordarshan Kendra, Ranchi in 1997, were very popular.<br /><br />

                            He was among the national trainers for Sri Satya Sai Vidya Vahini—a training program to mitigate urban and rural divide in quality education, part of a holistic program run by Sri Sathya Sai Seva Organizations. (2011-13)<br /><br />

                            He is active faculty trainer in the engagement of Sri Satya Sai Seva Organization with the Govt of Telangana in imparting training on Human Values in Education/Teaching.<br /><br />
                            <div className="founderimages">
                                <img src={founder1} alt="Founder 1" />
                                <img src={founder2} alt="Founder 2" />
                            </div><br />
                            He has cultivated a distinctive understanding of Gandhian principles of Truth, ahimsa and the 'Nai Talim' system of education and Swami Vivekananda's philosophy of education and learning. He advocates for an educational approach that resonates with the Indian ethos blended and backed by contemporary research that enhances the effectiveness of learning-teaching processes at par with Global standards.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
