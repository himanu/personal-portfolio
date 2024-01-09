import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function BriefIntro() {
    return (
        <div >
            
            <div className="text-xl underline underline-offset-8" id="intro">
                Brief Intro
            </div>
            <Link href="https://drive.google.com/file/d/1V1S7wmoO42nmZLyIJSUvs1tOqrsuHpd5/view?usp=drive_link" target="_blank"
                className="mt-4 ml-4  text-sm text-slate-400 flex items-center gap-2 hover:text-white border-b"
                style={{
                    maxWidth: "fit-content"
                }}
            >
                <span> Resume </span>
                <FaExternalLinkAlt />
            </Link>
            <ul className="marker:text-grey-400 list-disc pl-5 space-y-3 text-slate-400 mb-6 pt-3">
                <li> Software Engineer with 2+ years of professional experience. </li>
                <li> Loves to learn and dive deep into technologies. </li>
                <li> Graduated in Computer Science from NIT Kurukshetra. </li>
            </ul>
            
        </div>
    )
};