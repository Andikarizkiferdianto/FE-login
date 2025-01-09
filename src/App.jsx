// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Landing_Page from "./components/landing_page";

// import Barang from "./pages/Barang";
// import Detail from "./pages/detail";
// import Edit from "./pages/edit";
// import Tambah from "./pages/tambah";
// import AppStore from "./pages/tugas gemge gimang/AppStore/Appstore";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/landingpage" element={<Landing_Page />} />
      {/* <Route path="/barang" element={<Barang />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/tambah" element={<Tambah />} /> */}
    </Routes>
  );
}

export default App;
