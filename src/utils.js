import Logo from "./assets/ceti-logo.png";
import HomeBg1 from "./assets/homebg1.png";
import HomeBg2 from "./assets/homebg2.png";
import HomeBg3 from "./assets/homebg3.png";
import HomeBoxImg1 from "./assets/home_box_img1.png";
import HomeBoxImg2 from "./assets/home_box_img2.png";
import HomeBoxImg3 from "./assets/home_box_img3.png";
import SideDesign from "./assets/sideDesign.png";
import BoxdesignA2 from "./assets/box-design-A2.png";
import BoxdesignB2 from "./assets/box-design-B2.png";
import HeroAbout1 from "./assets/hero-about-us1.png";
import HeroAbout2 from "./assets/hero-about-us2.png";
import HeroAbout3 from "./assets/hero-about-us3.png";
import HeroAboutdesign from "./assets/hero-about-sidedesign.png";
import No1 from "./assets/no1.png";
import No2 from "./assets/no2.png";
import No3 from "./assets/no3.png";
import LogoWhite from "./assets/ceti-logo-white.png";
import Aboutbg from "./assets/aboutbg.png";
import AboutPurpose from "./assets/purpose-img.png";
import AboutValue from "./assets/value-img.png";
import Expertise from "./assets/expertiseimg.png";
import ExpertiseIcon1 from "./assets/expertise-icon1.png";
import ExpertiseIcon2 from "./assets/expertise-icon2.png";
import ExpertiseIcon3 from "./assets/expertise-icon3.png";

import { IoSearchSharp, IoSettingsOutline } from "react-icons/io5";
import { TbBulb } from "react-icons/tb";

export const IMAGES = {
  Logo,
  HomeBg1,
  HomeBg2,
  HomeBg3,
  HomeBoxImg1,
  HomeBoxImg2,
  HomeBoxImg3,
  SideDesign,
  BoxdesignA2,
  BoxdesignB2,
  HeroAbout1,
  HeroAbout2,
  HeroAbout3,
  HeroAboutdesign,
  No1,
  No2,
  No3,
  LogoWhite,
  Aboutbg,
  AboutPurpose,
  AboutValue,
  Expertise,
  ExpertiseIcon1,
  ExpertiseIcon2,
  ExpertiseIcon3
};

export const ROUTES = {
  home: "/",
  about: "about-us",
  services: "services",
  contact: "contact-us",
  regulation: "regulations",
  privacy: "privacy",
  not_found: "*",
};

export const getHeroAboutLinks = (t) => [
  {
    id: "link1",
    label: t("home.aboutus.section1heading"),
    img: HeroAbout1,
    paragraph: t("home.aboutus.section1paragraph"),
  },
  {
    id: "link2",
    label: t("home.aboutus.section2heading"),
    img: HeroAbout2,
    paragraph: t("home.aboutus.section2paragraph"),
  },
  {
    id: "link3",
    label: t("home.aboutus.section3heading"),
    img: HeroAbout3,
    paragraph: t("home.aboutus.section3paragraph"),
  },
];

export const getHeroWorkItems = (t) => [
  {
    id: 1,
    heading: t("home.howitworks.box1heading"),
    no: No1,
    icon: IoSearchSharp,
    paragraph: t("home.howitworks.box1paragraph"),
  },
  {
    id: 2,
    heading: t("home.howitworks.box2heading"),
    no: No2,
    icon: IoSettingsOutline,
    paragraph: t("home.howitworks.box2paragraph"),
  },
  {
    id: 3,
    heading: t("home.howitworks.box3heading"),
    no: No3,
    icon: TbBulb,
    paragraph: t("home.howitworks.box3paragraph"),
  },
];

export const getExpertisesItems = (t) => [
  {
    id: 1,
    heading: t("about.expertise.section1heading"),
    img: ExpertiseIcon1,
    paragraph: t("about.expertise.section1paragraph"),
  },
  {
    id: 2,
    heading: t("about.expertise.section2heading"),
    img: ExpertiseIcon2,
    paragraph: t("about.expertise.section2paragraph"),
  },
  {
    id: 3,
    heading: t("about.expertise.section3heading"),
    img: ExpertiseIcon3,
    paragraph: t("about.expertise.section3paragraph"),
  },
];