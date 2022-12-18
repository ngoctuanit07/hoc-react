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
            <div className="home-mobile">
                <div className="header">
                    <div className="logo">VFOOD.COM</div>
                    <div className="btn-mobile">
                        <a href="#modal" className="btn-thucdon-mobile">THỰC ĐƠN</a>
                        <a href><img src="images/ngon-ngu-mobile.png" alt="" width="80%"/></a>
                        <button href onClick="open_nav()"><img src="images/menu-mobile.png" alt="" width="80%"/>
                        </button>
                    </div>
                </div>
                <div className="menu">
                    <div className="menu-silbar-h" id="nav">
                        <ul>
                            <li><a href="index.html" className="tracuu">Trang chủ</a></li>
                            <li><a href="tracuudonhang.html" className="tracuu">Tra cứu đơn hàng</a></li>
                            <li>Về Chúng Tôi</li>
                            <li>Chính Sách VFOOD.PH</li>
                            <li>Chính sách và phí giao hàng</li>
                            <li>Blog</li>
                        </ul>
                        <div className="icon-close" onClick="close_nav()">
                            <i className="fa fa-times" aria-hidden="true"/>
                        </div>
                    </div>
                </div>
                <div className="bg-home-mobile">
                    <img src={home} alt="" width="100%"/>
                    <div className="content-home-mobile">
                        <h1>VFOOD.PH <br/>
                            ẨM THỰC VIỆT <br/>
                            HƯƠNG VỊ VIỆT</h1>
                        <p> Chào mừng bạn đến với VFOOD.PH, NƠI CUNG CẤP CÁC MÓN ĂN VIỆT NAM Niêu đất không là chỉ
                            dấu ấn của văn
                            hóa ẩm thực Việt mà còn là bí quyết để tạo nên món ăn ngon độc đáo. Cơm
                            Niêu Sài Gòn giữ trọn hương vị truyền thông,
                            góp một phần nhỏ của mình giữ vững làng nghề làm niêu đất. </p>
                    </div>
                    <div className="list-uudai-mobile">
                        <div className="list-item-mobile">
                            <ul>
                                <li>MIỄN PHÍ SHIP</li>
                                <li>Hóa đơn trên 500K</li>
                                <li>Miễn phí ship</li>
                            </ul>
                        </div>
                        <div className="list-item-mobile">
                            <ul>
                                <li>QUÀ TẶNG ĐI KÈM</li>
                                <li>Hóa đơn trên 500K</li>
                                <li>Miễn phí ship</li>
                            </ul>
                        </div>
                        <div className="list-item-mobile">
                            <ul>
                                <li>NHIỀU KHUYẾN MÃI THÀNH VIÊN</li>
                                <li>Hóa đơn trên 500K</li>
                                <li>Miễn phí ship</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-mobile">
                    <h1>HOTLINE</h1>
                    <h1>090 2252 0000</h1>
                    <div className="info-contact-mobile">
                        <img src={fb} alt=""/>
                        <img src={tele} alt=""/>
                    </div>
                </div>
                <div className="footer2-mobile">
                    <p>Copyright © 2022 VFOOD.PH VIETNAM | LTD | All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;