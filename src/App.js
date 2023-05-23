import "./App.css";
import FPList from "./Components/FPList";
import AVC from "./Components/AVC";
import ActionBar from "./Components/ActionBar";
import { DIList } from "./Components/DIList";

function App() {
  return (
    <div>
      <ActionBar />
      <div className="App d-flex justify-content-center">
        <FPList className="mb-3" />
      </div>
      <div className="d-flex justify-content-center m-3">
        <DIList />
      </div>
      <AVC />
    </div>
  );
}

export default App;
