import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

export default function PdfViewer() {
    const params = new URLSearchParams(window.location.search);
    const file = params.get("file");

    return (
        <div style={{ height: "100vh" }}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
                <Viewer fileUrl={file} />
            </Worker>
        </div>
    );
}
