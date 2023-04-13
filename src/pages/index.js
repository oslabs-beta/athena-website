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
            href="https://github.com/oslabs-beta/AthenaJS/releases/download/v1.1.0/athena_1.1.0_Mac.dmg"
            download=""
          >
            <FaApple />
          </a>
          <a
            className={styles.downloadButton}
            href="https://github.com/oslabs-beta/AthenaJS/releases/download/v1.1.0/athena_1.1.0_Win.exe"
            download=""
          >
            <AiFillWindows />
          </a>
          <a
            className={styles.downloadButton}
            href="https://github.com/oslabs-beta/AthenaJS/releases/download/v1.1.0/athena_1.1.0_Linux.AppImage"
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

  const teamMemberInfo = [
    {
      name: 'Daniel Chang',
      linkedin: 'https://www.linkedin.com/in/dkc213/',
      github: 'https://github.com/Chang254'
    },
    {
      name: 'Christopher Long',
      linkedin: 'https://www.linkedin.com/in/cvalong/',
      github: 'https://github.com/cvalong',
    },
    {
      name: 'Ryan Motamen',
      linkedin: 'https://www.linkedin.com/in/ryan-motamen/',
      github: 'https://github.com/ryanmotamen'
    },
    {
      name: 'Derrick Oh',
      linkedin: 'https://www.linkedin.com/in/derrick-oh-37a84a182/',
      github: 'https://github.com/Igniphis'
    },
    {
      name: 'Matthew Fukudome',
      linkedin: 'https://www.linkedin.com/in/matthewfukudome/',
      github: 'https://github.com/mattfookoo'
    },
  ];

  const teamMemberSocials = teamMemberInfo.map((info) => (
    <div className={styles.teamMember}>
      <span>{info.name}</span>
      <a href={info.github}> <AiFillGithub /></a>
      <a href={info.linkedin}> <AiFillLinkedin /></a>
    </div>
  ));

  return (
    <footer className={styles.fullViewHeightFooter}>
      <h4>AthenaJS Core Team</h4>
      <div className={styles.teamList}>
        {teamMemberSocials}
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
