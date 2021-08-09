import Portfolio from "../pages/portfolio";
import React from "react"
const Input = (props) => {
  return (
    <div class="outline relative border border-phage-dark focus-within:border-phage-blue">
      
      <input
        type="text"
        name={props.label}
        id={props.label}
        aria-label={props.label}
        placeholder=" "
        className="block w-full p-4 focus:outline-none text-baser appearance-none bg-transparent "
      />
      <label for={props.label} className="absolute top-0 text-phage-dark bg-phage-light text-base p-4  duration-300 origin-0">
        {props.label}
      </label>
    </div>
  );
};

export default Input;
