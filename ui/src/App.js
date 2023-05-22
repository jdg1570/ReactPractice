import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";
// import OnsenUIExample from "./OnsenUI/OnsenUIExample";
// import ActionSheetExample from "./OnsenUI/ActionSheetExample";
// import CheckBoxExample from "./OnsenUI/CheckBoxExample";
// import FebExample from "./OnsenUI/FebExample";
// import ListExample from "./OnsenUI/ListExample";
// import ProgressExample from "./OnsenUI/ProgressExample";

import "antd/dist/reset.css";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import SemanticUIExample from "./SemanticUI/SemanticUIExample";
import UserLIst from "../../test/src/UserLIst";

function App() {
  return (
    <div className="App">
      <UserLIst />
      {/* <ProgressExample />
      <ListExample />
      <FebExample />
      <CheckBoxExample />f
      <ActionSheetExample />
      <OnsenUIExample /> */}
    </div>
  );
}

export default App;
