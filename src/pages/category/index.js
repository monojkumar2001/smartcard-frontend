import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import DashboardLayout from '../../components/Layout/DashboardLayout';
const CategoryPage = () => {
  return (
    <>
               <div className="dashboard-content-wrapper">
                <div className="category-header d-flex align-items-center justify-content-between gap-3">
                    <h3 className='dasbhoard-header-title'>Category</h3>
                    <button className='custom-btn-alt'>
                        New Category
                    </button>
                </div>
                <div className="category-content">
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="category-item-card">
                                <div className="category-item-left">
                                    <h4>terfasdffh</h4>
                                    <p>Inventory Items: <span>0</span></p>
                                </div>
                                <div className="category-item-right">
                                    <button><RiDeleteBin6Line /> </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="category-item-card">
                                <div className="category-item-left">
                                    <h4>terfasdffh</h4>
                                    <p>Inventory Items: <span>0</span></p>
                                </div>
                                <div className="category-item-right">
                                    <button><RiDeleteBin6Line /> </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="category-item-card">
                                <div className="category-item-left">
                                    <h4>terfasdffh</h4>
                                    <p>Inventory Items: <span>0</span></p>
                                </div>
                                <div className="category-item-right">
                                    <button><RiDeleteBin6Line /> </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="category-item-card">
                                <div className="category-item-left">
                                    <h4>terfasdffh</h4>
                                    <p>Inventory Items: <span>0</span></p>
                                </div>
                                <div className="category-item-right">
                                    <button><RiDeleteBin6Line /> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
               </div>
    
    </>
  )
}
CategoryPage.layout = DashboardLayout;
export default CategoryPage