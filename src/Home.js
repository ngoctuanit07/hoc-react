import React from 'react';
import home from './images/flat-lay-tray-with-vientamese-food.png';
import fb from './images/fb.png';
import tele from './images/tele.png';
import Modal from "./Modal";
import useModal from './useModal';
function Home() {
    const {isShowing, toggle} = useModal();
    return (
        <div>
            <Modal
                isShowing={isShowing}
                hide={toggle}
            />
            <div className="home row">
                <div className="img-home col-12 col-sm-5">
                    <img src={home} alt="" height="100%"/>
                    <div className="logo-name">
                        <h3>VFOOD.COM</h3>
                    </div>
                </div>
                <div className="content-main col-sm-7">
                    <div className="content-left-head">
                        <div className="btn-home">
                            <button onClick={toggle} className="btn-thucdon ">THỰC ĐƠN</button>
                            <a href="tracuudonhang.html" className="btn-tracuu">TRA CỨU ĐƠN HÀNG</a>
                            <a href className="ngonngu"><img src="images/Group 37.png" alt="" width="70%"/></a>
                        </div>

                        <div className="content-info">
                            <h1>VFOOD.PH <br/>
                                <span>ẨM THỰC VIỆT <br/> HƯƠNG VỊ VIỆT</span>
                            </h1>
                            <p> Chào mừng bạn đến với VFOOD.PH, NƠI CUNG CẤP CÁC MÓN ĂN VIỆT <br/>
                                NAM Niêu đất không là chỉ dấu ấn của văn hóa ẩm thực Việt mà còn là bí <br/>
                                quyết để tạo nên món ăn ngon độc đáo. Cơm Niêu Sài Gòn giữ trọn hương <br/> vị
                                truyền thông, góp một
                                phần nhỏ của mình giữ vững làng nghề làm niêu <br/>
                                đất. </p>
                        </div>
                        <div className="list row">
                            <div className="list-item col-4">
                                <ul>
                                    <li className="title-list">MIỄN PHÍ SHIP</li>
                                    <li className="content-list">Hóa đơn trên 500K</li>
                                    <li className="content-list">Miễn phí ship</li>
                                </ul>
                            </div>
                            <div className="list-item col-4">
                                <ul>
                                    <li className="title-list">QUÀ TẶNG ĐI CÙNG</li>
                                    <li className="content-list">Hóa đơn trên 500K</li>
                                    <li className="content-list">Miễn phí ship</li>
                                </ul>
                            </div>
                            <div className="list-item col-4">
                                <ul>
                                    <li className="title-list">NHIỀU KHUYẾN MÃI THÀNH VIÊN</li>
                                    <li className="content-list">Hóa đơn trên 500K</li>
                                    <li className="content-list">Miễn phí ship</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="footer-main row">
                            <div className="footer-main-item col-4">
                                <h1 className="title-footer-main">VFOOD.VH</h1>
                                <p>Luôn đem đến những món <br/> ngon phục vụ quý khách tốt <br/> nhất</p>
                            </div>
                            <div className="footer-main-item col-4">
                                <h1 className="title-footer-hotline">HOTLINE</h1>
                                <h2>090 2252 000</h2>
                                <div className="info-contact">
                                    <img src={fb} alt="" width="50%"/>
                                    <img src={tele} alt="" width="50%"/>
                                </div>
                            </div>
                            <div className="footer-main-item col-4">
                                <ul>
                                    <li>Về chúng tôi</li>
                                    <li>Chính sách VFOOD.PH</li>
                                    <li>Chính sách và phí giao hàng</li>
                                    <li>Blog</li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-child">
                            <p>Copyright © 2022 VFOOD.PH VIETNAM | LTD | All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;