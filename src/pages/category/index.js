import React from "react";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import CreateCategory from "../../components/AllModel/CreateCategory";
import EditCategory from "../../components/AllModel/EditCategory";
import DeleteCategory from "../../components/AllModel/DeleteCategory";
const CategoryPage = () => {
    
  return (
    <>
      <div className="dashboard-content-wrapper">
        <div className="category-header d-flex align-items-center justify-content-between gap-3">
          <h3 className="dasbhoard-header-title">Category</h3>
          <CreateCategory />
        </div>
        <div className="category-content">
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="category-item-card">
                <EditCategory />
                <div className="category-item-right">
                  <DeleteCategory />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="category-item-card">
                <EditCategory />
                <div className="category-item-right">
                  <DeleteCategory />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="category-item-card">
                <EditCategory />
                <div className="category-item-right">
                  <DeleteCategory />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="category-item-card">
                <EditCategory />
                <div className="category-item-right">
                  <DeleteCategory />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="category-item-card">
                <EditCategory />
                <div className="category-item-right">
                  <DeleteCategory />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
CategoryPage.layout = DashboardLayout;
export default CategoryPage;
