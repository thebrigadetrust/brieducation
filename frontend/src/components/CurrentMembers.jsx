import React from "react";
import "./CurrentMembers.css";
import defaultPhoto from "../assets/atriya.jpg";

/* -------------------------------------------------
   SHARED LAYOUT
-------------------------------------------------- */
function MembersLayout({ title, sections, members, basePath }) {
  // Accept either grouped `sections` (array of {section, folder, members})
  // or a flat `members` array. If `sections` is not provided, create a
  // single anonymous group from `members` so the rendering code can be unified.
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
                // Resolve image source:
                // - If m.img is falsy -> use bundled defaultPhoto
                // - If m.img is a string and absolute -> use it directly
                // - If m.img is a string and contains a subpath (e.g. "folder/name.jpg") -> prepend basePath
                // - If m.img is a simple filename and the group has a folder -> prepend basePath/group.folder
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
                    // m.img might be an imported module (resolved to a URL) - use it directly
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
    { name: "Member 1", details: "Pedagogy Specialist", img: "general-pedagogy/1.jpg" },
    { name: "Member 2", details: "Pedagogy Specialist", img: "general-pedagogy/2.jpg" },
    { name: "Member 3", details: "Assessment Expert", img: "assessment/1.jpg" },
    { name: "Member 4", details: "Curriculum Expert", img: "curriculum/1.jpg" },
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
    { name: "Math Member 1", details: "Math Expert", img: "mathematics/1.jpg" },
    { name: "Science Member 1", details: "Science Expert", img: "science/1.jpg" },
    { name: "Language Member 1", details: "Language Expert", img: "languages/1.jpg" },
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
    { name: "Trainer 1", details: "Community Trainer", img: "community-trainers/1.jpg" },
    { name: "Trainer 2", details: "Community Trainer", img: "community-trainers/2.jpg" },
    { name: "Coordinator 1", details: "School Coordinator", img: "school-coordinators/1.jpg" },
    { name: "M&E 1", details: "Monitoring Specialist", img: "m_and_e/1.jpg" },
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
