import React, { useState } from 'react'
import { IoMdAdd } from 'react-icons/io';

const DeliveryChargesFrom = () => {
    const [deliveryCharges, setDeliveryCharges] = useState([{ selectValue: '', inputValue: '' }]);

    const handleSelectChange = (index, value) => {
        const newCharges = [...deliveryCharges];
        newCharges[index].selectValue = value;
        setDeliveryCharges(newCharges);
    };

    const handleInputChange = (index, value) => {
        const newCharges = [...deliveryCharges];
        newCharges[index].inputValue = value;
        setDeliveryCharges(newCharges);
    };

    const handleAddButtonClick = () => {
        setDeliveryCharges([...deliveryCharges, { selectValue: '', inputValue: '' }]);
    };

    const handleRemoveButtonClick = (index) => {
        const newCharges = [...deliveryCharges];
        newCharges.splice(index, 1);
        setDeliveryCharges(newCharges);
    };
    return (
        <>
            <div className="row mt-4">
                <div className="col-md-12">
                    <form action="">
                        <div className="form-input-wrapper">
                            <div className="form-input-header">
                                <h2>Delivery Charges</h2>
                            </div>
                            <div className="form-input-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-input-item">
                                            <label htmlFor="deliveryt_charge">Delivery Charge (Default)</label>
                                            <input type="text" name='delivery_charge' id='delivery_charge' placeholder='Enter Your Business Name' required />
                                            <span>Default delivery charge will be applied to all areas, except for the specific zones listed below.</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-input-item">
                                        <label htmlFor="country">Specific Delivery Charges</label>

                                        {deliveryCharges.map((charge, index) => (
                                            <div className="delivery-charge-list" key={index}>
                                                <select
                                                    className="form-select form-select-lg"
                                                    aria-label=".form-select-lg example"
                                                    value={charge.selectValue}
                                                    onChange={(e) => handleSelectChange(index, e.target.value)}
                                                >
                                                    <option value="">Open this select menu</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>

                                                <input
                                                    type="number"
                                                    value={charge.inputValue}
                                                    onChange={(e) => handleInputChange(index, e.target.value)}
                                                />

                                                <button className="delivery-add-btn" onClick={() => handleRemoveButtonClick(index)}>
                                                    Remove
                                                </button>
                                            </div>
                                        ))}

                                        <button className="custom-btn-alt delivery-charge-list-btn" onClick={handleAddButtonClick}>
                                        <span><IoMdAdd /></span>
                                            Add
                                        </button>

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
                                <button type='submit' className='custom-btn-alt' >Update Delivery Charge </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default DeliveryChargesFrom