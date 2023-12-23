"use client"
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { useState } from "react";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";

const projects = [{
    name: "Task-Tracker",
    title: "It's a task tracker web app, users can signup using their google account and manage their tasks.",
    github: "https://github.com/himanu/Task-Tracker-React",
    liveDemo: "https://track-tasks-12.netlify.app/",
    image: "/task-tracker.png"
}, {
    name: "Codename",
    title: "Codename is a game played between two teams each having atleast two member. Each team have a master member who will give clues to his fellow members so that they can select correct word in matrix.",
    github: "https://github.com/himanu/codename",
    image: "/codename.jpeg",
}, {
    name: "Trivia",
    title: "Trivia is a quiz game played between two teams.",
    github: "https://github.com/himanu/trivia",
    image: "/trivia.jpeg",
}, {
    name: "Conor Mcgregor Website",
    title: "Build a replica of Conor mcgregor website",
    github: "https://github.com/himanu/ConorMcgregor",
    image: "/conor.png",
    liveDemo: "https://conormcgregorofficial.herokuapp.com/"
}, 
    {
        name: "Chat App",
        title: "Built a chat web app",
        github: "https://github.com/himanu/chat-app",
        image: "/chat-app.png",
        liveDemo: "https://make-connection.herokuapp.com/"
    }
];

export default function Projects() {
    const [projectIndex, setProjectIndex] = useState(0);

    const moveLeft = () =>
        setProjectIndex((projectIndex) => projectIndex === 0 ? projects.length - 1 : projectIndex - 1);

    const moveRight = () =>
        setProjectIndex((projectIndex) => projectIndex === projects.length - 1 ? 0 : projectIndex + 1);

    return (
        <div className="my-20 overflow-hidden relative">
            <div className="text-xl underline underline-offset-8">
                Projects
            </div>

            {/* Project list wrapper */}
            <div className="mt-4 mb-6 pt-6 flex"
                style={{
                    transform: `translateX(-${100 * projectIndex}%)`,
                    transition: "transform 0.25s ease-in-out 0.25s"
                }}
            >
                {/* // eslint-disable-next-line react/jsx-key */}
                {projects.map((project) => (
                    <div key={project.name} className="flex-col md:flex-row flex gap-10 shrink-0 w-full">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={project.image}
                            width={200}
                            height={100}
                            alt="task"
                            style={{
                                objectFit: "contain"
                            }}
                        />
                        <div className="flex flex-col gap-2">
                            <div>
                                <div className="font-semibold">
                                    {project.name}
                                </div>
                                <div className="text-slate-400">
                                    {project.title}
                                </div>
                            </div>
                            <div>
                                <div className="font-semibold">
                                    Links
                                </div>
                                <div className="text-white text-lg py-3 flex gap-5">
                                    {project.github && (
                                        <Link href={project.github} target="_blank">
                                            <FaGithub />
                                        </Link>
                                    )}
                                    {project.liveDemo && (
                                        <Link href={project.liveDemo}
                                            target="_blank"
                                            className="hover:text-slate-300 text-sm text-slate-400 underline underline-offset-1"
                                        >
                                            Live Demo
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Slide arrows */}
            <div className="flex justify-between items-center h-full w-full text-gray-500 text-xl top-0">
                <div className="cursor-pointer" onClick={moveLeft}> <FaCircleArrowLeft /> </div>
                <div className="flex gap-2">
                    {projects.map((_, index) => (
                        <div key={index} className="rounded-full h-3 w-3 cursor-pointer"
                            onClick={() => setProjectIndex(index)}
                            style={{
                                background: index === projectIndex ? "white" : "rgb(100 116 139);"
                            }}
                        ></div>
                    ))}
                </div>
                <div className="right-0 cursor-pointer" onClick={moveRight}> <FaCircleArrowRight /> </div>
            </div>
        </div>
    )
};
