import React from 'react'

const ShopSettingsForm = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <form action="">
                        <div className="form-input-wrapper">
                            <div className="form-input-header">
                                <h2>Shop Settings</h2>
                            </div>
                            <div className="form-input-body">
                                <h3>Maintain Stock Quantity</h3>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-input-item">
                                            <label htmlFor="shop_vat">VAT / Tax Percentage</label>
                                            <input type="number" name='shop_vat' id='shop_vat' placeholder='Enter Your Business Name' required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-input-item">
                                            <label htmlFor="payment_message_note">Payment process message note</label>
                                            <textarea name="payment_message_note" id="payment_message_note" cols="30" rows="5" placeholder='Payment process message note'></textarea>
                                        </div>
                                    </div>

                                </div>
                                <button type='submit' className=''>Update Shop Setting</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default ShopSettingsForm