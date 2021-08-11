import React from "react";
const Input = (props) => {
  return (
    <div className="outline relative border border-black focus-within:border-phage-blue z-0">
      <input
        type="text"
        name={props.name}
        id={props.name}
        aria-label={props.label}
        placeholder=" "
        className="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent "
        onChange={(e) => props.onChange(e.target.value)}
      />
      <label
        for={props.label}
        className="absolute top-0 left-0 text-lg bg-phage-light p-4 duration-300 origin-0 z-n1"
      >
        {props.label}
      </label>
    </div>
  );
};

export default Input;
