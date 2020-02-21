import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";

export default ({children}) => (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
);