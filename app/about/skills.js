export default function Skills() {
    return (
        <div className="mt-20">
            <div className="text-xl underline underline-offset-8">
                Skills
            </div>
            <div className="mt-4 mb-6 pt-6 text-white text-sm flex gap-2 flex-wrap">
                <button className="px-3 py-1 bg-orange-400" >JS</button>
                <button className="px-3 py-1 bg-sky-500" >ReactJS</button>
                <button className="px-3 py-1 bg-black-400" >NextJS</button>
                <button className="px-3 py-1 bg-violet-400" >NodeJS</button>
                <button className="px-3 py-1 bg-rose-400" >Firebase</button>
                <button className="px-3 py-1 bg-cyan-700" >Svelte</button>
                <button className="px-3 py-1 bg-teal-800" >Jenkins</button>
                <button className="px-3 py-1 bg-green-400" >RTL & Jest</button>
                <button className="px-3 py-1 bg-yellow-900" >CSS</button>
                <button className="px-3 py-1 bg-yellow-400" >PostgreSQL</button>
                <button className="px-3 py-1 bg-red-900" >MongoDB </button>
            </div>
        </div>
    )
};