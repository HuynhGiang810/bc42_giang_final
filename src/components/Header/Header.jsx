import React, { useEffect, useState } from "react";
import MainHeader from "./MainHeader/MainHeader";
import SubHeader from "./SubHeader/SubHeader";
import "./HeaderCustom.scss";
import { useLocation } from "react-router-dom";
import useWindowResize from "../../help/useWindowResize";
import { apiJobMenu } from "../../apis/JobAPI";
import { alertError } from "../../help/sweeAlert2";

function Header() {
  const [y, setY] = useState(0);
  const [jobMenu, setJobMenu] = useState();

  const size = useWindowResize();
  const location = useLocation();
  const pathname = location.pathname;

  const condition = size.width >= 992 && (y >= 150 || pathname !== "/");

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setY(scrollY);
  };

  const getJobMenu = async () => {
    try {
      const data = await apiJobMenu();
      setJobMenu(data?.content);
    } catch (error) {
      alertError(error.response.data.content);
    }
  };

  useEffect(() => {
    getJobMenu();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <MainHeader jobMenu={jobMenu} />
      {condition && <SubHeader jobMenu={jobMenu} />}
    </>
  );
}

export default Header;
