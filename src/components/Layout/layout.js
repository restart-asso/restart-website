import React from "react";
import SEO from "../SEO/seo";
import Header from "../Header/header";
import Footer from "../Footer/footer";

export default ({children}) => (
    <div>
        <SEO />
        <Header />
        {children}
        <Footer />
    </div>
);