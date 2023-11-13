import Menu from "./Menu";
import arrowWhite from "../assets/images/arrowBackWhite.svg";
import arrowBlack from "../assets/images/arrowBackBlack.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";

function TopNav({text, to}) {
  const { value } = useContext(MenuContext);

  return (
    <div className="flexBetween w-full">
        <Link to={to}>
        <img src={`${value > 50 ? arrowWhite : arrowBlack}`} className={`${value > 50 ? "w-[10px] h-[20px]" : "w-[32px] h-[25px]" } `} alt="back" />
        </Link>
        <p className="text-[12px]">{text}</p>
        <Menu />
    </div>
  )
}

export default TopNav