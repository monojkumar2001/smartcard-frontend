import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import DashboardLayout from '../../components/Layout/DashboardLayout';
const CategoryPage = () => {
  return (
    <>
               <div className="dashboard-content-wrapper">
                <div className="category-header">
                    <h3>Category</h3>
                    <button className='custom-btn-alt'>
                        New Category
                    </button>
                </div>
                <div className="category-content">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="category-item-cards">
                                <div className="category-item-left">
                                    <h4>terfasdffh</h4>
                                    <p>Inventory Items: <span>0</span></p>
                                </div>
                                <div className="category-item-rigt">
                                    <button><span><RiDeleteBin6Line /></span> </button>
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