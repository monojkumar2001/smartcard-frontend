import React from "react";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import Link from "next/link";

const OrderPage = () => {
  return (
    <>
      <div className="dashboard-content-wrapper">
        <div className="row">
          <div className="col-md-4">
            <div className="form-input-item">
              <label htmlFor="deliveryt_charge">Select Order Type</label>
              <select
                className="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
              >
                <option selected>All</option>
                <option value="1">In Shop</option>
                <option value="2">Online</option>
              </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-input-item">
              <label htmlFor="deliveryt_charge">Select Order Status</label>
              <select
                className="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
              >
                <option selected>All</option>
                <option value="1">Order Placed</option>
                <option value="1">Order Cancelled</option>
                <option value="1">Order Completed</option>
              </select>
            </div>
          </div>
        </div>
        <div className="order-all-table">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr className="bg-gray">
                  <th scope="col">Order Id</th>
                  <th scope="col">Bill ID</th>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Total Products</th>
                  <th scope="col">Price</th>
                  <th scope="col">Date</th>
                  <th scope="col">Order Type</th>
                  <th scope="col">Order Status</th>
                </tr>
              </thead>
              <tbody>
                <Link href={"/order/[id]"}>
                  <tr>
                    <td scope="row">1</td>
                    <td>20883</td>
                    <td>asfd</td>
                    <td>1</td>
                    <td>32.00</td>
                    <td> 17/01/2024 | 07:48 PM</td>
                    <td>Online</td>
                    <td>Completed</td>
                  </tr>
                </Link>
              </tbody>
            </table>
          </div>
        </div>
        <div className="order-table-page d-flex align-items-center gap-3 justify-content-between">
          <div className="order-table-footer-item d-flex align-items-center gap-2">
            <p>Orders Per Page</p>
            <select
              className="form-select form-select-md"
              aria-label=".form-select-lg example"
            >
              <option selected>10</option>
              <option value="1">5</option>
              <option value="2">20</option>
            </select>
          </div>
          <p className="order-page-number">page 1</p>
          <div className="order-table-footer-btn d-flex align-items-center gap-2">
            <button className="custom-btn-alt">Previous</button>
            <button className="custom-btn-alt">Next</button>
          </div>
        </div>
      </div>
    </>
  );
};
OrderPage.layout = DashboardLayout;
export default OrderPage;
