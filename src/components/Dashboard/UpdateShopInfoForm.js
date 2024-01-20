import React from 'react'

const UpdateShopInfoForm = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <form action="">
                        <div className="form-input-wrapper">
                            <div className="form-input-header">
                                <h2>Shop Basic Info</h2>
                            </div>
                            <div className="form-input-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-input-item">
                                            <label htmlFor="business_name">Business Name</label>
                                            <input type="text" name='business_name' id='business_name' placeholder='Enter Your Business Name' required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-input-item">
                                            <label htmlFor="business_name">Business Type</label>
                                            <select class="form-select form-select-lg " aria-label=".form-select-lg example">
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-input-item">
                                            <label htmlFor="shop_email">Shop Email</label>
                                            <input type="text" name='shop_email' id='shop_email' placeholder='Enter Your Business Email' required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-input-item">
                                            <label htmlFor="business_name">Shop Phone Number</label>
                                            <input type="text" placeholder='Enter your Shop Phone Number' />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-input-item">
                                            <label htmlFor="country">Country</label>
                                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-input-item">
                                            <label htmlFor="shop_address">Shop Address</label>
                                            <input type="text" placeholder='Shop Address' id='shop_address' name='shop_address' required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-input-item">
                                            <label htmlFor="shop_details">Shop Details</label>
                                            <textarea name="shop_details" id="shop_details" cols="30" rows="5" placeholder='Enter your Shop Details'></textarea>
                                        </div>
                                    </div>

                                </div>
                                <button type='submit' className='custom-btn-alt'>Update Shop Info</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default UpdateShopInfoForm