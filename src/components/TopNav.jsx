import Menu from "./Menu";
import line from "../assets/images/Line.svg";
import { Link } from "react-router-dom";

function TopNav({text, to}) {
  return (
    <div className="flexBetween w-full">
        <Link to={to}>
        <img src={line} className="w-[10px] h-[20px]" alt="back" />
        </Link>
        <p className="text-[12px]">{text}</p>
        <Menu />
    </div>
  )
}

export default TopNav