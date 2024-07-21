import Logo from "./assets/ceti-logo.png";
import HomeBg1 from "./assets/homebg1.png";
import HomeBg2 from "./assets/homebg2.png";
import HomeBg3 from "./assets/homebg3.png";
import WhatWeDo1 from "./assets/what-we-do-img1.png";
import WhatWeDo2 from "./assets/what-we-do-img2.png";
import WhatWeDo3 from "./assets/what-we-do-img3.png";
import WhatWeDo4 from "./assets/what-we-do-img4.png";
import WhatWeDo5 from "./assets/what-we-do-img5.png";
import WhatWeDo6 from "./assets/what-we-do-img6.png";
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
import Servicebg from "./assets/services-hero.png";
import ServiceCtaGradient from "./assets/gradient.png";
import ServiceCtaBg from "./assets/service-cta.png";
import ServiceWhyUs from "./assets/service-why-us.png";
import ManagingPartner from "./assets/managing-partner.png";
import Partner from "./assets/partner.png";
import { IoSearchSharp, IoSettingsOutline } from "react-icons/io5";
import { TbBulb } from "react-icons/tb";

export const IMAGES = {
  Logo,
  HomeBg1,
  HomeBg2,
  HomeBg3,
  WhatWeDo1,
  WhatWeDo2,
  WhatWeDo3,
  WhatWeDo4,
  WhatWeDo5,
  WhatWeDo6,
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
  ExpertiseIcon3,
  Servicebg,
  ServiceCtaBg,
  ServiceCtaGradient,
  ServiceWhyUs,
  ManagingPartner,
  Partner,
};

export const ROUTES = {
  home: "/",
  about: "/about-us",
  services: "/services",
  contact: "/contact-us",
  regulation: "/regulations",
  privacy: "/privacy",
  management: "/management",
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

export const getServiceItems = (t) => [
  {
    id: 1,
    heading: t("common.whatwedo.box1title"),
    img: WhatWeDo1,
    paragraph: t("common.whatwedo.box1paragraph"),
  },
  {
    id: 2,
    heading: t("common.whatwedo.box2title"),
    img: WhatWeDo2,
    paragraph: t("common.whatwedo.box2paragraph"),
  },
  {
    id: 3,
    heading: t("common.whatwedo.box3title"),
    img: WhatWeDo3,
    paragraph: t("common.whatwedo.box3paragraph"),
  },
  {
    id: 4,
    heading: t("common.whatwedo.box4title"),
    img: WhatWeDo4,
    paragraph: t("common.whatwedo.box4paragraph"),
  },
  {
    id: 5,
    heading: t("common.whatwedo.box5title"),
    img: WhatWeDo5,
    paragraph: t("common.whatwedo.box5paragraph"),
  },
  {
    id: 6,
    heading: t("common.whatwedo.box6title"),
    img: WhatWeDo6,
    paragraph: t("common.whatwedo.box6paragraph"),
  },
];

export const getHowWeHelpItems = (t) => [
  {
    id: 1,
    heading: t("services.howwehelp.title1"),
    items: [
      t("services.howwehelp.list1a"),
      t("services.howwehelp.list1b"),
      t("services.howwehelp.list1c"),
    ],
  },
  {
    id: 2,
    heading: t("services.howwehelp.title2"),
    items: [
      t("services.howwehelp.list2a"),
      t("services.howwehelp.list2b"),
      t("services.howwehelp.list2c"),
    ],
  },
  {
    id: 3,
    heading: t("services.howwehelp.title3"),
    items: [
      t("services.howwehelp.list3a"),
      t("services.howwehelp.list3b"),
      t("services.howwehelp.list3c"),
    ],
  },
  {
    id: 4,
    heading: t("services.howwehelp.title4"),
    items: [
      t("services.howwehelp.list4a"),
      t("services.howwehelp.list4b"),
      t("services.howwehelp.list4c"),
    ],
  },
  {
    id: 5,
    heading: t("services.howwehelp.title5"),
    items: [
      t("services.howwehelp.list5a"),
      t("services.howwehelp.list5b"),
      t("services.howwehelp.list5c"),
    ],
  },
  {
    id: 6,
    heading: t("services.howwehelp.title6"),
    items: [
      t("services.howwehelp.list6a"),
      t("services.howwehelp.list6b"),
      t("services.howwehelp.list6c"),
    ],
  },
  {
    id: 7,
    heading: t("services.howwehelp.title7"),
    items: [
      t("services.howwehelp.list7a"),
      t("services.howwehelp.list7b"),
      t("services.howwehelp.list7c"),
    ],
  },
];

export const getWhyChooseUsItems = (t) => [
  {
    id: 1,
    heading: t("services.whychooseus.title1"),
    paragraph: t("services.whychooseus.paragraph1"),
  },
  {
    id: 2,
    heading: t("services.whychooseus.title2"),
    paragraph: t("services.whychooseus.paragraph2"),
  },
  {
    id: 3,
    heading: t("services.whychooseus.title3"),
    paragraph: t("services.whychooseus.paragraph3"),
  },
];

export const getTeamPersonneltems = (t) => [
  {
    id: 1,
    img: IMAGES.ManagingPartner,
    name: t("management.team.team1.name"),
    title: t("management.team.team1.title"),
    paragraph1: t("management.team.team1.paragraph1"),
    paragraph2: t("management.team.team1.paragraph2"),
  },
  {
    id: 2,
    img: IMAGES.Partner,
    name: t("management.team.team2.name"),
    title: t("management.team.team2.title"),
    paragraph1: t("management.team.team2.paragraph1"),
    paragraph2: t("management.team.team2.paragraph2"),
  },
];

export const getPrivacytems = (t) => [
  {
    id: "#intro",
    title: t("privacy.body.item1title"),
  },
  {
    id: "#who",
    title: t("privacy.body.item2title"),
  },
  {
    id: "#data",
    title: t("privacy.body.item3title"),
  },
  {
    id: "#cookies-usage",
    title: t("privacy.body.item4title"),
  },
  {
    id: "#contact",
    title: t("privacy.body.item5title"),
  },
  {
    id: "#change",
    title: t("privacy.body.item6title"),
  },
  {
    id: "#controller",
    title: t("privacy.body.item7title"),
  },
];
