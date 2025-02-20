import React from "react";
import { NavBar } from "./NavBar";
import arrowBackIos from "./arrow-back-ios.png";
import arrowForwardIos from "./arrow-forward-ios.png";
import browine1 from "./browine-1.png";
import gmailLogo from "./gmail-logo.png";
import green1 from "./green-1.png";
import linkedIn from "./linked-in.png";
import organgeCans1 from "./organge-cans-1.png";
import rectangle64 from "./rectangle-64.png";
import rectangle65 from "./rectangle-65.png";
import "./style.css";
import vector8 from "./vector-8.svg";

export const Cans = () => {
  return (
    <div className="cans">
      <div className="div-2">
        <div className="overlap-group">
          <img className="rectangle" alt="Rectangle" src={rectangle64} />

          <div className="text-wrapper-4">Cans</div>

          <NavBar
            className="nav-bar-instance"
            image="image.png"
            img="vector-13-2.svg"
            vector="image.svg"
            vector1="vector-14-2.svg"
          />
        </div>

        <img className="linked-in" alt="Linked in" src={linkedIn} />

        <img className="gmail-logo" alt="Gmail logo" src={gmailLogo} />

        <div className="text-wrapper-5">Scroll backup</div>

        <img className="vector-3" alt="Vector" src={vector8} />

        <div className="rectangle-2" />

        <div className="text-wrapper-6">Contact Info</div>

        <div className="text-wrapper-7">Gavin Pahal</div>

        <div className="text-wrapper-8">Hex: #FFC53A</div>

        <div className="text-wrapper-9">Sunglow</div>

        <div className="overlap">
          <p className="creating-mockups">
            <span className="span">
              Creating
              <br />
              Mockups
              <br />
            </span>

            <span className="text-wrapper-10">
              <br />
            </span>

            <span className="text-wrapper-11">
              Tiger Claw cans draw inspiration from the culture of martial arts
              and the raw energy of Tiger Muay Thai in Thailand. The brand is
              designed for martial artists looking for recovery; it highlights
              the potency of its THC-infused formula to help post training
              rejuvenation. The minimalist black tiger on a white background is
              a symbol of strength and intensity, reflecting the aggressive
              focus of the tiger. The simplicity makes the product bold while
              relating it to the disciplined and powerful mindset of its target
              audience. Tiger Claw is not just recovery but an aggressive
              companion for martial artists who push themselves to the limits.
              <br />
            </span>
          </p>

          <div className="text">{""}</div>
        </div>

        <div className="text-wrapper-12">Dielines</div>

        <img
          className="arrow-back-ios"
          alt="Arrow back ios"
          src={arrowBackIos}
        />

        <img
          className="arrow-forward-ios"
          alt="Arrow forward ios"
          src={arrowForwardIos}
        />

        <img className="rectangle-3" alt="Rectangle" src={rectangle65} />

        <img className="organge-cans" alt="Organge cans" src={organgeCans1} />

        <img className="green" alt="Green" src={green1} />

        <img className="browine" alt="Browine" src={browine1} />
      </div>
    </div>
  );
};
