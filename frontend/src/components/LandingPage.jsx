import React from "react";
import "./LandingPage.css";
import { useState, useEffect } from "react";
import logo from "../assets/logo.jpeg";
import smc1 from "../assets/smc1.jpeg";
import smc2 from "../assets/smc2.jpeg";
import smc3 from "../assets/smc3.jpeg";
import project21 from "../assets/project21.jpeg";
import project22 from "../assets/project22.jpeg";
import project23 from "../assets/project23.jpeg";
import project31 from "../assets/project31.jpeg";
import project32 from "../assets/project32.jpeg";
import project33 from "../assets/project33.jpeg";

import Founder from "./Founder"
import logo_1 from "../assets/logo_1111.png"
import logo_2 from "../assets/logo_22.png"
import defaultPhoto from "../assets/user.png"

import hanumanthaRao from "../assets/hanumanthrao.jpeg"
import charantej from "../assets/charantej.jpeg"
import rajeshwari from "../assets/Rajeshwari.jpeg"
import vasundhara from "../assets/vasundhara.jpeg"
import jaganmohanrao from "../assets/jaganmohanrao.jpeg"
import ksjyothi from "../assets/ksjyothi.jpeg"
import albharathi from "../assets/albharathi.jpeg"
import vsssaikishna from "../assets/vsssaikrishna.jpeg"
import kvatriya from "../assets/kvatriya.jpeg"
import pmlakshmi from "../assets/pmlakshmi.jpeg"
import saikanthrao from "../assets/saikantharao.jpeg"
import radhakrishna from "../assets/radhakrishna.jpeg"
import tnr from "../assets/tnr.jpeg"

import { Project1, Project2, Project3, Project4, Project5 } from "./ProjectPublications";
import Compliance from "./Compliance";
import Introduction from "./Introduction";
import Invitation from "./Invitation";
import { ARCMembers, FITMembers } from "./PastMembers";
import CurrentMembers from "./CurrentMembers";
import fbIcon from "../assets//facebook.png";
import instaIcon from "../assets/instagram.png";
import linkedinIcon from "../assets/linkedin.png";
import twitterIcon from "../assets/twitter.png";
import ContactModal from "./ContactModal";
import youtubeIcon from "../assets/youtube.png";

import splitImg1 from "../assets/ancient.jpeg";
import splitImg2 from "../assets/modern.jpeg";



