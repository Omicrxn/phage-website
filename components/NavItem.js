import Link from "next/link";

const NavItem = (props) => {
  return (

      <li >

        <Link href={props.href}><a href="#" className="nav-text font-bold text-gray-700 px-2  hover:bg-gray-300 rounded transition-colors duration-300">{props.text}</a></Link>

      </li>

  );
};

export default NavItem;
