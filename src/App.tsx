import React from "react";
import {Provider} from "react-redux";
import { Map } from "./components/map";
import Table from "./components/table";
import {store} from "./store";

export default function App(): JSX.Element {
    return (
        <Provider store={store}>
            <div style={style}>
                <Table />
                <Map />
            </div>
        </Provider>
    );
}

const style = {
    flex: 1,
    display: "flex"
}