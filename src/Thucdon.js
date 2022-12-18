import React from 'react';
import home from './images/flat-lay-tray-with-vientamese-food.png';
import oclock from './images/oclock.png';
import phone from './images/oclock.png';
import fb from './images/fb.png';
import tele from './images/tele.png';
import Modal from "./Modal";
import footerThucdon from './images/img-footer-thucdon.png';
import sanpham from './images/sanpham.png';
import search from './images/search.png';
import edit from './images/edit.png';
import removebg from './images/sp-giohang2-removebg-preview.png';
import ngongu from './images/ngongu.png';
import useModal from './useModal';
function Thucdon() {
    const {isShowing, toggle} = useModal();
    return (
        <div>
            <div className="main-thucdon-pc row">
                <div className="silbar-thucdon col-2">
                    <div className="mini-silbar  col-2 position-fixed">
                        <div className="title-silbar">
                            <a href="index.html"><h1>VFOOD.PH</h1></a>
                        </div>
                        <div className="list-thucdon">
                            <ul>
                                <li className="active"><a href className="active">CƠM VĂN PHÒNG</a></li>
                                <li><a href> BÚN, PHỞ</a></li>
                                <li><a href>MÓN HẢI SẢN</a></li>
                                <li><a href>ĂN VẶT</a></li>
                            </ul>
                        </div>
                        <div className="footer-thucdon">
                            <div className="content-footer row">
                                <div className="btn-chat col-12">
                                    <button>Chat</button>
                                </div>
                                <div className="contact-footer col-10">
                                    <div className="img-contact">
                                        <img src={oclock} alt="" />
                                        <p>8h sáng - 10h tối</p>
                                    </div>
                                    <div className="img-contact">
                                        <img src={phone} alt="" />
                                        <p>090 2202 000</p>
                                    </div>
                                    <div className="img-contact">
                                        <img src={fb} alt="" />
                                        <p>VFOOD.PH</p>
                                    </div>
                                </div>
                            </div>
                            <div className="img-footer-thucdon">
                                <img src={footerThucdon} alt="" width="100%" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="thucdon col-8">
                    <div className="products nowrap ">
                        <div className="box-product">
                            <div className="price">
                                <h2>RAU MUỐNG XÀO CẢI</h2>
                                <h1>P150</h1>
                                <p>Thành phần: <br />
                                    Rau muống, tỏi
                                </p>
                                <div className="btn-datngay">
                                    <a href="#modal-chitiet">ĐẶT MÓN</a>
                                </div>
                            </div>
                            <div className="img-product">
                                <img src={sanpham} alt="" />
                            </div>
                        </div>
                        <div className="box-product">
                            <div className="price">
                                <h2>RAU MUỐNG XÀO CẢI</h2>
                                <h1>P150</h1>
                                <p>Thành phần: <br />
                                    Rau muống, tỏi
                                </p>
                                <div className="btn-datngay">
                                    <a href="#modal-chitiet">ĐẶT MÓN</a>
                                </div>
                            </div>
                            <div className="img-product">
                                <img src={sanpham} alt="" />
                            </div>
                        </div>
                        <div className="box-product">
                            <div className="price">
                                <h2>RAU MUỐNG XÀO CẢI</h2>
                                <h1>P150</h1>
                                <p>Thành phần: <br />
                                    Rau muống, tỏi
                                </p>
                                <div className="btn-datngay">
                                    <a href="#modal-chitiet">ĐẶT MÓN</a>
                                </div>
                            </div>
                            <div className="img-product">
                                <img src={sanpham} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="products nowrap">
                        <div className="box-product">
                            <div className="price">
                                <h2>RAU MUỐNG XÀO CẢI</h2>
                                <h1>P150</h1>
                                <p>Thành phần: <br />
                                    Rau muống, tỏi
                                </p>
                                <div className="btn-datngay">
                                    <a href="#modal-chitiet">ĐẶT MÓN</a>
                                </div>
                            </div>
                            <div className="img-product">
                                <img src={sanpham} alt="" />
                            </div>
                        </div>
                        <div className="box-product">
                            <div className="price">
                                <h2>RAU MUỐNG XÀO CẢI</h2>
                                <h1>P150</h1>
                                <p>Thành phần: <br />
                                    Rau muống, tỏi
                                </p>
                                <div className="btn-datngay">
                                    <a href="#modal-chitiet">ĐẶT MÓN</a>
                                </div>
                            </div>
                            <div className="img-product">
                                <img src={sanpham} alt="" />
                            </div>
                        </div>
                        <div className="box-product">
                            <div className="price">
                                <h2>RAU MUỐNG XÀO CẢI</h2>
                                <h1>P150</h1>
                                <p>Thành phần: <br />
                                    Rau muống, tỏi
                                </p>
                                <div className="btn-datngay">
                                    <a href="#modal-chitiet">ĐẶT MÓN</a>
                                </div>
                            </div>
                            <div className="img-product">
                                <img src={sanpham} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="products nowrap">
                        <div className="box-product">
                            <div className="price">
                                <h2>RAU MUỐNG XÀO CẢI</h2>
                                <h1>P150</h1>
                                <p>Thành phần: <br />
                                    Rau muống, tỏi
                                </p>
                                <div className="btn-datngay">
                                    <a href="#modal-chitiet">ĐẶT MÓN</a>
                                </div>
                            </div>
                            <div className="img-product">
                                <img src={sanpham} alt="" />
                            </div>
                        </div>
                        <div className="box-product">
                            <div className="price">
                                <h2>RAU MUỐNG XÀO CẢI</h2>
                                <h1>P150</h1>
                                <p>Thành phần: <br />
                                    Rau muống, tỏi
                                </p>
                                <div className="btn-datngay">
                                    <a href="#modal-chitiet">ĐẶT MÓN</a>
                                </div>
                            </div>
                            <div className="img-product">
                                <img src={sanpham} alt="" />
                            </div>
                        </div>
                        <div className="box-product">
                            <div className="price">
                                <h2>RAU MUỐNG XÀO CẢI</h2>
                                <h1>P150</h1>
                                <p>Thành phần: <br />
                                    Rau muống, tỏi
                                </p>
                                <div className="btn-datngay">
                                    <a href="#modal-chitiet">ĐẶT MÓN</a>
                                </div>
                            </div>
                            <div className="img-product">
                                <img src={sanpham} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="footer-thucdon-main row">
                        <div className="item-footer-thucdon col-4">
                            <span>VFOOD.PH</span>
                            <p>Luôn mang đến những món <br /> ngon phục vụ quý khách ngon <br /> nhất</p>
                        </div>
                        <div className="item-footer-thucdon col-4">
                            <h2>HOTLINE</h2>
                            <h1>090 2252 000</h1>
                            <div className="contact-thucdon">
                                <img src={fb} alt="" width="40%" />
                                <img src={tele} alt="" width="40%" />
                            </div>
                        </div>
                        <div className="item-footer-thucdon final-ft col-4">
                            <ul>
                                <li>Về chúng tôi</li>
                                <li>Chính sách VFOOD.PH</li>
                                <li>Chính sách giao hàng</li>
                                <li>Phí giao hàng</li>
                            </ul>
                        </div>
                    </div>
                    <div className="ft">
                        <p>Copyright © 2022 VFOOD.PH VIETNAM | LTD | All rights reserved.</p>
                    </div>
                </div>
                <div className="silbar-thucdon col-2  silbar-giohang ">
                    <div className="mini-bar col-2 position-fixed">
                        <div className="title-silbar">
                            <img src={ngongu} alt="" width="35%" />
                            <div className="input-search">
                                <input type="text" placeholder="Bạn tìm món gì" />
                                <div className="search">
                                    <a href><img src={search} alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="giohang">
                            <div className="giohang-title">
                                <h2>GIỎ HÀNG</h2>
                                <div className="number-cart">
                                    <p>3</p>
                                </div>
                            </div>
                            <div className="item-giohang">
                                <div className="item-cart">
                                    <img src={removebg} alt="" width="60%" />
                                    <span>Phở bò đặc biệt</span>
                                    <p>Phở bò phúc đặc biệt</p>
                                    <p>Khăn lạnh</p>
                                    <p>Bò viên</p>
                                </div>
                                <div className="item-btn">
                                    <a href>-</a>
                                    <p>2</p>
                                    <a href>+</a>
                                </div>
                                <div className="edit">
                                    <p>P300</p>
                                    <a href="#modal-chinhsua"><img src={edit} alt="" /></a>
                                    <p><a href> Xóa</a></p>
                                </div>
                            </div>
                            <div className="item-giohang">
                                <div className="item-cart">
                                    <img src={removebg} alt="" width="60%" />
                                    <span>Phở bò đặc biệt</span>
                                    <p>Phở bò phúc đặc biệt</p>
                                    <p>Khăn lạnh</p>
                                    <p>Bò viên</p>
                                </div>
                                <div className="item-btn">
                                    <a href>-</a>
                                    <p>2</p>
                                    <a href>+</a>
                                </div>
                                <div className="edit">
                                    <p>P300</p>
                                    <a href="#modal-chinhsua"><img src={edit} alt="" /></a>
                                    <p><a href> Xóa</a></p>
                                </div>
                            </div>
                            <div className="item-giohang">
                                <div className="item-cart">
                                    <img src={removebg} alt="" width="60%" />
                                    <span>Phở bò đặc biệt</span>
                                    <p>Phở bò phúc đặc biệt</p>
                                    <p>Khăn lạnh</p>
                                    <p>Bò viên</p>
                                </div>
                                <div className="item-btn">
                                    <a href>-</a>
                                    <p>2</p>
                                    <a href>+</a>
                                </div>
                                <div className="edit">
                                    <p>P300</p>
                                    <a href="#modal-chinhsua"><img src={edit} alt="" /></a>
                                    <p><a href> Xóa</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="thanhtoan">
                            <p>Tạm tính</p>
                            <p>P300</p>
                            <a href="thongtindonhang.html">Thanh toán</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Thucdon;