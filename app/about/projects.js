import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import TaskTrackerImage from "./task-tracker.png";

const projects = [{
    title: "It's a task tracker web app, users can signup using their google account and manage their tasks.",
    github: "https://github.com/himanu/Task-Tracker-React",
    liveDemo: "https://track-tasks-12.netlify.app/"
}, {
    title: "It's a task tracker web app, users can signup using their google account and manage their tasks.",
    github: "https://github.com/himanu/Task-Tracker-React",
    liveDemo: "https://track-tasks-12.netlify.app/"
}];

export default function Projects() {
    return (
        <div className="mt-20">
            <div className="text-xl underline underline-offset-8">
                Projects
            </div>

            <div className="mt-4 mb-6 pt-6 flex overflow-hidden">
                <div className="flex-col sm:flex-row flex gap-10 shrink-0 w-full">
                    <Image
                        src={TaskTrackerImage}
                        alt="task"
                        objectFit="contain"
                    />
                    <div className="flex flex-col gap-2">
                        <div>
                            <div className="font-semibold">
                                Overview
                            </div>
                            <div className="text-slate-400">
                                {"It's"} a task tracker web app, users can signup using their google account and manage their tasks.
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold">
                                Links
                            </div>
                            <div className="text-white text-lg py-3 flex gap-5">
                                <Link href="https://github.com/himanu/Task-Tracker-React">
                                    <FaGithub />
                                </Link>
                                <Link href="https://track-tasks-12.netlify.app/" className="hover:text-slate-300 text-sm text-slate-400 underline underline-offset-1"
                                    target="_blank"
                                >
                                    Live Demo
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-col sm:flex-row flex gap-10 shrink-0 w-full">
                    <Image
                        src={TaskTrackerImage}
                        alt="task"
                        objectFit="contain"
                    />
                    <div className="flex flex-col gap-2">
                        <div>
                            <div className="font-semibold">
                                Overview
                            </div>
                            <div className="text-slate-400">
                                {"It's"} a task tracker web app, users can signup using their google account and manage their tasks.
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold">
                                Links
                            </div>
                            <div className="text-white text-lg py-3 flex gap-5">
                                <Link href="https://github.com/himanu/Task-Tracker-React">
                                    <FaGithub />
                                </Link>
                                <Link href="https://track-tasks-12.netlify.app/" className="hover:text-slate-300 text-sm text-slate-400 underline underline-offset-1"
                                    target="_blank"
                                >
                                    Live Demo
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};