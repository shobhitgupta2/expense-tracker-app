import Page from "./pages/Page.tsx";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Page />
      </PersistGate>
    </Provider>
  );
}

export default App;
