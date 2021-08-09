import Link from "next/link";

const NavItem = (props) => {
  return (

      <li >

        <Link href={props.href} onClick={props.onClick}><a onClick={props.onClick} href="#" className="nav-text font-bold text-gray-700 hover:bg-gray-300 rounded transition-colors duration-300">{props.text}</a></Link>

      </li>

  );
};

export default NavItem;
