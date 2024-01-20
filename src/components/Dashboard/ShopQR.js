import QRCode from 'qrcode.react';
import React, { useState } from 'react'
import { IoDownloadOutline } from "react-icons/io5";
import { FaRegCopy } from "react-icons/fa";
const ShopQR = () => {
    const shopLink = 'https://zatiqeasy.com/shop/11168';
    const [isCopied, setCopied] = useState(false);

    const handleCopyClick = () => {
        const textArea = document.createElement('textarea');
        textArea.value = shopLink;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');

            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 5000);
        } catch (err) {
            console.error('Unable to copy text to clipboard.', err);
        } finally {
            document.body.removeChild(textArea);
        }
    };
  return (
    <>
      <div className="row">
                <div className="col-md-12">
                    <form action="">
                        <div className="form-input-wrapper">
                            <div className="form-input-header">
                                <h2>Shop QR</h2>
                            </div>
                            <div className="form-input-body form-input-qr-code">
                            <div className="shop-qr-code">
                                    <QRCode
                                        value={``}
                                        size={200}
                                    />
                                </div>
                                <p>Scan the QR code to visit your shop</p>
                                <div className="shop-copy-links">
                                <h5>{shopLink}</h5>
                                <p onClick={handleCopyClick} className="copy-icon">
                                    <FaRegCopy />
                                    <span className="shop-copy-text">{isCopied ? 'Copied!' : ''}</span>
                                </p>
                            </div>
                                <button type='submit' className='custom-btn-alt w-100'><span><IoDownloadOutline /></span> Save QR Code</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    </>
  )
}

export default ShopQR