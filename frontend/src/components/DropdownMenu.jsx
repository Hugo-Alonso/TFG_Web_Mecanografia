import { Link } from "react-router-dom";

const DropdownMenu = () => {
  return (
    <div className="dropdown">
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link to="/timetest">TimeTest</Link>
        </li>
        <li>
          <Link to="/wordtest">WordTest</Link>
        </li>
        <li>
          <Link to="/customtest">CustomTest</Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
