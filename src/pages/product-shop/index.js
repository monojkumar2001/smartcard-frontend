import React, { useState } from 'react'
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { IoSearch } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { FiShoppingCart } from "react-icons/Fi";
import Link from 'next/link';
import { FaEdit } from "react-icons/fa";
const ProductShopPage = () => {
    const [productActive, setProductActive] = useState(1);
    const handleProduct = (index) => {
        setProductActive(index);
    }
    const originalText = "In Bootstrap, you can use the utility class fw-fit-content to set the width of an element to fit its content. This class sets the width property to fit-content.";
    const maxLength = 30;
    const truncatedText = originalText.length > maxLength ? originalText.slice(0, maxLength) + '...' : originalText;
    return (
        <>
            <div className="dashboard-content-wrapper">
                <div className="product-shop-header">
                    <div className="product-shop-search">
                        <span><IoSearch /></span>
                        <input type="text" placeholder='Search Items...' />
                    </div>
                    <Link href={'/product-shop/new'}>
                        <div className="add-product-shop custom-btn-alt">
                            <p><span><IoMdAdd /></span> Add Product</p>
                        </div>
                    </Link>
                </div>
                <div className="product-shop-wrapper mt-4">
                    <div className="product-shop-items">    
                        <ul>
                            <li className={`${productActive === 1 ? "product-shop-item active" : "product-shop-item"}`} onClick={()=>handleProduct(1)}>
                                All
                            </li>
                            <li className={`${productActive === 2 ? "product-shop-item active" : "product-shop-item"}`} onClick={()=>handleProduct(2)}>
                                Helal
                            </li>
                            <li className={`${productActive === 3 ? "product-shop-item active" : "product-shop-item"}`} onClick={()=>handleProduct(3)}>
                                Monoj
                            </li>
                        </ul>
                    </div>
                    <div className={`${productActive === 1 ? "product-shop-item-content active" : "product-shop-item-content"}`}>
                        <div className="product-shop-item-wrapper mt-4">
                            <Link href={'/product-shop/[id]'}>
                                <div className="product-shop-item-card">
                                    <div className="product-img">
                                        <img src="/assets/images/product/shop-1.png" alt="" />
                                    </div>
                                   <div className="product-shop-content">
                                   <h2 className="product-title">
                                    {truncatedText}
                                    </h2>
                                    <div className="product-shop-price-item">
                                        <p>Stock: <span>16</span></p>
                                        <p>Price: <span>24</span> BDT</p>
                                    </div>
                                    <div className="product-shop-btn custom-btn-alt">
                                        <button><span><FaEdit /></span> Update Cart</button>
                                    </div>
                                   </div>
                                </div>
                            </Link>
                            <Link href={'/product-shop/[id]'}>
                                <div className="product-shop-item-card">
                                    <div className="product-img">
                                        <img src="/assets/images/product/shop-1.png" alt="" />
                                    </div>
                                   <div className="product-shop-content">
                                   <h2 className="product-title">
                                    {truncatedText}
                                    </h2>
                                    <div className="product-shop-price-item">
                                        <p>Stock: <span>16</span></p>
                                        <p>Price: <span>24</span> BDT</p>
                                    </div>
                                    <div className="product-shop-btn custom-btn-alt">
                                        <button><span><FaEdit /></span> Update Cart</button>
                                    </div>
                                   </div>
                                </div>
                            </Link>
                            <Link href={'/product-shop/[id]'}>
                                <div className="product-shop-item-card">
                                    <div className="product-img">
                                        <img src="/assets/images/product/shop-1.png" alt="" />
                                    </div>
                                   <div className="product-shop-content">
                                   <h2 className="product-title">
                                    {truncatedText}
                                    </h2>
                                    <div className="product-shop-price-item">
                                        <p>Stock: <span>16</span></p>
                                        <p>Price: <span>24</span> BDT</p>
                                    </div>
                                    <div className="product-shop-btn custom-btn-alt">
                                        <button><span><FaEdit /></span> Update Cart</button>
                                    </div>
                                   </div>
                                </div>
                            </Link>
                            <Link href={'/product-shop/[id]'}>
                                <div className="product-shop-item-card">
                                    <div className="product-img">
                                        <img src="/assets/images/product/shop-1.png" alt="" />
                                    </div>
                                   <div className="product-shop-content">
                                   <h2 className="product-title">
                                    {truncatedText}
                                    </h2>
                                    <div className="product-shop-price-item">
                                        <p>Stock: <span>16</span></p>
                                        <p>Price: <span>24</span> BDT</p>
                                    </div>
                                    <div className="product-shop-btn custom-btn-alt">
                                        <button><span><FaEdit /></span> Update Cart</button>
                                    </div>
                                   </div>
                                </div>
                            </Link>
                            <Link href={'/product-shop/[id]'}>
                                <div className="product-shop-item-card">
                                    <div className="product-img">
                                        <img src="/assets/images/product/shop-1.png" alt="" />
                                    </div>
                                   <div className="product-shop-content">
                                   <h2 className="product-title">
                                    {truncatedText}
                                    </h2>
                                    <div className="product-shop-price-item">
                                        <p>Stock: <span>16</span></p>
                                        <p>Price: <span>24</span> BDT</p>
                                    </div>
                                    <div className="product-shop-btn custom-btn-alt">
                                        <button><span><FaEdit /></span> Update Cart</button>
                                    </div>
                                   </div>
                                </div>
                            </Link>
                            <Link href={'/product-shop/[id]'}>
                                <div className="product-shop-item-card">
                                    <div className="product-img">
                                        <img src="/assets/images/product/shop-1.png" alt="" />
                                    </div>
                                   <div className="product-shop-content">
                                   <h2 className="product-title">
                                    {truncatedText}
                                    </h2>
                                    <div className="product-shop-price-item">
                                        <p>Stock: <span>16</span></p>
                                        <p>Price: <span>24</span> BDT</p>
                                    </div>
                                    <div className="product-shop-btn custom-btn-alt">
                                        <button><span><FaEdit /></span> Update Cart</button>
                                    </div>
                                   </div>
                                </div>
                            </Link>
                            <Link href={'/product-shop/[id]'}>
                                <div className="product-shop-item-card">
                                    <div className="product-img">
                                        <img src="/assets/images/product/shop-1.png" alt="" />
                                    </div>
                                   <div className="product-shop-content">
                                   <h2 className="product-title">
                                    {truncatedText}
                                    </h2>
                                    <div className="product-shop-price-item">
                                        <p>Stock: <span>16</span></p>
                                        <p>Price: <span>24</span> BDT</p>
                                    </div>
                                    <div className="product-shop-btn custom-btn-alt">
                                        <button><span><FaEdit /></span> Update Cart</button>
                                    </div>
                                   </div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
ProductShopPage.layout = DashboardLayout;
export default ProductShopPage