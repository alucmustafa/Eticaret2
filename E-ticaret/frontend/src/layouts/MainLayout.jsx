import React, { useEffect, useState } from "react";
import { Header } from "../components/Layout/Header/Header";
import { Footer } from "../components/Layout/Footer/Footer";
import { Policy } from "../components/Layout/Policy/Policy";
import Proptypes from "prop-types";
import Search from "../Modals/Search/Search";
import Dialog from "../Modals/Dialog/Dialog";

const MainLayout = ({ children }) => {
  const [isSearchShow, setIsSearchShow] = useState(false);
  const [isDalogShow, setIsDialogShow] = useState(false);
 
  useEffect(() => {
    const dialogStatus=localStorage.getItem("dialog")?
    JSON.parse(localStorage.getItem("dialog")):localStorage.setItem("dialog",JSON.stringify(true))
    setTimeout(() => {
        setIsDialogShow(dialogStatus);  
    }, 2000);
  }, []);
  return (
    <div className="main-layout">
      <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
      <Dialog isDalogShow={isDalogShow} setIsDialogShow={setIsDialogShow} />
      <Header setIsSearchShow={setIsSearchShow} />
      {children}
      <Policy />
      <Footer />
    </div>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: Proptypes.node, //Childeren olarak alınan Componenti tanımladık type node olacak böylece tip hatasından kaçmış olduk.
};
