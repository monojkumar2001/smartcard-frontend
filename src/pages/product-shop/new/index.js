import React from 'react'
import DashboardLayout from '../../../components/Layout/DashboardLayout';
import ProductInfo from '../../../components/Dashboard/ProductInfo';

const AddProductShopPage = () => {
  return (
    <>
        <div className="dashboard-content-wrapper">
            <h2>Add New Product</h2>
                <div className="row">
                    <div className="col-md-9">
                       <ProductInfo/> 
                    </div>
                    <div className="col-md-3">
                    <div className="row">
                <div className="col-md-12">
                    <form action="">
                        <div className="form-input-wrapper">
                            <div className="form-input-header">
                                <h2>Product Images</h2>
                            </div>
                            <div className="form-input-body">
                                <div className="row">
                                    <div className="col-md-12">
                                     <div className="product-upload-img">
                                        <input type="file" />
                                     </div>
                                    </div>
                                </div>                
                                <button type='submit' className=''>Update Delivery Charge </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
                    </div>
                </div>
            </div>
    </>
  )
}
AddProductShopPage.layout = DashboardLayout;
export default AddProductShopPage