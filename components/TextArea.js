import React from "react";
const TextArea = (props) => {
  return (
    <div class="outline relative border border-phage-dark focus-within:border-phage-blue z-0">
      
      <textarea
        name={props.label}
        id={props.label}
        aria-label={props.label}
        placeholder=" "
        rows={props.rows}
        cols={props.cols}
        className="block w-full p-4 focus:outline-none text-base appearance-none bg-transparent resize-none"
        onChange={e => props.onChange(e.target.value)}
      ></textarea>
      <label
        for={props.label}
        className="absolute top-0 text-phage-dark bg-phage-light text-lg p-4 duration-300 z-n1 origin-0"
      >
        {props.label}
      </label>
    </div>
  );
};

export default TextArea;
