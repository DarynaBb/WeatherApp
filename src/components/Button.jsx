import { Link } from "react-router-dom";

function Button({ type, text, onClick, disabled, link }) {

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${disabled ? "text-[12px] w-[70px] h-[70px] p-[5px] opacity-40" : ""} bg-green text-text-gray text-[14px] w-[56px] h-[56px] rounded-full`} >
     <Link to={link}>{text}</Link> 
    </button>
  );
}

export default Button;
