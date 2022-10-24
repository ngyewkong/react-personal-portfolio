import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

function Header({}: Props) {
  return (
    <header>
      <div className="flex flex-row items-center">
        {/* Social Icons */}
        <SocialIcon
          url="https://youtube.com"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://youtube.com"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://youtube.com"
          fgColor="gray"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://youtube.com"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>

      <div>
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p>Get In Touch!</p>
      </div>
    </header>
  );
}

export default Header;
