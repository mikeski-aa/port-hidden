import { createContext, useRef, useState, useEffect } from "react";
import "./App.css";
import VertBar from "../src/components/VertBar";

import NavBar from "./components/NavBar";
import Footer from "../src/components/Footer";
import { useInView } from "../src/hooks/useInView";
import { helperScrollStateUpdate } from "./utils/helperStateUpdates";
import BonusPage from "../src/components/BonusPage";
import TerminalBox from "../src/components/TerminalBox";
import AllTabsClosed from "../src/components/AllTabsClosed";
import EmailModal from "../src/components/AllTabsClosed";
import NewMainPageDesign from "./components/new_main_page/NewMainPageDesign";
import NewAboutComp from "./components/new_main_page/NewAboutComponent";
import skills from "./utils/skillsData";
import NewSkillBox from "./components/new_main_page/NewSkillBox";
import NewProjectComp from "./components/new_main_page/NewProjectsComp";
import NewContactMe from "./components/new_main_page/NewContactMe";

import BackgroundParticles from "../src/components/BackgroundParticles";

// import "../src/styles/netlifycssfix.css";

export const GlobalContext: any = createContext<any>(undefined);

function App() {
  const [currentPage, setCurrentPage] = useState<string>("About_me.jsx");
  const [cPage, setCpage] = useState<string>("About_me");
  const [activePage, setActivePage] = useState<string>("zero");
  const [sidebarStat, setSidebarStat] = useState(true);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const [bonusPage, setBonusPage] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const [dontRun, setDontRun] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const hasPageBeenRendered = useRef(false);

  // this could be rewritten. we dont need long and short name. total redundancy
  const [navItems, setNavItems] = useState([
    {
      name: "About_me.jsx",
      active: true,
      shortname: "About_me",
      trueIndex: 0,
      refLink: aboutRef,
      visible: true,
      disabled: false,
    },
    {
      name: "My_skills.jsx",
      active: false,
      shortname: "My_skills",
      trueIndex: 1,
      refLink: skillsRef,
      visible: true,
      disabled: false,
    },
    {
      name: "My_projects.jsx",
      active: false,
      shortname: "My_projects",
      trueIndex: 2,
      refLink: projectsRef,
      visible: true,
      disabled: false,
    },

    {
      name: "Contact_me.jsx",
      active: false,
      shortname: "Contact_me",
      trueIndex: 3,
      refLink: contactRef,
      visible: true,
      disabled: false,
    },
  ]);
  // this is a temporary fix, which might become a pernament fix if I don't figure out a better solution
  // I need a "default" directory of pages, however, with how refs are implemented, I cannot store this in an outside file
  // this state is required in order to restore nav buttons and other items when they become closed
  const [defaultPages, setDefaultPages] = useState([
    {
      name: "About_me.jsx",
      active: false,
      shortname: "About_me",
      trueIndex: 0,
      refLink: aboutRef,
      visible: true,
      disabled: false,
    },
    {
      name: "My_skills.jsx",
      active: false,
      shortname: "My_skills",
      trueIndex: 1,
      refLink: skillsRef,
      visible: true,
      disabled: false,
    },
    {
      name: "My_projects.jsx",
      active: false,
      shortname: "My_projects",
      trueIndex: 2,
      refLink: projectsRef,
      visible: true,
      disabled: false,
    },

    {
      name: "Contact_me.jsx",
      active: false,
      shortname: "Contact_me",
      trueIndex: 3,
      refLink: contactRef,
      visible: true,
      disabled: false,
    },
    {
      name: "bonusPage.js",
      active: false,
      shortname: "bonusPage",
      trueIndex: 4,
      visible: false,
      disabled: true,
    },
  ]);

  // set states to manage refs
  // const [aboutVisRef, setAboutVisRef] = useState(useInView(aboutRef, "0px"))
  // const [projectVisRef, setProjectVisRef] = useState(useInView(projectsRef, "0px"))
  // const [skillVisRef, setSkillVisRef] = useState(useInView(skillsRef, "0px"))
  // const [contactVisRef, setContactVisRef] = useState(useInView(contactRef, "0px"))

  // using custom hook to check whether an area is in view and adjust text accordingly
  const aboutVisible = useInView(aboutRef, "0px");
  const projectsVisible = useInView(projectsRef, "0px");
  const skillsVisible = useInView(skillsRef, "0px");
  const contactVisible = useInView(contactRef, "0px");

  // update active based on scroll position
  // this is has caused me a lot of frustration when switching from bonus page to "normal" pages
  // hacky work around is to use setTimeout. It doesnt look too bad on local machine, might be awful when hosted.

  useEffect(() => {
    if (!dontRun) {
      // console.log("still running");
      if (aboutVisible) {
        setActivePage("zero");
        setCurrentPage("About_me.jsx");
        setCpage("About_me");
        helperScrollStateUpdate(navItems, setNavItems, "About_me.jsx");
      } else if (projectsVisible && skillsVisible) {
        setCurrentPage("My_skills.jsx");
        setCpage("My_skills");
        setActivePage("two");
        helperScrollStateUpdate(navItems, setNavItems, "My_skills.jsx");
      } else if (skillsVisible) {
        setCurrentPage("My_skills.jsx");
        setCpage("My_skills");
        setActivePage("two");
        helperScrollStateUpdate(navItems, setNavItems, "My_skills.jsx");
      } else if (projectsVisible && contactVisible) {
        setCurrentPage("Contact_me.jsx");
        setCpage("Contact_me");
        setActivePage("three");

        helperScrollStateUpdate(navItems, setNavItems, "Contact_me.jsx");
      } else if (projectsVisible) {
        setCurrentPage("My_projects.jsx");
        setCpage("My_projects");
        setActivePage("one");
        helperScrollStateUpdate(navItems, setNavItems, "My_projects.jsx");
      } else if (contactVisible) {
        setCurrentPage("Contact_me.jsx");
        setCpage("Contact_me");
        setActivePage("three");
        helperScrollStateUpdate(navItems, setNavItems, "Contact_me.jsx");
      }
    }
  }, [aboutVisible, projectsVisible, skillsVisible, contactVisible]);

  // update with window scale to render mobile page instead
  useEffect(() => {
    const updateWindowWidth = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
      console.log(newWidth);
    };

    window.addEventListener("resize", updateWindowWidth);

    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  // trying out something that will let me map pages and render them based on how they are order in navItems

  const pageOrder = [
    {
      page: (
        <div
          className={
            defaultPages[0].disabled ? "sectionDiv hidden" : "sectionDiv about"
          }
          ref={aboutRef}
        >
          <NewAboutComp />
        </div>
      ),
      id: 0,
    },
    {
      page: (
        <div
          className={
            defaultPages[1].disabled ? "sectionDiv hidden" : "sectionDiv skills"
          }
          ref={skillsRef}
        >
          <div className="scrollHolder">
            {skills.map((item: any, index: number) => (
              <NewSkillBox key={index} name={item.name} />
            ))}
          </div>
        </div>
      ),
      id: 1,
    },
    {
      page: (
        <div
          className={
            defaultPages[2].disabled
              ? "sectionDiv hidden"
              : "sectionDiv projects"
          }
          ref={projectsRef}
        >
          <NewProjectComp />
        </div>
      ),
      id: 2,
    },
    {
      page: (
        <div
          className={
            defaultPages[3].disabled ? "sectionDiv hidden" : "sectionDiv last"
          }
          ref={contactRef}
        >
          <div className="newSection Contact">
            <div className="newProjectsHeading">Contact</div>
            <NewContactMe />
          </div>
        </div>
      ),
      id: 3,
    },
  ];

  return (
    <div className="page">
      {windowWidth <= 963 ? (
        <NewMainPageDesign />
      ) : (
        <>
          <GlobalContext.Provider
            value={{
              navItems,
              setNavItems,
              sidebarStat,
              setSidebarStat,
              setCurrentPage,
              setCpage,
              activePage,
              defaultPages,
              setDefaultPages,
              setBonusPage,
              bonusPage,
              setActivePage,
              emailModal,
              setEmailModal,
              dontRun,
              setDontRun,
            }}
          >
            <EmailModal emailModal={emailModal} setEmailModal={setEmailModal} />
            <div className="pageTest">
              <VertBar />
              <div
                className={
                  navItems.length < 1
                    ? `mainTest ${sidebarStat} hiddenheight`
                    : `mainTest ${sidebarStat}`
                }
              >
                <div
                  className={
                    navItems.length < 1 ? "headtest hidden" : "headtest"
                  }
                >
                  <NavBar
                    currentPage={currentPage}
                    cPage={cPage}
                    navItems={navItems}
                    setNavItems={setNavItems}
                  />
                </div>
                <div className={`mainCont ${sidebarStat}`}>
                  <BackgroundParticles />
                  {pageOrder.map((page, index) => (
                    <div
                      key={index}
                      className={
                        defaultPages[page.id].disabled
                          ? "contentHolder hidden"
                          : "contentHolder"
                      }
                    >
                      {page.page}
                    </div>
                  ))}

                  {navItems.length < 1 ? <AllTabsClosed /> : null}
                  {!defaultPages[4].disabled ? <BonusPage /> : null}

                  <TerminalBox bonusPage={defaultPages[4].disabled} />
                </div>
              </div>
              <Footer />
            </div>
          </GlobalContext.Provider>
        </>
      )}
    </div>
  );
}

export default App;
