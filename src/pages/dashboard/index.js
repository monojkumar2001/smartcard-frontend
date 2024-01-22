import React, { useState } from "react";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import Link from "next/link";
import { MdDateRange } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa6";
import { FiUsers } from "react-icons/Fi";
import { IoIosAddCircleOutline } from "react-icons/io";
import QRCode from "qrcode.react";
import { FaRegCopy } from "react-icons/fa";
import ChartMap from "../../components/Dashboard/ChartMap";

//auth
import { useAuth } from "../../hooks/auth";
const DashboardPage = () => {
  const { user } = useAuth({ middleware: "auth" });

  const [createQrModel, setCreateQrModel] = useState(false);

  const handleQrModel = () => {
    setCreateQrModel(!createQrModel);
  };

  const shopLink = "https://zatiqeasy.com/shop/11168";
  const [isCopied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const textArea = document.createElement("textarea");
    textArea.value = shopLink;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      setCopied(true);
    } catch (err) {
      console.error("Unable to copy text to clipboard.", err);
    } finally {
      document.body.removeChild(textArea);
    }
  };

  return (
    <>
      <div className="dashboard-content-wrapper">
        <div className="busines-name-welcome">
          <p>Fri 19, Jan 2024</p>
          {user && (
            <h3>
              Hello, <span>{user.name}</span>
            </h3>
          )}
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="order-sale-item-con">
              <div className="order-sale-item">
                <p>Sales Today</p>
                <h3>BDT 0</h3>
              </div>
              <div className="order-sale-item">
                <span>
                  <FaMoneyBillWave />
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="order-sale-item-con">
              <div className="order-sale-item">
                <p>Sales Monthly</p>
                <h3>BDT 0</h3>
                <small>1 Jan - 31 Jan</small>
              </div>
              <div className="order-sale-item">
                <span>
                  <MdDateRange />
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="order-sale-item-con">
              <div className="order-sale-item">
                <p>Website visits</p>
                <h3>9</h3>
              </div>
              <div className="order-sale-item">
                <span>
                  <FiUsers />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <Link href={"/product-shop/new"}>
              <div className="add-product-item-card">
                <span>
                  <IoIosAddCircleOutline />
                </span>
                <p>Add product in your shop</p>
              </div>
            </Link>
          </div>
          <div className="col-md-6">
            <div className="shop-details-card add-product-item-card">
              <div className="shop-details-title d-flex align-items-center justify-content-between">
                <div className="shop-details-title">
                  <p>Shop Details</p>
                  <h4>monoj</h4>
                </div>
                <div className="shop-qr-code">
                  <QRCode value={``} size={100} />
                </div>
              </div>
              <div className="shop-copy-link">
                <p>{shopLink}</p>
                <p onClick={handleCopyClick} className="copy-icon">
                  <FaRegCopy />
                  <span className="shop-copy-text">
                    {isCopied ? "Copied!" : ""}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="shop-product-stack-item">
              <div className="shop-details-title">
                <h4>Low Stock Products</h4>
              </div>
              <div className="table-container">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>monoj kumar</td>
                      <td>50</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>monoj kumar</td>
                      <td>50</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>monoj kumar</td>
                      <td>50</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="shop-product-stack-item">
              <div className="shop-details-title">
                <h4>Most Sold Item</h4>
              </div>
              <div className="table-container">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>monoj kumar</td>
                      <td>50</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>monoj kumar</td>
                      <td>50</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>monoj kumar</td>
                      <td>50</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <div className="dashboard-map">
              <ChartMap />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
DashboardPage.layout = DashboardLayout;
export default DashboardPage;
// export default withAuth(DashboardPage);
