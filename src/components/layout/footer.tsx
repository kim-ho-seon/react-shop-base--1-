import React from "react";
import { ReactComponent as VisaIcon } from "../src/assets/img/svg/visa.svg";
import { ReactComponent as MasterIcon } from "../../assets/img/svg/master.svg";
import { ReactComponent as AmexIcon } from "../src/assets/img/svg/americanExpress.svg";
import { ReactComponent as DinersClubIcon } from "../src/assets/img/svg/dinersClub.svg";
import { ReactComponent as DiscoverIcon } from "../src/assets/img/svg/discover.svg";
import { ReactComponent as PaypalIcon } from "../src/assets/img/svg/paypal.svg";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer(): JSX.Element {
  return (
    <footer className=" flex flex-col items-center justify-center gap-8 bg-[#f2f2f2] p-10 text-sm">
      <div>
        <a href="#">제로베이스</a>
      </div>
      <div className="flex gap-2">
        <a>
          <img src="../src/assets/img/svg/visa.svg" />
        </a>
        <a>
          <img src="../src//assets/img/svg/master.svg" />
        </a>
        <a>
          <img src="../src/assets/img/svg/americanExpress.svg" />
        </a>
        <a>
          <img src="../src/assets/img/svg/dinersClub.svg" />
        </a>
        <a>
          <img src="../src/assets/img/svg/discover.svg" />
        </a>
        <a>
          <img src="../src/assets/img/svg/paypal.svg" />
        </a>
      </div>
      <div>
        <div className="flex items-center justify-center gap-4">
          <a href="">
            <FaFacebookF className="text-2xl" />
          </a>
          <a href="">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="">
            <FaGithub className="text-2xl" />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2025 KIM HO SEON</p>
      </div>
    </footer>
  );
}

export default Footer;
