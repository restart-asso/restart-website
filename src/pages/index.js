import React from "react";
import Layout from "../components/Layout/layout";
import ProgramContainer from "../components/ProgramContainer/programContainer"
import Hero from "../components/Hero/hero"
import '../assets/styles.scss';

const heroData = {
    slogan: "Dismantling Digital Divides",
    missionStatement: "By provding inclusive digital educational & social support to newcomers in France",
    heroImage: "/img/hero.jpg"
}

export default () => (
    <Layout>
    <div >
        <Hero {...heroData} /> 
        <ProgramContainer />
    </div>
    </Layout>
);