import './App.css';
import home from './images/flat-lay-tray-with-vientamese-food.png';
import fb from './images/fb.png';
import tele from './images/tele.png';
import {useMediaQuery} from 'react-responsive';
import Modal from "./Modal";
import useModal from './useModal';

const Desktop = ({children}) => {
    const isDesktop = useMediaQuery({minWidth: 992})
    return isDesktop ? children : null
}
const Tablet = ({children}) => {
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 991})
    return isTablet ? children : null
}
const Mobile = ({children}) => {
    const isMobile = useMediaQuery({maxWidth: 767})
    return isMobile ? children : null
}
const Default = ({children}) => {
    const isNotMobile = useMediaQuery({minWidth: 768})
    return isNotMobile ? children : null
}
function App() {
    const {isShowing, toggle} = useModal();
    return (

        <div>

            <Desktop>
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
            </Desktop>
            <Mobile>
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
            </Mobile>


            {/* home-mobile */}

        </div>
    );
}

export default App;
