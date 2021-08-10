import React from "react"
const Input = (props) => {
  return (
    <div class="outline relative border border-phage-dark focus-within:border-phage-blue">
      
      <input
        type="text"
        name={props.name}
        id={props.name}
        aria-label={props.label}
        placeholder=" "
        className="block p-4 w-full text-base appearance-none focus:outline-none bg-transparent"
        onChange={e => props.onChange(e.target.value)}

      />
      <label for={props.label} className="absolute top-0 text-base bg-phage-white p-4 duration-300 origin-0">
        {props.label}
      </label>
    </div>
  );
};

export default Input;
