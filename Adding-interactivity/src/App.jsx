import Button from "./Button";
import Toolbar from "./Toolbar";
import Form from "./components/Form";
import Gallery from "./components/Gallery";
import MovingDot from "./components/MovingDot";

import List from "./Arrays_in_state/AddingItems";

function App() {
  return (
    <div>
      <h1>Welcome to the App!</h1>
      <Button />
      <Toolbar />
      <Gallery />
      <MovingDot />
      <Form />
      <List />
    </div>
  );
}

export default App;
