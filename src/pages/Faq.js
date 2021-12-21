import React from 'react';
import Footer from "../components/Footer";
import DoctorsHeader from "../components/DoctorsPage";
import { homeObjFaq } from "../components/DoctorsPage/Data";

function Faq() {
    return (
        <>
            <DoctorsHeader {...homeObjFaq}/>
            <Footer />
        </>
    )
}

export default Faq;
