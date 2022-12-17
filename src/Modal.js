import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className="modal" id="modal" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal__dialog">
                <section className="modal__content">
                    <div className="border-p">
                        <header className="modal__header">
                            <h1>KHU VỰC ĐẶT HÀNG</h1>
                            <h5>Bạn ơi! khu vực bạn nhận hàng ở đâu</h5>
                            <a href="#" onClick={hide} className="modal__close">×</a>
                        </header>
                        <div className="modal__body">
                            <form action="/action_page.php" className="form-home">
                                <select name="cars" id="carst" className="option">
                                    <option value="volvo">Chọn khu vực</option>
                                    <option value="saab">Saab</option>
                                </select> <br/>
                                <select name="cars" id="carst" className="option">
                                    <option value="volvo">Chọn cửa hàng</option>
                                    <option value="saab">Saab</option>
                                </select>
                                <br/>
                                <div className="btn-xacnhan">
                                    <a href="/thucdon.html">Xác nhận</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </React.Fragment>, document.body
) : null;

export default Modal;