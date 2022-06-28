import React from "react";
import Table from "./components/Table/Table";
import Header from "./components/Header/Header";

import "./index.css";

function App() {
  return (
    <>
      {/* HEADER     */}
      <Header />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {/* Table */}
      <Table />
    </>
  );
}

export default App;
