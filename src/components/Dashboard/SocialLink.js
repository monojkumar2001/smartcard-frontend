import React from 'react'

const SocialLink = () => {
    return (
        <div className="row mt-4">
            <div className="col-md-12">
                <form action="">
                    <div className="form-input-wrapper">
                        <div className="form-input-header">
                            <h2>Social Links</h2>
                        </div>
                        <div className="form-input-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-input-item">
                                        <label htmlFor="facebook">Facebook</label>
                                        <input type="text" name='facebook' id='facebook' placeholder='https://www.facebook.com/myshop' required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-input-item">
                                        <label htmlFor="instagram">Instagram</label>
                                        <input type="text" name='instagram' id='instagram' placeholder='https://www.instagram.com/myshop' required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-input-item">
                                        <label htmlFor="linkedin">Linkedin</label>
                                        <input type="text" name='linkedin' id='linkedin' placeholder='https://www.linkedin.com/myshop' required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-input-item">
                                        <label htmlFor="instagram">Youtube</label>
                                        <input type="text" name='youtube' id='youtube' placeholder='https://www.youtube.com/myshop' required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-input-item">
                                        <label htmlFor="tiktok">Tiktok</label>
                                        <input type="text" name='tiktok' id='tiktok' placeholder='https://www.tiktok.com/myshop' required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-input-item">
                                        <label htmlFor="Discord">Discord</label>
                                        <input type="text" name='discord' id='discord' placeholder='https://www.discord.com/myshop' required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-input-item">
                                        <label htmlFor="telegram">Telegram</label>
                                        <input type="text" name='telegram' id='telegram' placeholder='https://www.telegram.com/myshop' required />
                                    </div>
                                </div>
                            </div>
               
                            <button type='submit' className='custom-btn-alt'>Update Social Links</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SocialLink