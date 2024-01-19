import React from 'react'
import { IoDownloadOutline } from "react-icons/io5";
const ShopQR = () => {
  return (
    <>
      <div className="row">
                <div className="col-md-12">
                    <form action="">
                        <div className="form-input-wrapper">
                            <div className="form-input-header">
                                <h2>Shop QR</h2>
                            </div>
                            <div className="form-input-body">
                            <div className="shop-qr-code">
                                    <QRCode
                                        value={``}
                                        size={100}
                                    />
                                </div>
                                <p>Scan the QR code to visit your shop</p>
                                <div className="shop-copy-link">
                                <p>{shopLink}</p>
                                <span onClick={handleCopyClick}><FaRegCopy /></span>
                                {isCopied && <p>Copied to clipboard!</p>}
                            </div>
                                <button type='submit' className=''><span><IoDownloadOutline /></span> Save QR Code</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    </>
  )
}

export default ShopQR