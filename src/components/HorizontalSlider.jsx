import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import "./HorizontalSlider.scss";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const HorizontalSlider = () => {
  const panels = useRef([]);
  const panelsContainer = useRef();
  const [mobileWidth, setMobileWidth] = useState("");

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth < 700) {
  //       setMobileWidth(true);
  //       // Stop the animation
  //       gsap.killTweensOf(panels.current);
  //       gsap.set(panels.current, { clearProps: "all" });
  //     } else {
  //       setMobileWidth(false);
  //       // Resume the animation if it was previously stopped
  //       if (panels.current.length > 0) {
  //         const totalPanels = panels.current.length;
  //         gsap.to(panels.current, {
  //           xPercent: -100 * (totalPanels - 1),
  //           ease: "none",
  //           scrollTrigger: {
  //             trigger: panelsContainer.current,
  //             pin: true,
  //             scrub: 1,
  //           },
  //         });
  //       }
  //     }
  //   };

  //   // Add event listener for window resize
  //   window.addEventListener("resize", handleResize);

  //   // Clean up the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  useEffect(() => {
    const totalPanels = panels.current.length;
    if (window.innerWidth > 700) {
      gsap.to(panels.current, {
        xPercent: -100 * (totalPanels - 1),
        ease: "none",
        scrollTrigger: {
          trigger: panelsContainer.current,
          pin: true,
          scrub: 1,
        },
      });
    }
  }, []);
  return (
    <div className="outerContainer">
      <div className="container" ref={panelsContainer}>
        <div
          className="panel"
          id="section1"
          ref={(e) => createPanelsRefs(e, 0)}
        >
          <div className="leftSection" styles={{ color: "#FFD243" }}>
            <img
              src={"/assets/HorizontalSlider/1.png"}
              fill={"#6FAAFF"}
              alt=""
            />
          </div>
          <div className="rightSection">
            <Link href="/HowItWorks" style={{ color: "black" }}>
              <div className="howItWorksbtn">How it Works</div>
            </Link>
            <p className="count">01</p>
            <div>
              <h1 className="heading">
                Pre-sorted <br /> Medicine Doses
              </h1>
              <p className="info">
                You get your medicines pre-sorted by time and date in ready to
                take pouches as (per your prescription plan). Time to throw away
                those ugly boxes.
              </p>
            </div>
            <div className="scrollbt">
              Scroll
              <img src={"/assets/rightArrow.svg"} width={25} alt="" />
            </div>
          </div>
        </div>
        <section
          className="panel"
          id="section2"
          ref={(e) => createPanelsRefs(e, 1)}
        >
          <div className="leftSection" styles={{ color: "#FFD243" }}>
            <img
              src={"/assets/HorizontalSlider/2.png"}
              fill={"#6FAAFF"}
              alt=""
              id="slide2Img"
            />
          </div>
          <div className="rightSection">
            <div className="howItWorksbtn">
              <Link href="/HowItWorks" style={{ color: "black" }}>
                <u>How it Works</u>
              </Link>
            </div>
            <p className="count">02</p>
            <div>
              <h1 className="heading">
                Medicine
                <br />
                Reminders
              </h1>
              <p className="info">
                You get timely reminders from us to take your medicines on
                Whatsapp, PillUp app, etc. Need more?
              </p>
            </div>
            <div className="scrollbtn">
              Scroll
              <img src={"/assets/rightArrow.svg"} width={25} alt="" />
            </div>
          </div>
        </section>
        <section
          className="panel"
          id="section2"
          ref={(e) => createPanelsRefs(e, 1)}
        >
          <div className="leftSection" styles={{ color: "#FFD243" }}>
            <img
              src={"/assets/HorizontalSlider/2.png"}
              fill={"#6FAAFF"}
              alt=""
              id="slide2Img"
            />
          </div>
          <div className="rightSection">
            <div className="howItWorksbtn">
              <Link href="/HowItWorks" style={{ color: "black" }}>
                <u>How it Works</u>
              </Link>
            </div>
            <p className="count">02</p>
            <div>
              <h1 className="heading">
                Medicine
                <br />
                Reminders
              </h1>
              <p className="info">
                You get timely reminders from us to take your medicines on
                Whatsapp, PillUp app, etc. Need more?
              </p>
            </div>
            <div className="scrollbtn">
              Scroll
              <img src={"/assets/rightArrow.svg"} width={25} alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HorizontalSlider;
