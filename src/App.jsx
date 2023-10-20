import "./App.scss";
import Router from "./Router";
import Landing from "./components/Landing/Landing";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Router />
      </div>
    </ChakraProvider>
  );
}

export default App;
