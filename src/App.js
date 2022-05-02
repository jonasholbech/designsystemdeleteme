import "./App.css";
import { Button } from "antd";
import { Collapse } from "antd";

import { Link } from "react-router-dom";
const { Panel } = Collapse;

function App() {
  const text = `
  A rabbit is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  return (
    <div className="App">
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
      <Collapse defaultActiveKey={["1"]} accordion>
        <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
          <Button type="primary" danger>
            DELETE EVERYTHING
          </Button>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>
  );
}

export default App;
