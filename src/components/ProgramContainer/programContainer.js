import React from "react";
import ProgramCard from "../Program Card/programCard"
// TODO move this as a data source
const restartYouth = {
    programTitle: "Re:Start Youth",
    programSlogan: "Workshops to foster digital skills to resettled youth in France.",
    programShortText: "We create innovative educational environments to facilitate learning and take it as far as the learners want through their ideas and projects, involving the acquisition of technical and transversal habilities.  Participants learn about technology while being reflective on its usage and impact in society. ",
    programImage: "/img/restart-youth-300x300.jpg"

};

const reHacks = {
    programTitle: "Re:Hacks",
    programSlogan: "Hackathons creating projects and boosting transversal competencies",
    programShortText: "Re:Hacks are events which focus on developing ideas in order to solve social issues while also improving creativity, problem-solving, teamwork and empathy. Ideas are then further developed into business ventures, nonprofits or community services.",
    programImage: "/img/re-hacks-960x642.jpg"
};


export default () => (
    <div className="container" style={{marginTop: 50}}>
        <div className="tile is-ancestor">
            <div class="tile is-parent">
                <div className="tile is-child">
                    <ProgramCard {...restartYouth}/>
                </div>
                <div className="tile is-child">
                    <ProgramCard {...reHacks}/>
                </div>
            </div>
        </div>
    </div>
);

