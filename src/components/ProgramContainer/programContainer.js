import React from "react";
import ProgramCard from "../ProgramCard/programCard"

// TODO move this as a data source
const restartYouth = {
    programTitle: "Re:Start Youth",
    programSlogan: "Workshops to foster digital skills to resettled youth in France",
    programShortText: "We create innovative educational environments to facilitate learning and take it as far as the learners want through their ideas and projects, involving the acquisition of technical and transversal abilities.  Participants learn about technology while being reflective on its usage and impact in society."
};

const reHacks = {
    programTitle: "Re:Hacks",
    programSlogan: "Hackathons creating projects and boosting transversal competencies",
    programShortText: "Re:Hacks are events which focus on developing ideas in order to solve social issues while also improving creativity, problem-solving, teamwork and empathy. Ideas are then further developed into business ventures, nonprofits or community services."
};

export default ({imgData}) => (
    <div id="programs" className="container" style={{marginTop: 50}}>
        <div className="tile is-ancestor">
            <div class="tile is-parent">
                <div className="tile is-child">
                    <ProgramCard {...restartYouth} programImage={imgData.restartYouth}/>
                </div>
                <div className="tile is-child">
                    <ProgramCard {...reHacks} programImage={imgData.reHacks}/>
                </div>
            </div>
        </div>
    </div>
);