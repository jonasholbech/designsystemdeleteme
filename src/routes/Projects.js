import { Link } from "react-router-dom";
export default function Projects() {
  return (
    <ul>
      <li>
        <Link to="/projects/1">Hogwarts</Link>
      </li>
      <li>
        <Link to="/projects/2">Portfolio</Link>
      </li>
      <li>
        <Link to="/projects/3">Advice</Link>
      </li>
    </ul>
  );
}
