import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures/FeaturesComponent";

import { FaApple } from "react-icons/fa";
import { FcLinux } from "react-icons/fc"
import { AiFillWindows, AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { IconContext } from "react-icons";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <a
            className={styles.downloadButton}
            href="https://github.com/oslabs-beta/AthenaJS/releases/download/v1.0.0/athena_1.0.0_Mac.dmg"
            download=""
          >
            <FaApple />
          </a>
          <a
            className={styles.downloadButton}
            href="https://github.com/oslabs-beta/AthenaJS/releases/download/v1.0.0/athena_1.0.0_Win.exe"
            download=""
          >
            <AiFillWindows />
          </a>
          <a
            className={styles.downloadButton}
            href="https://github.com/oslabs-beta/AthenaJS/releases/download/v1.0.0/athena_1.0.0_Linux.AppImage"
            download=""
          >
            <FcLinux />
          </a>
        </div>
      </div>
    </header>
  );
}

const HomepageFooter = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <footer className='fullViewHeightFooter'>
      AthenaJS Core Team
      <div className='teamList'>
        <div className='teamMember'><div>Daniel Chang:</div><div><a href = '#'><AiFillGithub /></a><a href = '#'><AiFillLinkedin /></a></div></div>
        <div className='teamMember'><span>Christopher Long:</span><a href = '#'> <AiFillGithub /></a> <span> | </span> <a href = '#'> <AiFillLinkedin /></a></div>
        <div className='teamMember'><span>Derrick Oh:</span><a href = 'https://github.com/Igniphis'> <AiFillGithub /></a> <span> | </span> <a href = 'https://www.linkedin.com/in/derrick-oh-37a84a182/'> <AiFillLinkedin /></a></div>
        <div className='teamMember'><span>Matthew Fukudome:</span><a href = 'https://github.com/cvalong'><AiFillGithub /></a> <span> | </span> <a href = 'https://www.linkedin.com/in/cvalong/'> <AiFillLinkedin /></a></div>
        <div className='teamMember'>
          <span>Ryan Motamen:</span>
          <a href = 'https://github.com/ryanmotamen'> <AiFillGithub /></a> 
          <span> | </span> 
          <a href ='https://www.linkedin.com/in/ryan-motamen/' > <AiFillLinkedin /></a>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  const iconStyles = {
    size: "2rem",
  };

  return (
    <Layout description="Description will go into a meta tag in <head />">
      <IconContext.Provider value={iconStyles}>
        <main>
          <HomepageHeader />
          <HomepageFeatures />
          <HomepageFooter />
        </main>
      </IconContext.Provider>
    </Layout>
  );
}
