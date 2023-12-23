import Link from "next/link";

const blogs = [{
    title: "Understand POS in Etherium 2.0",
    description: "Learn about Proof of Stake consensus mechanism in Etherium 2.0",
    url: "https://medium.com/@hy287719/understand-pos-in-etherium-2-0-f62b05c2829d"
}, {
        title: "MultiTasking Vs MultiThreading Vs MultiProcessing",
    description: "Learn differences between MultiTasking, MultiThreading and MultiProcessing",
    url: "https://medium.com/@hy287719/multitasking-vs-muiltthreading-vs-multiprocessing-e525dc456704"
    }, {
        title: "CAP theorem",
        description: "Understand significance of CAP Theorem in distributed system",
    url: "https://medium.com/@hy287719/what-is-the-cap-theorem-eb4385499035"
    }, {
        title: "Prototype Chaining in JS",
        description: "Learn about Prototype chaining and inheritance in javascript",
    url: "https://medium.com/@hy287719/understanding-prototype-chaining-in-javascript-1299a4341e16"
    }
]
export default function Blogs() {
    return (
        <div className="space-y">
            {blogs.map((blog) => (
                <div
                    key={blog.title}
                    style={{
                        background: "#141e30",  /* fallback for old browsers */
                        background: "linear-gradient(to right, #141e30, #243b55)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                    }}
                    className="py-2 px-4 mt-4"
                >
                    <Link href={blog.url} target="_blank">
                        <div className="text-xl font-bold">{blog.title}</div>
                        <div className="text-gray-500 mt-3"> {blog.description} </div>
                    </Link>
                </div>
            ))}
        </div>
    )
};