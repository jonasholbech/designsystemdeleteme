import { useParams } from "react-router-dom";
export default function Project(props) {
  let params = useParams();
  console.log(params);
  return (
    <article>
      <h2>Hi, I'm project #{params.projectid}</h2>
    </article>
  );
}
