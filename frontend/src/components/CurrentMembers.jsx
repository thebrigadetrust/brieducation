import React from "react";
import "./CurrentMembers.css";
import defaultPhoto from "../assets/user.png";

/* -------------------------------------------------
   SHARED LAYOUT
-------------------------------------------------- */
function MembersLayout({ title, sections, members, basePath }) {
  const groupsToRender = (sections && sections.length)
    ? sections
    : [{ section: null, folder: null, members: members || [] }];

  return (
    <section className="current-members-section">
      <div className="container">
        <h2 className="cm-heading">{title}</h2>

        {groupsToRender.map((group, groupIndex) => (
          <div className="dept-section" key={group.section || groupIndex}>
            {group.section && <h3 className="section-label">{group.section}</h3>}

            <div className="dept-members-grid">
              {group.members.map((m, i) => {
                let imgSrc = defaultPhoto;
                if (m && m.img) {
                  if (typeof m.img === 'string') {
                    const isAbsolute = m.img.startsWith('/') || m.img.startsWith('http');
                    if (isAbsolute) {
                      imgSrc = m.img;
                    } else if (m.img.includes('/')) {
                      imgSrc = `${basePath}/${m.img}`;
                    } else if (group && group.folder) {
                      imgSrc = `${basePath}/${group.folder}/${m.img}`;
                    } else {
                      imgSrc = `${basePath}/${m.img}`;
                    }
                  } else {
                    imgSrc = m.img;
                  }
                }

                return (
                  <div className="member-card" key={i}>
                    <div className="member-inner">
                      <div className="member-front">
                        <img
                          src={imgSrc}
                          alt={m.name}
                          className="member-img"
                          loading="lazy"
                          onError={(e) => {
                            // prevent infinite loop by clearing handler before swapping src
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = defaultPhoto;
                          }}
                        />
                      </div>

                      <div className="member-back">
                        <div className="member-back-content">
                          <p className="member-back-title">{m.name}</p>
                          <p className="member-back-details">{m.details}</p>
                        </div>
                      </div>
                    </div>

                    <h4 className="member-name">{m.name}</h4>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------
   FUNDAMENTAL & GENERAL PEDAGOGY
-------------------------------------------------- */
export function FundamentalPedagogyMembers() {
  // Flattened list (no sections) — images include folder paths relative to basePath
  const members = [
    { name: "Member 1", details: "Updating soon", img: "general-pedagogy/1.jpg" },
    { name: "Member 2", details: "Updating soon", img: "general-pedagogy/2.jpg" },
    { name: "Member 3", details: "Updating soon", img: "assessment/1.jpg" },
    { name: "Member 5", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 6", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 7", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 8", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 9", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 10", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 11", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 12", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 13", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 14", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 15", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 16", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 17", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 18", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 19", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 20", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 21", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 22", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 23", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 24", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 25", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 26", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 27", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 28", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 29", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 30", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 31", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 32", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 33", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 34", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 35", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 36", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 37", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 38", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 39", details: "Updating soon", img: "curriculum/1.jpg" },
    { name: "Member 40", details: "Updating soon", img: "curriculum/1.jpg" },
  ];

  return (
    <MembersLayout
      title="Fundamental & General Pedagogy"
      members={members}
      basePath="/members/fundamental"
    />
  );
}

/* -------------------------------------------------
   DISCIPLINE-SPECIFIC PEDAGOGY
-------------------------------------------------- */
export function DisciplinePedagogyMembers() {
  // Flattened list (no sections)
  const members = [
    { name: " Member 1", details: "Updating soon", img: "mathematics/1.jpg" },
    { name: " Member 2", details: "Updating soon", img: "science/1.jpg" },
    { name: " Member 3", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 4", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 5", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 6", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 7", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 8", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 9", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 10", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 11", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 12", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 13", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 14", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 15", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 16", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 17", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 18", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 19", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 20", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 21", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 22", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 23", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 24", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 25", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 26", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 27", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 28", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 29", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 30", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 31", details: "Updating soon", img: "languages/1.jpg" },
  ];

  return (
    <MembersLayout
      title="Discipline-Specific Pedagogy"
      members={members}
      basePath="/members/discipline"
    />
  );
}

/* -------------------------------------------------
   FIELD IMPLEMENTATION TEAM (FIT)
   These members expect images to live under: public/members/fit/<folder>/*.jpg
-------------------------------------------------- */
export function FITMembers() {
  const members = [
    { name: " Member 1", details: "Updating soon", img: "mathematics/1.jpg" },
    { name: " Member 2", details: "Updating soon", img: "science/1.jpg" },
    { name: " Member 3", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 4", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 5", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 6", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 7", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 8", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 9", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 10", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 11", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 12", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 13", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 14", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 15", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 16", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 17", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 18", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 19", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 20", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 21", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 22", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 23", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 24", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 25", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 26", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 27", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 28", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 29", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 30", details: "Updating soon", img: "languages/1.jpg" },
    { name: " Member 31", details: "Updating soon", img: "languages/1.jpg" },
    
  ];

  return (
    <MembersLayout
      title="Field Implementation Team (FIT)"
      members={members}
      basePath="/members"
    />
  );
}

export default function CurrentMembers({ sub = "fundamental", groups = null }) {
  if (sub === "discipline") {
    return <DisciplinePedagogyMembers />;
  }
  if (sub === "currentfit") {
    return <FITMembers />;
  }
  return <FundamentalPedagogyMembers />;
}
