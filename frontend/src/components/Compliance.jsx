import React, { useState, useEffect } from "react";
import "./Compliance.css";

export default function Compliance() {
    const [selectedPdf, setSelectedPdf] = useState(
        localStorage.getItem("selectedPdf") || null
    );

    useEffect(() => {
        const pdf = localStorage.getItem("selectedPdf");
        if (pdf) setSelectedPdf(pdf);
    }, []);

    return (
        <section className="compliance-section">
            <div className="container">
                <h2 className="compliance-title">Compliance Documents</h2>

                <div className="compliance-viewer">
                    {!selectedPdf ? (
                        <p className="placeholder-text">Select a document from the menu.</p>
                    ) : (
                        <iframe title="Compliance Document" src={selectedPdf} className="pdf-viewer"></iframe>
                    )}
                </div>
            </div>
        </section>
    );
}
