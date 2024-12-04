'use client'

import { Button } from "../../components/ui/button";
import { api } from "../../convex/_generated/api";
import { UserButton, useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { useEffect } from "react";

const HomePage = () => {
  const { user } = useUser();
  const createuser = useMutation(api.user.createuser);

  useEffect(() => {
    user && CheckUser();
  }, [user]);

  const CheckUser = async () => {
    const result = await createuser({
      email: user?.primaryEmailAddress?.emailAddress,
      imageURl: user?.imageUrl,
      userName: user?.fullName
    });

    console.log(result);
  };

  return (
    <div>
      {/* Nav and Hero Section */}
      <div>
        <div>
          <div className="px-5">
            <nav className="z-10 w-full">
              <div>
                <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
                  <input aria-hidden="true" type="checkbox" id="toggle_nav" className="hidden peer" name="toggle_nav" />
                  <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
                    <img alt="logo" loading="lazy" width="150" height="110" decoding="async" src="/logo.svg" style={{ color: "transparent" }} />
                    <div className="relative flex items-center lg:hidden max-h-10">
                      <label role="button" htmlFor="toggle_nav" aria-label="hamburger" id="hamburger" className="relative p-6 -mr-6">
                        <div aria-hidden="true" id="line" className="m-auto h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"></div>
                        <div aria-hidden="true" id="line2" className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"></div>
                      </label>
                    </div>
                  </div>
                  <div aria-hidden="true" className="fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/70"></div>
                  <div className="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1 absolute top-full left-0 transition-all duration-300 scale-95 origin-top lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none dark:shadow-none dark:bg-gray-800 dark:border-gray-700">
                    <div className="text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0">
                      <ul className="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0">
                        <li><a href="/" className="block md:px-4 transition hover:text-primary"><span>Features</span></a></li>
                        <li><a href="/" className="block md:px-4 transition hover:text-primary"><span>Solution</span></a></li>
                        <li><a href="/" className="block md:px-4 transition hover:text-primary"><span>Testimonials</span></a></li>
                        <li><a href="#" className="block md:px-4 transition hover:text-primary"><span>Blog</span></a></li>
                      </ul>
                    </div>
                    <div className="mt-12 lg:mt-0">
                      <a href="/dashboard" className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                        <span className="relative text-sm font-semibold text-white">Get Started</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative" id="home">
          <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
            <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
          </div>
          <div>
            <div className="relative pt-36 ml-auto">
              <div className="lg:w-2/3 text-center mx-auto">
                <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
                  Simplify <span className="text-red-500">PDF</span> <span className="text-blue-500">Note</span>-Taking with AI-Powered
                </h1>
                <p className="mt-8 text-gray-700 dark:text-gray-300">
                  Elevate your note-taking experience with our AI-powered PDF app. Seamlessly extract key insights, summaries, and annotations from any PDF with just a few clicks
                </p>
                <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                  <a href="/dashboard" className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                    <span className="relative text-base font-semibold text-white">Get started</span>
                  </a>
                  <a href="#" className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max">
                    <span className="relative text-base font-semibold text-primary dark:text-white">Learn more</span>
                  </a>
                </div>
                <div className="hidden py-8 mt-16 border-y gap-x-10 border-gray-100 dark:border-gray-800 sm:flex justify-between">
  <div className="text-left">
    <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Completely free</h6>
    <p className="mt-2 text-gray-500">Enjoy unlimited PDF to notes conversion at no cost.</p>
  </div>
  <div className="text-left">
    <h6 className="text-lg font-semibold text-gray-700 dark:text-white">The fastest on the market</h6>
    <p className="mt-2 text-gray-500">Instantly convert your PDFs into concise notes with ease.</p>
  </div>
  <div className="text-left">
    <h6 className="text-lg font-semibold text-gray-700 dark:text-white">The most loved</h6>
    <p className="mt-2 text-gray-500">Hundreds of users trust us for quick, accurate note-taking.</p>
  </div>
</div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