export default function LandingPage() {
    const [currentPage, setCurrentPage] = useState("home");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [expandedMenus, setExpandedMenus] = useState({});

    const [vmContent, setVmContent] = useState({
        title: "Education guided by values and purpose",
        text: "Choose Vision or Mission to proceed."
    });

    const [fadingOut, setFadingOut] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const [showAssociatePanel, setShowAssociatePanel] = useState(false);

    const toggleSubmenu = (menuName) => {
        // Desktop lo click disable
        if (window.innerWidth > 900) return;

        setExpandedMenus(prev => ({
            ...prev,
            [menuName]: !prev[menuName]
        }));
    };

    const handleNavClick = (e, targetId) => {
        e.preventDefault();

        // Trigger fade out
        setFadingOut(true);

        // Wait for fade out, then scroll and fade in
        setTimeout(() => {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            setFadingOut(false);
        }, 300);
    };

    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { type: 'split', images: [splitImg1, splitImg2], texts: ['Ancient Education', 'Modern Education'], duration: 60000 },
        { type: 'image', images: [smc2], texts: ['Project-1 (SMC Training)'], duration: 15000 },
        { type: 'image', images: [smc3], texts: ['Project-1 (SMC Training)'], duration: 15000 },
        { type: 'image', images: [smc1], texts: ['Project-1 (SMC Training)'], duration: 15000 },
        { type: 'image', images: [project21], texts: ['Project-2 (ESEP)'], duration: 15000 },
        { type: 'image', images: [project22], texts: ['Project-2 (ESEP)'], duration: 15000 },
        { type: 'image', images: [project23], texts: ['Project-2 (ESEP)'], duration: 15000 },
        { type: 'image', images: [project31], texts: ['Project-3 (CCEP)'], duration: 15000 },
        { type: 'image', images: [project32], texts: ['Project-3 (CCEP)'], duration: 15000 },
        { type: 'image', images: [project33], texts: ['Project-3 (CCEP)'], duration: 15000 }
    ];
    const totalSlides = slides.length;

    // Auto-slide effect
    useEffect(() => {
        const currentDuration = slides[currentSlide].duration;

        const timeout = setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, currentDuration);

        return () => clearTimeout(timeout);
    }, [currentSlide, slides, totalSlides]);


    // Update carousel position
    useEffect(() => {
        const carousel = document.querySelector('.slides');
        if (carousel) {
            carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        // Update active dot
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }, [currentSlide]);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }

        return () => document.body.classList.remove('menu-open');
    }, [mobileMenuOpen]);

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };
    const teamData = [
        {
            mainSection: "TRUSTEES",
            members: [
                {
                    name: "K V Atriya",
                    details:
                        "MA; B Ed; PG Dip in IRPM; PG Dip in EPM; PG Dip in Journalism (Gold-Medalist)",
                    img: kvatriya,
                },
                {
                    name: "K S Jyothi",
                    details: "M Com; Diploma in Computer Accountancy (Statutory)",
                    img: ksjyothi,
                },
                {
                    name: "A L Bharathi",
                    details: "B Com – Administrator (Statutory)",
                    img: albharathi,
                },
            ],
        },

        {
            mainSection: "PLANNING, PROGRAMS & PROJECTS",
            subSections: [
                {
                    title: "Honorary Strategic Advisor",
                    members: [
                        {
                            name: "Shri VVSS Sai Krishna",
                            details:
                                "MA; Diploma in Electronics; Founder – Krishnapriya Foundation & Vedic Scholar-Indian Knowledge System",
                            img: vsssaikishna,
                        },
                    ],
                },
                {
                    title: "Honorary Civil Society Advisor",
                    members: [
                        {
                            name: "PM Lakshmi",
                            details: "MA Sociology; MA Social Work; PGDDCA",
                            img: pmlakshmi,
                        },
                    ],
                },
                {
                    title: "Honorary Education Practices Analyst",
                    members: [
                        {
                            name: "R V Hanumantha Rao",
                            details: "Independent Scholar",
                            img: hanumanthaRao,
                        },
                        {
                            name: "V Radhakrishna",
                            details: "Independent Scholar",
                            img: radhakrishna,
                        },
                        {
                            name: "Dr K Jagan Mohan Rao",
                            details: "PhD in English; M. Sc Psychology; LLB,(LLM)",
                            img: jaganmohanrao,
                        },
                        {
                            name: "Dr Vasundhara",
                            details: "MA (Education); PhD",
                            img: vasundhara,
                        },
                        {
                            name: "Dr. Sai Kantha Rao",
                            details: "MA., PhD-Sathya Sai  Philosophy",
                            img: saikanthrao,
                        },
                    ],
                },
                {
                    title: "HR & Administration",
                    members: [
                        {
                            name: "N Charan Tej",
                            details: "BSc; MBA (HR-Marketing)",
                            img: charantej,
                        },
                    ],
                },
                {
                    title: "Stakeholder Engagement",
                    members: [
                        {
                            name: "V Rajeshwari",
                            details: "B Com; Certified Professional",
                            img: rajeshwari,
                        },
                    ],
                },
                {
                    title: "Technology Integration",
                    members: [
                        {
                            name: "TNR Koushik",
                            details: " B.E (ECE with Minors in AI & ML);Diploma in ECE;",
                            img: tnr,
                        },
                    ],
                },
            ],
        },
    ];


    const openPdf = (pdfName, mode = 'newtab') => {
        const pdfRelative = `/pdfs/${pdfName}`;
        if (mode === 'compliance') {

            localStorage.setItem('selectedPdf', pdfRelative);
            setCurrentPage('compliance');
        } else {
            const absoluteUrl = `${window.location.origin}${pdfRelative}`;
            window.open(`/pdf-viewer.html?file=${encodeURIComponent(absoluteUrl)}`, "brigade_pdf_viewer");
        }
    };

    return (
        <>
            <header className="top-header">
                <div className="top-header-inner container">
                    <div className="brand-left">
                        <img src={logo} alt="Trust Logo" className="cess-logo" />
                    </div>

                    <div className="trust-title-block center-title">
                        <h1 className="trust-title">THE BRIGADE EDUCATIONAL TRUST</h1>
                        <p className="trust-subtitle">We Steer Human Engineering Potential...</p>
                    </div>

                    <button id="hamburger" className="hamburger" aria-label="Toggle menu" onClick={() => setMobileMenuOpen(prev => !prev)}>☰</button>
                </div>
            </header>

            <nav className={"green-nav" + (mobileMenuOpen ? ' sidebar-open' : '')}>
                {mobileMenuOpen && (
                    <button
                        className="sidebar-close"
                        aria-label="Close menu"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        ✕
                    </button>
                )}
                <div className="container">
                    <ul className={"green-menu" + (mobileMenuOpen ? ' open' : '')} id="mainMenu">

                        <li className="menu-item">
                            <button className="menu-btn" onClick={() => { setCurrentPage("home"); setMobileMenuOpen(false); }}>Home</button>
                        </li>

                        <li className={"menu-item" + (expandedMenus.about ? ' open' : '')}>
                            <button className="menu-btn" onClick={() => toggleSubmenu('about')}>About ▼</button>
                            <ul className="submenu">
                                <li><a onClick={() => { setCurrentPage("founder"); setMobileMenuOpen(false); }}>Founder</a></li>
                                <li><a onClick={() => { setCurrentPage("team"); setMobileMenuOpen(false); }}>Core Team</a></li>
                                <li><a onClick={() => { setCurrentPage("vision"); setMobileMenuOpen(false); }}>Vision & Mission</a></li>
                                <li><a onClick={() => { setCurrentPage("objectives"); setMobileMenuOpen(false); }}>Aim & Objectives</a></li>
                            </ul>
                        </li>
                        <li className={"menu-item" + (expandedMenus.projects ? ' open' : '')}>
                            <button className="menu-btn" onClick={() => toggleSubmenu('projects')}>Projects & Publications ▼</button>
                            <ul className="submenu">
                                <li className={"has-sub" + (expandedMenus.project5 ? ' open' : '')}>
                                    <span onClick={() => { setCurrentPage("project5"); setMobileMenuOpen(false); }}>Project-5</span>
                                </li>

                                <li className={"has-sub" + (expandedMenus.project4 ? ' open' : '')}>
                                    <span onClick={() => { setCurrentPage("project4"); setMobileMenuOpen(false); }}>Project-4</span>
                                </li>

                                <li className={"has-sub" + (expandedMenus.project3 ? ' open' : '')}>
                                    <span onClick={() => toggleSubmenu('project3')} style={{ cursor: 'pointer' }}>Project-3 ▼</span>
                                    <ul className={"submenu" + (expandedMenus.project3 ? ' open force-open' : '')}>
                                        <li><a onClick={() => { setCurrentPage("project3"); setMobileMenuOpen(false); }}>Overview</a></li>
                                        <li><a onClick={() => { setCurrentPage("project3"); setMobileMenuOpen(false); }}>Gallery</a></li>
                                        <li><a onClick={() => { setCurrentPage("project3"); setMobileMenuOpen(false); }}>Publications</a></li>
                                    </ul>
                                </li>

                                <li className={"has-sub" + (expandedMenus.project2 ? ' open' : '')}>
                                    <span onClick={() => toggleSubmenu('project2')} style={{ cursor: 'pointer' }}>Project-2 ▼</span>
                                    <ul className={"submenu" + (expandedMenus.project2 ? ' open force-open' : '')}>
                                        <li><a onClick={() => { setCurrentPage("project2"); setMobileMenuOpen(false); }}>Overview</a></li>
                                        <li><a onClick={() => { setCurrentPage("project2"); setMobileMenuOpen(false); }}>Gallery</a></li>
                                        <li><a onClick={() => { setCurrentPage("project2"); setMobileMenuOpen(false); }}>Publications</a></li>
                                    </ul>
                                </li>

                                <li className={"has-sub" + (expandedMenus.project1 ? ' open' : '')}>
                                    <span onClick={() => toggleSubmenu('project1')} style={{ cursor: 'pointer' }}>Project-1 ▼</span>
                                    <ul className={"submenu" + (expandedMenus.project1 ? ' open force-open' : '')}>
                                        <li><a onClick={() => { setCurrentPage("project1"); setMobileMenuOpen(false); }}>Overview</a></li>
                                        <li><a onClick={() => { setCurrentPage("project1"); setMobileMenuOpen(false); }}>Gallery</a></li>
                                        <li><a onClick={() => { setCurrentPage("project1"); setMobileMenuOpen(false); }}>Publications</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className={"menu-item policy-item" + (expandedMenus.policy ? ' open' : '')}>
                            <button className="menu-btn" onClick={() => toggleSubmenu('policy')}>Principles, Practices & Policy ▼</button>
                            <ul className="submenu">
                                <li><a onClick={() => { setCurrentPage("introduction"); setMobileMenuOpen(false); }}>Introduction</a></li>
                                <li><a onClick={() => { setCurrentPage("invitation"); setMobileMenuOpen(false); }}>Invitation</a></li>

                                <li className={"has-sub" + (expandedMenus.pastMembers ? ' open' : '')}>
                                    <span onClick={(e) => { e.stopPropagation(); toggleSubmenu('pastMembers'); }} style={{ cursor: 'pointer' }}>Previous Resource Team ▼</span>
                                    <ul className={"submenu" + (expandedMenus.pastMembers ? ' open force-open' : '')}>
                                        <li><a onClick={() => { setCurrentPage("arc"); setMobileMenuOpen(false); }}>Academic Resource Council (ARC)</a></li>
                                        <li><a onClick={() => { setCurrentPage("fit"); setMobileMenuOpen(false); }}>Field Implementation Team (FIT)</a></li>
                                    </ul>
                                </li>

                                <li className={"has-sub" + (expandedMenus.currentMembers ? ' open' : '')}>
                                    <span onClick={(e) => { e.stopPropagation(); toggleSubmenu('currentMembers'); }} style={{ cursor: 'pointer' }}>Current Resource Team ▼</span>
                                    <ul className={"submenu" + (expandedMenus.currentMembers ? ' open force-open' : '')}>
                                        {/* ARC with nested sub-items */}
                                        <li className={"has-sub" + (expandedMenus.currentMembersArc ? ' open' : '')}>
                                            <span onClick={(e) => { e.stopPropagation(); toggleSubmenu('currentMembersArc'); }} style={{ cursor: 'pointer' }}>Academic Resource Council (ARC) ▼</span>
                                            <ul className={"submenu" + (expandedMenus.currentMembersArc ? ' open force-open' : '')}>
                                                <li>
                                                    <a onClick={() => { setCurrentPage("arc-fundamental"); setMobileMenuOpen(false); }}>
                                                        Fundamental & General Pedagogy
                                                    </a>
                                                </li>
                                                <li>
                                                    <a onClick={() => { setCurrentPage("arc-discipline"); setMobileMenuOpen(false); }}>
                                                        Discipline-Specific Pedagogy
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        {/* FIT remains a single link */}
                                        <li className="has-sub">
                                            <a onClick={() => { setCurrentPage("currentfit"); setMobileMenuOpen(false); }}>Field Implementation Team (FIT)</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className={"menu-item compliance-menu" + (expandedMenus.compliance ? ' open' : '')}>
                            <button className="menu-btn" onClick={() => toggleSubmenu('compliance')}>Compliance ▼</button>

                            {/* LEVEL 1 */}
                            <ul className="dropdown lvl1">

                                {/* AUDIT REPORTS */}
                                <li className={"has-sub" + (expandedMenus.statutory ? ' open' : '')}>
                                    <span onClick={() => toggleSubmenu('statutory')}>Statutory Documents ▼</span>

                                    {/* LEVEL 2 */}
                                    <ul className="dropdown lvl2">
                                        <li onClick={() => openPdf("statutory_doc_3.pdf", 'newtab')}>12A, IT Dept., GoI</li>
                                        <li onClick={() => openPdf("statutory_doc_2.pdf", 'newtab')}>80G, IT Dept., GoI</li>
                                        <li onClick={() => openPdf("statutory_doc_1.pdf", 'newtab')}>Approval Letter form CSR1,Min.Of Corp.Affiars,GoI</li>
                                        <li onClick={() => openPdf("statutory_doc_4.pdf", 'newtab')}>Darpan Regn, Neeti Ayog, GoI</li>
                                    </ul>
                                </li>

                                {/* FINANCIAL DOCUMENTS */}
                                <li className={"has-sub" + (expandedMenus.financial ? ' open' : '')}>
                                    <span onClick={() => toggleSubmenu('financial')}>Financial Documents ▼</span>

                                    {/* LEVEL 2 */}
                                    <ul className="dropdown lvl2">
                                        <li onClick={() => openPdf("audit_report_2019-2020.pdf", 'newtab')}>Audit Report 2019–2020</li>
                                        <li onClick={() => openPdf("audit_report_2020-2021.pdf", 'newtab')}>Audit Report 2020–2021</li>
                                        <li onClick={() => openPdf("audit_report_2021-2022.pdf", 'newtab')}>Audit Report 2021–2022</li>
                                        <li onClick={() => openPdf("audit_report_2022-2023.pdf", 'newtab')}>Audit Report 2022–2023</li>
                                        <li onClick={() => openPdf("audit_report_2023-2024.pdf", 'newtab')}>Audit Report 2023–2024</li>
                                        <li onClick={() => openPdf("audit_report_2024-2025.pdf", 'newtab')}>Audit Report 2024–2025</li>
                                    </ul>
                                </li>

                            </ul>
                        </li>

                        <li className="menu-item">
                            <button className="menu-btn" onClick={() => { setCurrentPage("contact"); setMobileMenuOpen(false); }}>Contact Us</button>
                        </li>
                        <li className="menu-item">
                            <button
                                className="menu-btn associate-btn"
                                onClick={() => {
                                    window.open(
                                        "https://docs.google.com/forms/d/e/1FAIpQLScAmE-7ui3Dl7n7onQOdAX2vZl1R5V6y7S2wFC1ZDzUbs4_hA/viewform?usp=dialog",
                                        "_blank"
                                    );
                                }}
                            >
                                Associate With Us
                            </button>
                        </li>

                    </ul>
                </div>
            </nav>
            {mobileMenuOpen && <div className="menu-backdrop open" onClick={() => setMobileMenuOpen(false)}></div>}
            {currentPage === "home" && (
                <>
                    {/* HERO SLIDER */}
                    <section className="hero-carousel">
                        <div className="carousel container">
                            <div
                                className="slides"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {slides.map((slide, index) => (
                                    <div className="slide" key={index}>
                                        {slide.type === 'split' ? (
                                            <div className="split-slide">
                                                <div className="split-image-container">
                                                    <div className="split-image-left">
                                                        <img src={slide.images[0]} alt="Split Image 1" />
                                                        <div className="split-text-overlay">{slide.texts[0]}</div>
                                                    </div>
                                                    <div className="split-image-right">
                                                        <img src={slide.images[1]} alt="Split Image 2" />
                                                        <div className="split-text-overlay">{slide.texts[1]}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="image-slide">
                                                <img src={slide.images[0]} alt={slide.texts[0]} />
                                                <div className="image-text-overlay">{slide.texts[0]}</div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Carousel Arrows */}
                            <button className="carousel-arrow prev" onClick={handlePrevSlide}>❮</button>
                            <button className="carousel-arrow next" onClick={handleNextSlide}>❯</button>

                            {/* Carousel Indicators */}
                            <div className="carousel-indicators">
                                {slides.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                                        onClick={() => handleDotClick(index)}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="home-quote">
                        <p className="quote-text">
                            " if I were asked under what sky the human mind has fully developed... I should point to India."
                        </p>
                        <p className="quote-author">
                            — Max Müller, German Scholar
                        </p>
                    </section>

                    <section className="home-logos">
                        <h2 className="funding-agencies-heading">Funding Agencies</h2>

                        <div className="logos-grid">
                            <div className="logo-item">
                                <img src={logo_1} alt="NBL Logo" />
                                <p>NBL (NavaBharath Ltd)</p>
                            </div>

                            <div className="logo-item">
                                <img src={logo_2} alt="Telangana Technology Services Logo" />
                                <p>Telangana Technology Services</p>
                            </div>
                        </div>
                    </section>


                    {/* FOOTER */}
                    <footer className="footer-section">

                        <div className="container footer-columns">
                            <div className="footer-branding-col">
                                <img src={logo} alt="Trust Logo" className="footer-logo" />
                                <h3>The Brigade Educational Trust</h3>
                                <p>We Steer Human Engineering Potential...</p>
                            </div>

                            <div className="footer-col">
                                <h4>About</h4>
                                <p onClick={() => setCurrentPage("founder")}>Founder</p>
                                <p onClick={() => setCurrentPage("team")}>Core Team</p>
                                <p onClick={() => setCurrentPage("vision")}>Vision & Mission</p>
                                <p onClick={() => setCurrentPage("objectives")}>Aim & Objectives</p>
                            </div>

                            <div className="footer-col">
                                <h4>Projects & Publications</h4>
                                <p onClick={() => setCurrentPage("project5")}>Project-5</p>
                                <p onClick={() => setCurrentPage("project4")}>Project-4</p>
                                <p onClick={() => setCurrentPage("project3")}>Project-3</p>
                                <p onClick={() => setCurrentPage("project2")}>Project-2</p>
                                <p onClick={() => setCurrentPage("project1")}>Project-1</p>
                            </div>

                            <div className="footer-col">
                                <h4>Principles, Practices & Policy</h4>

                                <p onClick={() => setCurrentPage("introduction")}>Introduction</p>
                                <p onClick={() => setCurrentPage("invitation")}>Invitation</p>

                                {/* Previous Resource Team */}
                                <p className="footer-parent">Previous Resource Team</p>
                                <p className="footer-sub" onClick={() => setCurrentPage("arc")}>
                                    Academic Resource Council (ARC)
                                </p>
                                <p className="footer-sub" onClick={() => setCurrentPage("fit")}>
                                    Field Implementation Team (FIT)
                                </p>

                                {/* Current Resource Team */}
                                <p className="footer-parent">Current Resource Team</p>

                                <p className="footer-sub footer-sub-parent">
                                    Academic Resource Council (ARC)
                                </p>
                                <p
                                    className="footer-sub footer-sub-child"
                                    onClick={() => setCurrentPage("arc-fundamental")}
                                >
                                    Fundamental & General Pedagogy
                                </p>
                                <p
                                    className="footer-sub footer-sub-child"
                                    onClick={() => setCurrentPage("arc-discipline")}
                                >
                                    Discipline-Specific Pedagogy
                                </p>

                                <p
                                    className="footer-sub footer-sub-parent"
                                    onClick={() => setCurrentPage("currentfit")}
                                >
                                    Field Implementation Team (FIT)
                                </p>
                            </div>

                            <div className="footer-col">
                                <h4>Contact</h4>
                                <p onClick={() => window.location.href = "mailto:contact@example.com"}>Email: thebrigadetrust@gmail.com</p>
                                <p onClick={() => window.location.href = "tel:+919876543210"}>Phone: +91 95158 54020</p>
                                <p>Hyderabad, Telangana</p>
                            </div>

                        </div>

                        {/* ROW 3 — BOTTOM BAR */}
                        <div className="footer-bottom">

                            <div className="footer-bottom-left">
                                <p>© 2024 The Brigade Educational Trust</p>
                                <p>Terms</p>
                                <p>Privacy</p>
                            </div>

                            <div className="footer-bottom-right">
                                <a href="https://facebook.com" target="_blank">
                                    <img src={fbIcon} alt="Facebook" className="social-icon facebook" />
                                </a>
                                <a href="https://www.instagram.com/brieducation_2019/" target="_blank">
                                    <img src={instaIcon} alt="Instagram" className="social-icon instagram" />
                                </a>
                                <a href="https://www.linkedin.com/company/the-brigade-educational-trust/about/" target="_blank">
                                    <img src={linkedinIcon} alt="LinkedIn" className="social-icon linkedin" />
                                </a>
                                <a href="https://x.com/brieducati15409" target="_blank">
                                    <img src={twitterIcon} alt="Twitter" className="social-icon twitter" />
                                </a>
                                <a href="https://www.youtube.com/@BrigadeEducationalTrust" target="_blank">
                                    <img src={youtubeIcon} alt="YouTube" className="social-icon youtube" />
                                </a>
                            </div>

                        </div>
                    </footer>
                </>
            )}

            {/* ====================== */}
            {/* FOUNDER PAGE          */}
            {/* ====================== */}
            {currentPage === "founder" && (
                <Founder></Founder>
            )}

            {/* ====================== */}
            {/* TEAM PAGE             */}
            {/* ====================== */}
            {currentPage === "team" && (
                <section className="team-section">
                    <div className="container">
                        {teamData.map((section, sIdx) => (
                            <div className="team-section-block" key={sIdx}>
                                <h2 className="team-main-heading">{section.mainSection}</h2>
                                {section.members && (
                                    <div className="team-members-grid">
                                        {section.members.map((m, idx) => (
                                            <div className="flip-card" key={idx}>
                                                <div className="flip-card-inner">
                                                    <div className="flip-card-front">
                                                        <img src={m.img || defaultPhoto} alt={m.name} />
                                                        <h3>{m.name}</h3>
                                                    </div>
                                                    <div className="flip-card-back">
                                                        <h3>{m.name}</h3>
                                                        <p>{m.details}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {section.subSections && section.subSections.map((sub, subIdx) => (
                                    <div className="team-subsection" key={subIdx}>
                                        <h3 className="subsection-title">{sub.title}</h3>
                                        <div className="team-members-grid">
                                            {sub.members.map((m2, j) => (
                                                <div className="flip-card" key={j}>
                                                    <div className="flip-card-inner">
                                                        <div className="flip-card-front">
                                                            <img src={m2.img || defaultPhoto} alt={m2.name} />
                                                            <h3>{m2.name}</h3>
                                                        </div>
                                                        <div className="flip-card-back">
                                                            <h3>{m2.name}</h3>
                                                            <p>{m2.details}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </section>
            )}
            {/* ====================== */}
            {/* VISION & MISSION PAGE */}
            {/* ====================== */}
            {currentPage === "vision" && (
                <section className="vision-section">
                    <div className="container vision-two-column">

                        <div className="vision-box">
                            <h2>VISION</h2>
                            <p>
                                To emerge as a premier think-tank in thought & action leadership in Fundamental & Applied Research in India’s education landscape delivering dynamic advisory and service, inputs for policy-corroboration, advancing deeper inquiry into the principles and practices of Fundamental, General & Discipline-specific pedagogy, instructional strategies and methods applicable from school education to higher education to address learning-crisis and low graduate employment by recognizing potential, elevating standards and strengthening the public education system to be able to compete and excel among the best institutions in the world.
                            </p>
                        </div>

                        <div className="vision-box">
                            <h2>MISSION</h2>
                            <p>
                                To research, recognize, develop and promote effective, evidence-based pedagogical practices, instructional strategies & methods for school and higher education, aiming to mitigate learning crisis and low graduate employment by drafting and designing initiatives-programs and projects based on policy-in-vogue; carry out field studies; validating findings through publication; enabling the inter-functioning of principles, practices and policy and generating cohesive synthesis by collaborating with scholars working at different echelons, other stakeholders and through people’s participation and contribution to it.
                            </p>
                        </div>

                    </div>
                </section>
            )}

            {/* ====================== */}
            {/* OBJECTIVES PAGE       */}
            {/* ====================== */}
            {currentPage === "objectives" && (
                <section className="objectives-section">
                    <div className="container">
                        <h2>Aim</h2>
                        <p>To mitigate key challenges of learning crisis in school education and its likely cascading effect on low graduate employment in higher education by Fundamental & Applied Research, strengthening the inter-connection of principles, practices & policy, based on evidence-based pedagogical practices, instructional strategies and methods- their recognition, development, and promotion thus contribute to public education system.</p>
                        <h2> Objectives</h2>
                        <ul>
                            <li>To identify effective pedagogical practices, instructional strategies and methods across schools and higher education</li>
                            <li>To analyze and recognize existing result-oriented pedagogical practices, instructional strategies and methods </li>
                            <li>To include, develop, innovate and introduce new and more pedagogical practices, instructional strategies and methods</li>
                            <li>To pilot such pedagogical practices, instructional strategies and methods in selected institutions to evaluate their efficacy in enhancing learning outcomes and graduate employment</li>
                            <li>To generate evidence and outcome of successful pedagogical practices, instructional strategies and methods as learning models</li>
                            <li>To utilize effective learning models for capacity-building of educators and institutions</li>
                            <li>To disseminate and showcase learning models to stakeholders and communities for purposeful engazement </li>
                        </ul>
                    </div>
                </section>
            )}

            {currentPage === "introduction" && (
                <Introduction />
            )}

            {currentPage === "invitation" && (
                <Invitation onAssociate={() => {
                    if (typeof window !== 'undefined' && window.innerWidth <= 900) {
                        setShowAssociatePanel(false);
                    } else {
                        setShowAssociatePanel(true);
                    }
                }} />
            )}


            {showAssociatePanel && (
                <section className="associate-panel">
                    <div className="container associate-inner">
                        <div className="associate-left">
                            <Invitation onAssociate={() => { }} />
                        </div>
                        <div className="associate-right">
                            <Invitation onAssociate={() => { }} />
                        </div>
                        <button className="associate-close" onClick={() => setShowAssociatePanel(false)}>Close</button>
                    </div>
                </section>
            )}
            {currentPage === "join" && (
                <section className="join-page-section">
                    <div className="container">
                        <Invitation onAssociate={() => { }} />
                    </div>
                </section>
            )}
            {currentPage === "arc" && <ARCMembers />}
            {currentPage === "fit" && <FITMembers />}

            {currentPage === "arc-fundamental" && <CurrentMembers sub={"fundamental"} />}
            {currentPage === "arc-discipline" && <CurrentMembers sub={"discipline"} />}
            {currentPage === "currentfit" && <CurrentMembers sub={"currentfit"} />}

            {currentPage === "project1" && <Project1 />}
            {currentPage === "project2" && <Project2 />}
            {currentPage === "project3" && <Project3 />}
            {currentPage === "project4" && <Project4 />}
            {currentPage === "project5" && <Project5 />}

            {currentPage === "compliance" && <Compliance />}
            {currentPage === "contact" && <ContactModal />}

        </>
    );
}
