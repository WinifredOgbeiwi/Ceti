import Logo from "./assets/ceti-logo.png";
import HomeBg1 from "./assets/homebg-1.png";
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
import { IoSearchSharp } from "react-icons/io5";

export const IMAGES = {
  Logo,
  HomeBg1,
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
    heading: t("home.howitworks.box1heading"),
    no: "1",
    icon: IoSearchSharp,
    paragraph: t("home.howitworks.box1paragraph"),
  },
  {
    heading: t("home.howitworks.box2heading"),
    no: "2",
    icon: IoSearchSharp,
    paragraph: t("home.howitworks.box2paragraph"),
  },
  {
    heading: t("home.howitworks.box3heading"),
    no: "3",
    icon: IoSearchSharp,
    paragraph: t("home.howitworks.box3paragraph"),
  },
];
