import Link from "next/link";
import BriefIntro from "./brief-intro";
import Skills from "./skills";
import Projects from "./projects";

const About = () => {
    return (
        <div >
            {/* Brief Intro */}
            <BriefIntro />

            {/* Skills Section */}
            <Skills />

            {/* Projects Section */}
            <Projects />
        </div>
    )
};

export default About;