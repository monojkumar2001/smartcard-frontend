import React from "react";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import CreateCategoryModal from "../../components/AllModel/CreateCategoryModal";
import EditCategoryModal from "../../components/AllModel/EditCategoryModal";
import DeleteCategoryModal from "../../components/AllModel/DeleteCategoryModal";
const CategoryPage = () => {
    
  return (
    <>
      <div className="dashboard-content-wrapper">
        <div className="category-header d-flex align-items-center justify-content-between gap-3">
          <h3 className="dasbhoard-header-title">Category</h3>
          <CreateCategoryModal />
        </div>
        <div className="category-content">
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="category-item-card">
                <EditCategoryModal />
                <div className="category-item-right">
                  <DeleteCategoryModal />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="category-item-card">
                <EditCategoryModal />
                <div className="category-item-right">
                  <DeleteCategoryModal />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="category-item-card">
                <EditCategoryModal />
                <div className="category-item-right">
                  <DeleteCategoryModal />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="category-item-card">
                <EditCategoryModal />
                <div className="category-item-right">
                  <DeleteCategoryModal />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="category-item-card">
                <EditCategoryModal />
                <div className="category-item-right">
                  <DeleteCategoryModal />
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
