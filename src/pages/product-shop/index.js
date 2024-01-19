import React, { useState } from 'react'
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { IoSearch } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import Link from 'next/link';
const ProductShopPage = () => {
    const [productActive, setProductActive] = useState(1);
    const handleProduct = (index) => {
        setProductActive(index);
    }
    return (
        <>
            <div className="dashboard-content-wrapper">
                <div className="product-shop-header">
                    <div className="product-shop-search">
                        <span><IoSearch /></span>
                        <input type="text" placeholder='Search Items' />
                    </div>
                    <Link href={'/product-shop/new'}>
                        <div className="add-product-shop">
                            <p><span><IoMdAdd /></span> Add Product</p>
                        </div>
                    </Link>
                </div>
                <div className="product-shop-wrapper">
                    <div className="product-shop-items">
                        <ul>
                            <li className={`${productActive === 1 ? "product-shop-item active" : "product-shop-item"}`}>
                                All
                            </li>
                            <li className={`${productActive === 2 ? "product-shop-item active" : "product-shop-item"}`}>
                                Helal
                            </li>
                            <li className={`${productActive === 2 ? "product-shop-item active" : "product-shop-item"}`}>
                                Monoj
                            </li>
                        </ul>
                    </div>
                    <div className={`${productActive === 1 ? "product-shop-item-content active" : "product-shop-item-content"}`}>
                        <div className="product-shop-item-wrapper">
                            <Link href={'/product-shop/[id]'}>
                                <div className="product-shop-item-card">
                                    <div className="product-img">
                                        <img src="/assets/product/shop-1.png" alt="" />
                                    </div>
                                    <h2 className="product-title">

                                    </h2>
                                    <div className="product-shop-price-item">
                                        <p>Stock: <span>16</span></p>
                                        <p>Price: <span>24</span> BDT</p>
                                    </div>
                                    <div className="product-shop-btn">
                                        <button><span><FiShoppingCart /></span> Add to Cart</button>
                                    </div>
                                </div>
                            </Link>

                            <div className="product-shop-item-card">
                                <div className="product-img">
                                    <img src="/assets/product/shop-1.png" alt="" />
                                </div>
                                <h2 className="product-title">

                                </h2>
                                <div className="product-shop-price-item">
                                    <p>Stock: <span>16</span></p>
                                    <p>Price: <span>24</span> BDT</p>
                                </div>
                                <div className="product-shop-btn">
                                    <button><span><FiShoppingCart /></span> Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
ProductShopPage.layout = DashboardLayout;
export default ProductShopPage