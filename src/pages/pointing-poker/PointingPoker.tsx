import Session from "./Session";
import Settings from "./Settings";
import Starter from "./Starter";

function PointingPoker() {
  return <div className="pointing-poker">
    <Starter />
    <Settings />
    <Session />
  </div>;
}

export default PointingPoker
