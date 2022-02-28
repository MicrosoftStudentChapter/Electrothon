// import { faMonero } from "@fortawesome/free-brands-svg-icons";
import {
  // faCalendarDay,
  // faHandshake,
  // faHome,
  // faIdCardAlt,
  faSearch,
  // faUsers,
  // faWindowRestore,
  // faTrophy,
  faCalendarAlt,
  faAward,
  faMoneyBill,
  faRunning,
  // faComment,
  faCommentAlt,
  faHome,
  faUsers,
  // faTrophy,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

const navItems = [
  {
    name: "Home",
    id: "home",
    icon: faHome,
  },
  {
    name: "About Us",
    id: "general-content",
    icon: faUsers,
  },
  {
    name: "Timeline",
    id: "schedule",
    icon: faCalendarAlt,
  },
  {
    name: "Tracks",
    id: "themes",
    icon: faRunning,
  },
  {
    name: "Prizes",
    id: "prizes",
    icon: faAward,
  },
  {
    name: "Sponsors",
    id: "sponsors",
    icon: faMoneyBill,
  },
  {
    name: "Speakers",
    id: "speakers",
    icon: faMicrophone,
  },
  {
    name: "FAQ",
    id: "faq",
    icon: faSearch,
  },
  {
    name: "Contact Us",
    id: "contact",
    icon: faCommentAlt,
    hide: true,
  },
];

export default navItems;
