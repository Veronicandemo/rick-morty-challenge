import { GiPlagueDoctorProfile } from "react-icons/gi";
import { PiFilmSlateBold } from "react-icons/pi";
import { FaMapLocationDot } from "react-icons/fa6";


export const SIDEBAR_ITEMS = [
  {
    title: "Characters",
    path: "/",
    icon: <GiPlagueDoctorProfile fontSize='3em'/>,
  },
  {
    title: "Location",
    path: "/location",
    icon: <FaMapLocationDot fontSize='3em'/>

  },
  {
    title: "Episodes",
    path: "/episodes",
    icon: <PiFilmSlateBold fontSize='3em'/>
  },
 
];