import React from "react";
import Header from "../Header/header";

export default ({children}) => (
    <div>
        <Header />
        {children}
    </div>
);