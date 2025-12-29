import React from "react";
import "./ProjectPublications.css";

export function Project1() {
    return (
        <section className="project-section">
            <div className="container">

                {/* OVERVIEW BLOCK */}
                <div className="project-overview">

                    {/* MAIN SECTION HEADING */}
                    <h2 className="overview-heading">Overview</h2>

                    {/* PROJECT TITLE */}
                    <div className="overview-block project-title-block">
                        <h3>Project Title</h3>
                        <p><strong>School Management Committee Members Training (SMC) 2016-17</strong></p>
                    </div>

                    {/* GRID */}
                    <div className="overview-grid">

                        {/* COLUMN 1 */}
                        <div className="overview-column">

                            {/* POLICY RELEVANCE */}
                            <div className="overview-block">
                                <h3>Policy Relevance</h3>
                                <ul>
                                    <li>Right of Children to Free & Compulsory Education (RTE) Act, 2009</li>
                                    <li>Sarva Shiksha Abhiyan (now Samagra Shiksha) – A flagship program of Government of India</li>
                                </ul>
                            </div>

                            {/* KEY FEATURES IN ACTION */}
                            <div className="overview-block">
                                <h3>Key Features in Action</h3>
                                <p>Role of SMC members as per RTE Act, 2009:</p>
                                <ul>
                                    <li>Preparation of School Development Plan, School Administration & Supervision, Academic Monitoring</li>
                                    <li>Mid-Day Meal now PM POSHAN</li>
                                    <li>Swachh Vidyalaya including maintenance of toilets, behavioural changes among students</li>
                                    <li>Shaala Siddhi</li>
                                    <li>Other areas related to school education with regard to community involvement & school management</li>
                                </ul>
                            </div>

                            {/* PROJECT VALIDITY */}
                            <div className="overview-block">
                                <h3>Project Validity</h3>
                                <ul>
                                    <li>Approved by SSA (Samagra Shiksha), Govt. of Andhra Pradesh</li>
                                    <li>Model Training by State Council of Educational Research & Training, Andhra Pradesh</li>
                                </ul>
                            </div>

                        </div>

                        {/* COLUMN 2 */}
                        <div className="overview-column">

                            {/* TARGET SCHOOLS */}
                            <div className="overview-block">
                                <h3>Target Schools</h3>
                                <p>1797 Government School Complexes as per allotment in 348 Mandals of six (06) Districts in Andhra Pradesh</p>
                            </div>

                            {/* BENEFICIARIES */}
                            <div className="overview-block">
                                <h3>Target Beneficiaries</h3>
                                <p>2,09,235 SMC Members</p>
                            </div>

                            {/* TRAINING TIMELINE */}
                            <div className="overview-block">
                                <h3>Training Commencement & Closure Dates</h3>
                                <p>13 December 2016 – 30 November 2017</p>
                            </div>

                            {/* IMPLEMENTING AGENCY */}
                            <div className="overview-block">
                                <h3>Implementing Agency</h3>
                                <p>Concept Educational Trust, Hyderabad, Telangana</p>
                            </div>

                            {/* EXPERTISE */}
                            <div className="overview-block">
                                <h3>Expertise Involved</h3>
                                <p>
                                    Professors from AU, ANU, KU, SKU and Independent professionals with <strong>Shri K. V. Atriya</strong> as Training Head & Project Coordinator
                                </p>
                            </div>

                            {/* AIM */}
                            <div className="overview-block">
                                <h3>Aim</h3>
                                <p>To enhance accountability, responsibility and answerability in Government schools' functioning through active participation and contribution of SMC Members</p>
                            </div>

                        </div>

                    </div>
                </div>

                {/* IMAGE + VIDEO SECTION */}
                <div className="project-media">
                    {/* LEFT SIDE IMAGES */}
                    <div className="media-section">
                        <h2 className="overview-heading">Images</h2>
                        <div className="media-images">
                            <img src="/images/ccep1.jpg" alt="SMC Training" />
                            <img src="/images/ccep2.jpg" alt="SMC Training" />
                            <img src="/images/ccep3.jpg" alt="SMC Training" />
                            <img src="/images/ccep4.jpg" alt="SMC Training" />
                            <img src="/images/ccep5.jpg" alt="SMC Training" />
                            <img src="/images/ccep6.jpg" alt="SMC Training" />
                        </div>
                    </div>

                    {/* RIGHT SIDE VIDEO */}
                    <div className="media-section">
                        <h2 className="overview-heading">Videos</h2>
                        <div className="media-video">
                            <video controls>
                                <source src="/videos/video1.mp4" type="video/mp4" />
                            </video>
                            <video controls>
                                <source src="/videos/video2.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>

                </div>

                {/* PDF BLOCK */}
                {/* <div className="project-pdf-box">
                    <h3>Research Publication</h3>

                    <iframe
                        src="/pdfs/Employability_Skills_Research_Publication.pdf"
                        className="pdf-frame"
                    ></iframe>

                    <a
                        href="/pdfs/Employability_Skills_Research_Publication.pdf"
                        download
                        className="pdf-download"
                    >
                        Download PDF
                    </a>
                </div> */}

            </div>
        </section>
    );
}

