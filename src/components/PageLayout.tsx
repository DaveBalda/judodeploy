import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import NavLink from "./Navbar/NavLink";
import Dropdown from "./Navbar/Dropdown";
import SDropdown from "./Sidebar/SDropdown";
import DDItem from "./Navbar/DDItem";
import { FaBook, FaRegQuestionCircle } from "react-icons/fa";
import { GiBlackBelt, GiWeightLiftingUp } from "react-icons/gi";
import { MdSportsMartialArts } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";
import Sidebar from "./Sidebar/Sidebar";
import SidebarHeader from "./Sidebar/SidebarHeader";
import SideLink from "./Sidebar/SideLink";
import SDDItem from "./Sidebar/SDDItem";
import "./components.css";
import { IoCamera, IoHome } from "react-icons/io5";
import Footer from "./Footer/Footer";

interface PageLayoutProps {
  children?: React.ReactNode;
  title: string;
}

function PageLayout({ children, title }: PageLayoutProps) {
  // Hooks
  const [open, setOpen] = useState(false);

  return (
    <div>
      <title>{title}</title>
      <div className="jcs_navbar">
        <Navbar>
          <NavLink href="/">Home</NavLink>
          <Dropdown name="Chi Siamo">
            <div className="flex flex-row gap-3">
              <div>
                <DDItem href="/contatti" name="Contatti">
                  <FaRegQuestionCircle size={20} />
                </DDItem>
                <DDItem href="/maestri" name="Maestri">
                  <IoIosPerson size={20} />
                </DDItem>
              </div>
              <div className="border-l border-white/50" />
              <div>
                <DDItem href="/corsi" name="Corsi">
                  <GiWeightLiftingUp size={20} />
                </DDItem>
                <DDItem href="/storia" name="Storia">
                  <FaBook size={20} />
                </DDItem>
              </div>
            </div>
          </Dropdown>
          <Dropdown name="Il Judo">
            <div className="flex flex-col gap-4">
              <DDItem href="#" name="Tecniche">
                <MdSportsMartialArts size={20} />
              </DDItem>
              <DDItem href="#" name="Yudansha">
                <GiBlackBelt size={20} />
              </DDItem>
            </div>
          </Dropdown>
          <NavLink href="#">Media</NavLink>
        </Navbar>
        <main className="min-h-screen">{children}</main>
        <Footer />
      </div>
      <div className="jcs_sidebar relative">
        <SidebarHeader open={open} setOpen={setOpen} />
        <Sidebar open={open}>
          <span></span>
          <SideLink href="/">
            <div className="flex flex-row gap-2 items-center">
              <IoHome size={25} />
              <p>Home</p>
            </div>
          </SideLink>
          <SDropdown name="Chi Siamo">
            <div className="flex flex-col gap-1 text-[16px]">
              <SDDItem href="/contatti" name="Contatti">
                <FaRegQuestionCircle size={15} />
              </SDDItem>
              <SDDItem href="/maestri" name="Maestri">
                <IoIosPerson size={15} />
              </SDDItem>
              <SDDItem href="/corsi" name="Corsi">
                <GiWeightLiftingUp size={15} />
              </SDDItem>
              <SDDItem href="/storia" name="Storia">
                <FaBook size={15} />
              </SDDItem>
            </div>
          </SDropdown>
          <SDropdown name="Il Judo">
            <div className="flex flex-col gap-1 text-[16px]">
              <SDDItem href="#" name="Teniche">
                <MdSportsMartialArts size={15} />
              </SDDItem>
              <SDDItem href="#" name="Yudansha">
                <GiBlackBelt size={15} />
              </SDDItem>
            </div>
          </SDropdown>
          <SideLink href="#">
            <div className="flex flex-row gap-2 items-center">
              <IoCamera size={25} />
              <p>Media</p>
            </div>
          </SideLink>
        </Sidebar>
        <div className="flex flex-col">
          <main className="min-h-screen">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default PageLayout;
