import React from "react";
import Table from "./components/Table/Table";
import Form from "./components/Form/Form";
import "./index.css";

function App() {
  return (
    <>
      {/* HEADER     */}

      <h1 className="text-3xl font-bold underline">Add something</h1>
      {/* form */}
      <Form />
      {/* Table */}
      <Table />
    </>
  );
}

export default App;