export function Project2() {
    return (
        <section className="project-section">
            <div className="container">

                {/* OVERVIEW BLOCK */}
                <div className="project-overview">

                    {/* MAIN SECTION HEADING */}
                    <h2 className="overview-heading">Overview</h2>

                    {/* PROJECT TITLE SECTION */}
                    <div className="overview-block project-title-block">
                        <h3>Project Title</h3>
                        <p><strong>Campus to Corporate – Employability Skills Enhancement Program</strong></p>
                    </div>

                    {/* TWO COLUMN GRID */}
                    <div className="overview-grid">

                        {/* COLUMN 1 */}
                        <div className="overview-column">

                            <div className="overview-block">
                                <h3>Areas of Crisis</h3>
                                <ul>
                                    <li>Lack of awareness on approach to employment among rural Graduate youth</li>
                                    <li>Lack of employability skills to acquire employment</li>
                                </ul>
                            </div>

                            <div className="overview-block">
                                <h3>Key Features in Action</h3>
                                <p>Requisite Knowledge, Skills & Attitude for employment for rural youth</p>
                            </div>

                            <div className="overview-block">
                                <h3>Project Validity</h3>
                                <ul>
                                    <li>Inputs given by unaided Graduate colleges' Heads, staff & students' of final year in the rural region</li>
                                    <li>Approval by CSR Committee of Navabharat Ltd. (A Palm-oil producing company), West Godavari</li>
                                    <li>Monitored by AS Chowdhary Foundation & Funded by Navabharat Ltd (NBL) under corporate social responsibility (CSR)</li>
                                </ul>
                            </div>

                            <div className="overview-block">
                                <h3>Target Institutions</h3>
                                <p>Total 09 (Nine) non-technical Colleges – 07 Graduate colleges, 01 college of Education & 01 college of Pharmacy spread across 05 (Five) Mandals of West Godavari District</p>
                            </div>

                            <div className="overview-block">
                                <h3>Training Duration</h3>
                                <p>45 Hours of training; 22 August 2019 to 28 February 2020 – Physical engagement in respective colleges & 01 April 2020 to 05 July 2020 – Recap and interactive-guidance based online sessions during Pandemic</p>
                            </div>

                        </div>

                        {/* COLUMN 2 */}
                        <div className="overview-column">

                            <div className="overview-block">
                                <h3>Target Beneficiaries</h3>
                                <p>@Forty (40) final year Students per college for a total of 360 students</p>
                            </div>

                            <div className="overview-block">
                                <h3>Implementing Agency</h3>
                                <p>The Brigade Educational Trust, Hyderabad</p>
                            </div>

                            <div className="overview-block">
                                <h3>Expertise Involved</h3>
                                <p>Joint Managing Director (NBL), DGM (NBL), GM (Coromandal International Ltd.), Sr HR (Avanti Feeds Ltd.), & Sr. HR (Amar Raja Pvt Ltd.)</p>
                            </div>
                            
                            <div className="overview-block">
                                <h3>Aim</h3>
                                <ul>
                                    <li>To enhance rural graduates employment ratio</li>
                                    <li>To orient colleges to align employability specific knowledge, skills and attitudes with regular curriculum to achieve higher employability among Graduates</li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>

                {/* IMAGE + VIDEO SECTION */}
                <div className="project-media">
                    {/* LEFT SIDE IMAGES */}
                    <div className="media-section">
                        <h2 className="overview-heading">Images</h2>
                        <div className="media-images">
                            <img src="/images/ccep1.jpg" alt="Training Session" />
                            <img src="/images/ccep2.jpg" alt="Soft Skills Workshop" />
                            <img src="/images/ccep3.jpg" alt="Student Interaction" />
                            <img src="/images/ccep4.jpg" alt="Activity Session" />
                            <img src="/images/ccep5.jpg" alt="Group Discussion" />
                            <img src="/images/ccep6.jpg" alt="Assessment Phase" />
                        </div>
                    </div>

                    {/* RIGHT SIDE VIDEO */}
                    <div className="media-section">
                        <h2 className="overview-heading">Videos</h2>
                        <div className="media-video">
                            <video controls>
                                <source src="/videos/video1.mp4" type="video/mp4" />
                            </video>
                            <video controls>
                                <source src="/videos/video2.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>

                </div>

                {/* PDF BLOCK */}
                <div className="project-pdf-box">
                    <h3>Research Publication</h3>

                    <iframe
                        src="/pdfs/Employability_Skills_Research_Publication.pdf"
                        className="pdf-frame"
                    ></iframe>

                    <a
                        href="/pdfs/Employability_Skills_Research_Publication.pdf"
                        download
                        className="pdf-download"
                    >
                        Download PDF
                    </a>
                </div>

            </div>
        </section>
    );
}

