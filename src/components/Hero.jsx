import React, { useContext } from "react";
import GithubSvg from "./svgs/GithubSvg";
import LinkedinSvg from "./svgs/LinkedinSvg";
import CVDownloadSvg from "./svgs/CVDownloadSvg";
import HeroProfileCard from "./subComponents/HeroProfileCard";
import { LanguageContext } from "./subComponents/LanguageContext";

const Hero = () => {
  const { languageData } = useContext(LanguageContext);

  return (
    <section id="about" className=" shadow-md shadow-oscure-primary-100">
      <div>
        <div className="flex items-center justify-center text-light-text-100 dark:text-oscure-text-100 p-5">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-10 md:px-10">
            <div>
              <h1 className="mb-2 text-3xl font-bold text-light-primary-200">
                <span className="text-light-accent-200 dark:text-light-accent-100">{languageData.abouthello} </span>{" "}
                {languageData.abouttitle}
              </h1>
              <p className="mb-6">
                {languageData.aboutdescription}
              </p>
              <div className="flex flex-wrap md:flex-nowrap gap-2 justify-center">
                <a
                href="http://github.com/RocketHz"
                target="_blank"
                rel="noopener noreferrer" 
                className="group-anchor flex w-full items-center justify-center gap-1 rounded-2xl bg-black hover:bg-gray-300 text-white hover:text-gray-950 dark:hover:text-black p-5 py-3 font-semibold dark:text-oscure-text-100 hover:dark:text-oscure-bg-100 hover:dark:bg-light-bg-100">
                  {languageData.aboutgithub}
                  <GithubSvg />
                </a>
                <a 
                href="/CV_RonniHernandez_FullStackSoftwareDeveloper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group-anchor flex w-full items-center justify-center gap-2 rounded-2xl bg-black hover:bg-gray-300 text-white hover:text-gray-950 dark:hover:text-black dark:text-oscure-text-100 hover:dark:text-oscure-bg-100 hover:dark:bg-light-bg-100 p-5 py-3 font-semibold">
                  {languageData.aboutcv}
                  <CVDownloadSvg />
                </a>
                <a
                  href="http://www.linkedin.com/in/ronni-hernandez-a9b3301b9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group-anchor flex w-full items-center justify-center gap-1 rounded-2xl bg-light-primary-300 p-5 py-3 font-semibold dark:text-oscure-text-100 text-oscure-text-100 hover:text-oscure-text-100 hover:bg-light-accent-200"
                >
                  {languageData.aboutlinkedin}
                  <LinkedinSvg />
                </a>
              </div>
            </div>
            <div className="flex justify-center">
                <HeroProfileCard/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
