import React from 'react';
import Tasks from "./components/Tasks/Tasks";
import stores from "./stores";
import { Provider } from "react-redux";

function App() {
    return (
       <Provider  store = {stores}>
            <Tasks />
       </Provider>
    );
}

export default App;