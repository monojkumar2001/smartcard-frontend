import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useAuth } from "../../pages/auth/authContext";


const DashboardHeader = ({ toggleSidebar }) => {
  const { user, logout, isLoading } = useAuth();
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
            <p>{user?.name}</p>
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
                  <div className="user-profile-list" onClick={logout}>
                    {" "}
                    <span>
                      <RiLogoutCircleLine />
                    </span>
                    <p> Logout</p>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
