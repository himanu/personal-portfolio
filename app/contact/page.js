import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { IoLogoMedium } from "react-icons/io5";

export default function Contact() {
    return (
        <div className="text-slate-400 flex flex-wrap justify-around h-[50vh] items-center">
            <div className="text-2xl hover:text-white">
                <Link href="https://www.linkedin.com/in/himanshu-yadav-7554161b2/" target="_blank" className="flex items-center gap-4">
                    <IoLogoLinkedin />
                    <span className="text-sm"> LinkedIn </span>
                </Link>
            </div>
            <div className="text-2xl hover:text-white">
                <Link href="mailto:message22himanshu@gmail.com" target="_blank" className="flex items-center gap-4">
                    <SiGmail />
                    <span className="text-sm"> Mail </span>
                </Link>
            </div>
            <div className="text-2xl hover:text-white">
                <Link href="https://twitter.com/Himansh45730152" target="_blank" className="flex items-center gap-4">
                    <FaTwitter />
                    <span className="text-sm"> Twitter </span>
                </Link>
            </div>
            <div className="text-2xl hover:text-white">
                <Link href="https://medium.com/@hy287719" target="_blank" className="flex items-center gap-4">
                    <IoLogoMedium />
                    <span className="text-sm"> Medium </span>
                </Link>
            </div>
        </div>
    )
};