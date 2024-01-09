import Link from "next/link";
import BriefIntro from "./brief-intro";
import Skills from "./skills";
import Projects from "./projects";
import { SiCodeforces, SiCodechef, SiLeetcode } from "react-icons/si";

const About = () => {
    return (
        <div >
            {/* Brief Intro */}
            <BriefIntro />

            {/* Skills Section */}
            <Skills />

            {/* Projects Section */}
            <Projects />

            <div className="mt-20">
                <div className="text-xl underline underline-offset-8" id="cp">
                    Competitive Programming Coding Portfolio
                </div>

                <div className="text-slate-400 flex flex-col sm:flex-row justify-around h-[50vh] items-center">
                    <div className="text-2xl hover:text-white">
                        <Link href="https://codeforces.com/profile/Himanshu_Yadav_1802" target="_blank" className="flex items-center gap-4">
                            <SiCodeforces />
                            <span className="text-sm"> Codeforces </span>
                        </Link>
                    </div>
                    <div className="text-2xl hover:text-white">
                        <Link href="https://www.codechef.com/users/himanuyadav123" target="_blank" className="flex items-center gap-4">
                            <SiCodechef />
                            <span className="text-sm"> Codechef </span>
                        </Link>
                    </div>
                    <div className="text-2xl hover:text-white">
                        <Link href="https://leetcode.com/HiiHimanshu/" target="_blank" className="flex items-center gap-4">
                            <SiLeetcode />
                            <span className="text-sm"> Leetcode </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;