




import React, {useState} from "react";
import {Document, Page, pdfjs} from 'react-pdf';
import MediaQuery from 'react-responsive';
import "../styles/docs_page.css";
pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';


export default function Docs(props){
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1); // set to 1 to show first (and only) page

    function onDocumentLoadSuccess({ numPages }){
        setNumPages(numPages);
        setPageNumber(1);
    }

    const {pdf} = props;

    return (
        < div className="d_container">
            <div className="d_title">{props.my_title}</div>

            <Document
                className="d_pdf_doc"
                file={pdf}
                options={{ workerSrc: "/pdf.worker.min.js" }}
                onLoadSuccess={onDocumentLoadSuccess} >
                <MediaQuery maxWidth={829.99}>
                    <Page pageNumber={pageNumber} className="d_pdf_page" width={280} />
                </MediaQuery>
                <MediaQuery minWidth={830}>
                    <Page pageNumber={pageNumber} className="d_pdf_page" width={700} />
                </MediaQuery>
            </Document>

        </div>
    )
}






