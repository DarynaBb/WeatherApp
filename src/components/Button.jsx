import { Link } from "react-router-dom";

function Button({ type, text, onClick, disabled, link }) {

  return (
    <button type={type} onClick={onClick} disabled={disabled} className="bg-green text-text-gray text-[14px] w-[56px] h-[56px] rounded-full" >
      
     <Link to={link}>{text}</Link> 
    </button>
  );
}

export default Button;