export function Project3() {
    return (
        <section className="project-section">
            <div className="container">

                {/* OVERVIEW BLOCK */}
                <div className="project-overview">

                    {/* MAIN SECTION HEADING */}
                    <h2 className="overview-heading">Overview</h2>

                    {/* PROJECT TITLE SECTION */}
                    <div className="overview-block project-title-block">
                        <h3>Project Title</h3>
                        <p><strong>Co-Scholastic Competency Enhancement Program (CCEP)</strong></p>
                    </div>

                    {/* 2-COLUMN GRID */}
                    <div className="overview-grid">

                        {/* COLUMN 1 */}
                        <div className="overview-column">

                            <div className="overview-block">
                                <h3>Policy Relevance</h3>
                                <ul>
                                    <li>National Education Policy (NEP) 2020</li>
                                    <li>Samagra Shiksha — Framework for Implementation</li>
                                    <li>Competency-Based Learning</li>
                                    <li>Experiential & Multilingual Learning</li>
                                    <li>Art-Integrated Pedagogy</li>
                                </ul>
                            </div>

                            <div className="overview-block">
                                <h3>Project Validity</h3>
                                <ul>
                                    <li>Approved by Samagra Shiksha, Govt. of Telangana</li>
                                    <li>Contextualized by SCERT Telangana</li>
                                    <li>Funded under CSR by TGTS</li>
                                </ul>
                            </div>

                            <div className="overview-block">
                                <h3>Implementing Agency</h3>
                                <p>The Brigade Educational Trust, Hyderabad</p>
                            </div>

                        </div>

                        {/* COLUMN 2 */}
                        <div className="overview-column">

                            <div className="overview-block">
                                <h3>Target Schools</h3>
                                <p>10 Government Schools as per allotment in 08 Mandals of Vikarabad District on a pilot basis</p>
                            </div>

                            <div className="overview-block">
                                <h3>Target Beneficiaries</h3>
                                <p>@Eighty (80) Students per school for a total of 800 students</p>
                            </div>

                            <div className="overview-block">
                                <h3>Training Commencement & Closure Dates</h3>
                                <p>27 February 2023 – 24 August 2023</p>
                            </div>

                            <div className="overview-block">
                                <h3>Expertise Involved</h3>
                                <p>Professors from CuH, EFLU, OU, BRAOU, NIRDP&R, UNESCO & Independent professionals</p>
                            </div>

                            <div className="overview-block">
                                <h3>Aim</h3>
                                <ul>
                                    <li>To enhance Learner Participation (LP) in the education process</li>
                                    <li>To establish and enhance students' co-scholastic competencies along with its corresponding competencies</li>
                                    <li>To support, promote and document-merits, importance and contribution of Government schools in Telangana</li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>

                {/* IMAGE + VIDEO SECTION */}
                <div className="project-media">
                    {/* LEFT SIDE IMAGES */}
                    <div className="media-section">
                        <h2 className="overview-heading">Images</h2>
                        <div className="media-images">
                            <img src="/images/ccep1.jpg" alt="CCEP" />
                            <img src="/images/ccep2.jpg" alt="CCEP" />
                            <img src="/images/ccep3.jpg" alt="CCEP" />
                            <img src="/images/ccep4.jpg" alt="CCEP" />
                            <img src="/images/ccep5.jpg" alt="CCEP" />
                            <img src="/images/ccep6.jpg" alt="CCEP" />
                        </div>
                    </div>

                    {/* RIGHT SIDE VIDEO */}
                    <div className="media-section">
                        <h2 className="overview-heading">Videos</h2>
                        <div className="media-video">
                            <video controls>
                                <source src="/videos/video1.mp4" type="video/mp4" />
                            </video>
                            <video controls className="media-video-player">
                                <source src="/videos/video2.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>

                </div>

                {/* PDF BLOCK */}
                <div className="project-pdf-box">
                    <h3>Research Publication</h3>

                    <iframe
                        src="/pdfs/CCEP_Research_ Publication.pdf"
                        className="pdf-frame"
                    ></iframe>

                    <a href="/pdfs/CCEP_Research_ Publication.pdf" download className="pdf-download">
                        Download PDF
                    </a>
                </div>

            </div>
        </section>
    );
}

export function Project4() {
    return (
        <section className="project-section">
            <div className="container">
                <h2>Project 4 Details Coming Soon...</h2>
            </div>
        </section>
    );
}
export function Project5() {
    return (
        <section className="project-section">
            <div className="container">
                <h2>Project 5 Details Coming Soon...</h2>
            </div>
        </section>
    );
}