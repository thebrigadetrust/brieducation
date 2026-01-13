import React from "react";
import "./Invitation.css";

export default function Invitation() {
  return (
    <section className="invitation-section">
      <div className="invitation-container">

        <div className="invitation-card">
          <div className="invitation-content">
            <h2 className="invitation-title">INVITATION</h2>

            <div className="invitation-text">

              <p>
                The Brigade Educational Trust is one of the premier think tanks dedicated to Fundamental & Applied Research on the Principles, Practices & Policy of Indian Education to mitigate key challenges of learning crisis in school education and its likely cascading effect on low graduate employment in higher education. In order to achieve this,<strong>contribution and participation of University-Departments of Education, IASE, NCERT, SCERTs, M Ed colleges, standalone research institutions, CSOs/NGOs, independent researchers and Discipline-specific professors and other resource persons in education are cordially invited  whose concerted efforts can make sustainable transformation in learning and teaching.</strong>
              </p>

              <p>
                The National Policy on Education (NEP) 2020 encourages school education and higher education should be seen as a single organic continuum is a welcome actionable thought.
              </p>

              <p>
                A child is admitted into Foundational Stage at the tender age of 03 yrs and obtains a Under-Graduation at the age of 21/22 yrs of age as per New Curricular Structure. This educational journey consisting of 18/19 yrs of learning as reported by many agencies suffer from learning crisis which at later stages turns out into low graduate employability due to a multiplicity of reasons. <strong>However, the reasons pertaining to pedagogical practices, instructional strategies and methods across school and higher education shall be the working focus area. </strong>
              </p>

              <p>
                In order to study and arrive at solutions, Pan-India ‘Strategic Dialogue Series in Learning-Teaching Advancement’ SDSLTA-PI shall be initiated open to representations from all stake-holders. After end of each session, document in the form of ‘Insights Notes’ shall be recorded and a series of these Insight Notes shall be developed as ‘Annual Cohesive Synthesis Report on Strategic Dialogue Series in Learning-Teaching Advancement ’ shall be published and submitted to Government.
              </p>

              <p>
                Current available studies, identification of deeper research areas, field-relevant research areas and encouraging action-research to benefit advancement of Learning-Teaching that which supplements and complements to enhanced learning outcomes and subsequently rises graduate employability constitutes the basis of this embedded democratic collaboration.
              </p>

              <p>
                <strong>
                  Let us engaze in introspection from education point of view from, Acharya Vinoba Bhave who called out, " आओ हम सब मिलकर विचारें, हम क्या थे, हम क्या हैं और हम क्या होंगे " Your experience, exposure and expertise may bring significant insights in emboldening the education ecosystem of India. We look forward to your participation in this purpose-driven collaboration in the SDSLTA-PI from time to time as and when notified on this website.
                </strong>
              </p>

              <div className="invitation-signature" style={{ textAlign: 'right', marginTop: '36px' }}>
                <div style={{ marginBottom: '12px' }}>K V Atriya</div>
                <div className="invitation-signature-title">Founder-The Brigade Educational Trust</div>
              </div>
            </div>
          </div>
        </div>
        <div className="invite-cta">
          <button
            className="associate-button"
            onClick={() => {
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLScAmE-7ui3Dl7n7onQOdAX2vZl1R5V6y7S2wFC1ZDzUbs4_hA/viewform?usp=dialog",
                "_blank"
              );
            }}
          >
            CLICK HERE TO ASSOCIATE
          </button>
        </div>

      </div>
    </section>
  );
}
