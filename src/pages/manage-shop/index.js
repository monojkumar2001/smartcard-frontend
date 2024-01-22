import React from 'react'
import DashboardLayout from '../../components/Layout/DashboardLayout'
import UpdateShopInfoForm from '../../components/Dashboard/UpdateShopInfoForm';
import ShopSettingsForm from '../../components/Dashboard/ShopSettingsForm';
import ShopQR from '../../components/Dashboard/ShopQR';
import DeliveryChargesFrom from '../../components/Dashboard/DeliveryChargesFrom';
import SocialLink from '../../components/Dashboard/SocialLink';
import ShopLogo from '../../components/Dashboard/ShopLogo';
import ShopColor from '../../components/Dashboard/ShopColor';

const ManageShopPage = () => {
    
    return (
        <>
            <div className="dashboard-content-wrapper">
                <div className="row">
                    <div className="col-md-8">
                        <UpdateShopInfoForm />
                        <ShopSettingsForm />
                        <DeliveryChargesFrom/>
                        <SocialLink/>
                    </div>
                    <div className="col-md-4">
                        <ShopQR />
            <ShopLogo/>
                        
              <ShopColor/>
                    </div>
                </div>
            </div>
        </>
    )
}
ManageShopPage.layout = DashboardLayout;
export default ManageShopPage