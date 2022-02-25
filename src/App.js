import React from "react";
import AppUi from "./appUI";
import { TodoProvider } from "./context";

function App() {
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
