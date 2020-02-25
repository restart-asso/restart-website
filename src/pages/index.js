import React from "react";
import Layout from "../components/Layout/layout";
import ProgramContainer from "../components/ProgramContainer/programContainer"
import Hero from "../components/Hero/hero"
import About from "../components/About/about"
import Partners from "../components/Partners/partners"
import '../assets/styles.scss';

const heroData = {
    slogan: "Dismantling Digital Divides",
    missionStatement: "By providing inclusive digital educational & social support to newcomers in France",
    heroImage: "/img/hero.jpg"
};

const aboutData = {
    aboutTitle: "About us",
    aboutSubtitle: "Re:Start is an educational association that creates learning experiences and promotes inclusion in the digital economy",
    aboutText: "The Re:Start Association started as a project in 2017 hosted by the Center for Research & Interdisciplinary (CRI). Re:Start began its activity opening a space to refugees and asylum seekers to learn highly demanded skills in order to promote their inclusion into the tech industry. Currently, we're continuing to co-create opportunities with newcomers in France; holding workshops and events to build digital, transversal and social skills, while being creative, playful and reflective."
};

const teamMembersData = [
    {   
        name: "Pau Fabregat",
        image: "/img/pau-profile-pic.jpg",
        responsability: "Coordination & Pedagogy"
    },
    {   
        name: "Naiane Ribeiro",
        image: "/img/naiane-profile-pic.png",
        responsability: "Partnerships"
    },
    {   
        name: "Kelly Gibbs",
        image: "/img/kelly-profile-pic.jpg",
        responsability: "Communication"
    }
];

const partnersTitle = "Our Partners"
const partnersData = [
    {
        img: "/img/partners/cri-logo.jpg",
        name: "CRI",
        website: "https://cri-paris.org/"
    },
    {
        img: "/img/partners/techfugees-logo.jpg",
        name: "Techfugees",
        website: "https://techfugees.com/"
    }
];

export default () => (
    <Layout>
    <div >
        <Hero {...heroData} /> 
        <ProgramContainer />
        <About {...aboutData} teamMembers={teamMembersData}/>
        <Partners partnersTitle={partnersTitle} partners={partnersData}/>
    </div>
    </Layout>
);