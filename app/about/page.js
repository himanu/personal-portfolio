const About = () => {
    return (
        <div >
            {/* Brief Intro */}
            <div className="divide-y">
                <div className="text-2xl">
                   Brief Intro 
                </div>
                <ul className="marker:text-grey-400 list-disc pl-5 space-y-3 text-slate-400 mt-4 mb-6 pt-6">
                    <li> Software Engineer with 2+ years of professional experience. </li>
                    <li> Curious and enthusiastic about new technology. </li>
                    <li> Graduated in Computer Science from NIT Kurukshetra. </li>
                </ul>
            </div>

            {/* Skills Section */}
            <div className="divide-y">
                <div className="text-2xl">
                    Skills
                </div>
                <div className="mt-4 mb-6 pt-6 text-white text-sm flex gap-1 flex-wrap">
                    <button className="px-3 py-1 bg-orange-400" >JS</button>
                    <button className="px-3 py-1 bg-sky-500" >ReactJS</button>
                    <button className="px-3 py-1 bg-black-400" >NextJS</button>
                    <button className="px-3 py-1 bg-violet-400" >NodeJS</button>
                    <button className="px-3 py-1 bg-rose-400" >Firebase</button>
                    <button className="px-3 py-1 bg-cyan-700" >Svelete</button>
                    <button className="px-3 py-1 bg-teal-800" >Jenkins</button>
                    <button className="px-3 py-1 bg-green-400" >RTL & Jest</button>
                    <button className="px-3 py-1 bg-yellow-900" >CSS</button>
                    <button className="px-3 py-1 bg-yellow-400" >PostgreSQL</button>
                    <button className="px-3 py-1 bg-red-900" >MongoDB </button>
                </div>
            </div>
        </div>
    )
};

export default About;