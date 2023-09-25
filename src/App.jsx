import { useState } from "react";
import Header from "./components/header"
import { Outlet } from 'react-router-dom';

export default function App() {
  const [currentPage, setCurrentPage] = useState("About me");

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}