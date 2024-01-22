import Link from 'next/link';
import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";
const DashboardHeader = ({ toggleSidebar }) => {
  const [profile, setProfile] = useState(false);
  const handleProfle = () => {
    setProfile(!profile);
  };
  return (
    <>
      <div className="dasboard_header_menu">
        <div className="dasboard-menu" onClick={() => toggleSidebar()}>
          <span>
            <IoMdMenu />
          </span>
        </div>
        <div className="dashboard-profile">
          <div
            className="dashboard-profile-username"
            onClick={() => handleProfle()}
          >
            <p>monoj</p>
          </div>
          {profile && (
            <div className="user-profile-content">
              <ul>
                <li>
                  <Link href={"/profile"} onClick={() => handleProfle()}>
                    <div className="user-profile-list">
                      {" "}
                      <span>
                        <FaRegUser />
                      </span>
                      <p>Profile</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href={"/logout"} onClick={() => handleProfle()}>
                    <div className="user-profile-list">
                      {" "}
                      <span>
                        <RiLogoutCircleLine />
                      </span>
                      <p> Logout</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardHeader