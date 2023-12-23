"use client"

import { useEffect, useState } from "react";

const useTypewriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState(' ');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prevText => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
}; 

const text = " A Software Engineer with 2+ years of professional experience building scalable and robust production-ready applications."
export default function Home() {
  const content = useTypewriter(text, 50)
  return (
    <main className="absolute top-0 flex min-h-screen flex-col justify-center">
      <div className='text-5xl'> Hii, I am Himanshu</div>
      <div className='mt-8 mr-4'>{content}</div>
    </main>
  )
}
