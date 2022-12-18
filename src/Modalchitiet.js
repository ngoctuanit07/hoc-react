import React from 'react';
import ReactDOM from 'react-dom';

const Modalchitiet = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className="modal" id="modal-chitiet" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal__dialog">
                <section className="modal__content modal-chitiet">
                    <div className="img-popup">
                        <img src="images/sp-giohang2-removebg-preview.png" alt="" width="20%" />
                    </div>
                    <h1>RAU MUỐNG XÀO TỎI</h1>
                    <p>Thành phần</p>
                    <p>Rau muống tỏi</p>
                    <a href="#" className="modal__close modal-chitiet-close">×</a>
                    <div className="main-pop">
                        <div className="checkbox">
                            <div className="title-checkbox">Thêm</div>
                            <div className="item-checkbox row">
                                <div className="checkbox-cart col-5">
                                    <input type="checkbox" id="vehicle2" name="vehicle2" defaultValue="Car" />
                                    <label htmlFor="vehicle1"> Trứng chiên</label> <br />
                                </div>
                                <div className="btn-check-box  col-4">
                                    <a href="#0" className="tru">-</a>
                                    <p>2</p>
                                    <a href="#0" className="cong">+</a>
                                </div>
                                <div className="p col-3">
                                    <p>P300</p>
                                </div>
                            </div>
                            <div className="item-checkbox row">
                                <div className="checkbox-cart col-5">
                                    <input type="checkbox" id="vehicle2" name="vehicle2" defaultValue="Car" />
                                    <label htmlFor="vehicle1"> Chả lụa</label> <br />
                                </div>
                                <div className="btn-check-box  col-4">
                                    <a href="#0" className="tru">-</a>
                                    <p>2</p>
                                    <a href="#0" className="cong">+</a>
                                </div>
                                <div className="p col-3">
                                    <p>P300</p>
                                </div>
                            </div>
                        </div>
                        <div className="ghichu">
                            <h5>Ghi chú</h5>
                            <input type="text" />
                        </div>
                    </div>
                    <div className=" btn-cart-checkout item-btn checkout ">
                        <a href>-</a>
                        <p>2</p>
                        <a href>+</a>
                    </div>
                    <div className="footer-popup">
                        <p>TỔNG: P600</p>
                        <div className="tong">
                            <a href>Thêm vào giỏ </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </React.Fragment>, document.body
) : null;

export default Modalchitiet;