import React from "react";
import Sale1 from "../../../assets/images/sale-1.png"
import Sale2 from "../../../assets/images/sale-2.png"
import Sale3 from "../../../assets/images/sale-3.png"
import Sale4 from "../../../assets/images/sale-4.png"
import Sale5 from "../../../assets/images/sale-5.png"
import Sale6 from "../../../assets/images/sale-6.png"
import Sale7 from "../../../assets/images/sale-7.png"
import Sale8 from "../../../assets/images/sale-8.png"
import Cate1 from "../../../assets/images/cate-1.png"
import Cate2 from "../../../assets/images/cate-2.png"
import Cate3 from "../../../assets/images/cate-3.png"
import Cate4 from "../../../assets/images/cate-4.png"
import Cate5 from "../../../assets/images/cate-5.png"
import Cate6 from "../../../assets/images/cate-6.png"
import Cate7 from "../../../assets/images/cate-7.png"
import Cate8 from "../../../assets/images/cate-8.png"
import Cate9 from "../../../assets/images/cate-9.png"
import Cate10 from "../../../assets/images/cate-10.png"
import Cate11 from "../../../assets/images/cate-11.png"
import Cate12 from "../../../assets/images/cate-12.png"
import Cate13 from "../../../assets/images/cate-13.png"
import Cate14 from "../../../assets/images/cate-14.png"
import Cate15 from "../../../assets/images/cate-15.png"
import Cate16 from "../../../assets/images/cate-16.png"
import Cate17 from "../../../assets/images/cate-17.png"
import Cate18 from "../../../assets/images/cate-18.png"
import Cate19 from "../../../assets/images/cate-19.png"
import Cate20 from "../../../assets/images/cate-20.png"
import Flash from "../../../assets/images/flash-sale.png"
import Flash1 from "../../../assets/images/flash-11.jpg"
import Flash2 from "../../../assets/images/flash-2.png"
import Flash3 from "../../../assets/images/flash-3.jpg"
import Flash4 from "../../../assets/images/flash-4.jpg"
import Flash5 from "../../../assets/images/flash-5.png"
import Flash6 from "../../../assets/images/flash-6.jpg"
import Flash8 from "../../../assets/images/flash-bgr.png"
import Banner from "../../../assets/images/bannerIMG.png"
import Fix0 from "../../../assets/images/0d.png"

import LayoutUser from "../../../Layout/User/LayoutUser";


function HomePage() {
    return (
        <LayoutUser>
            <div className="content">
                <div className="grid">
                    {/*Content Banner*/}
                    <div className="content__banner">
                        <div className="content__banner-slider"/>
                        <div className="content__banner-static">
                            <div className="content__banner-static1"/>
                            <div className="content__banner-static2"/>
                        </div>
                    </div>
                    {/*Content Sale*/}
                    <div className="content__sale">
                        <div className="content__sale-list">
                            <a href="#" className="content__sale-link">
                                <div className="content__sale-thumbnail">
                                    <img src={Sale1} alt="???nh ch??a hi???n th???" className="content__sale-img"/>
                                    <div className="content__sale-title">
                                        Tech Zone - Si??u Th??? ??i???n T???
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="content__sale-link">
                                <div className="content__sale-thumbnail">
                                    <img src={Sale2} alt="???nh ch??a hi???n th???" className="content__sale-img"/>
                                    <div className="content__sale-title">
                                        G?? c??ng r??? - T??? 1K
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="content__sale-link">
                                <div className="content__sale-thumbnail">
                                    <img src={Sale3} alt="???nh ch??a hi???n th???" className="content__sale-img"/>
                                    <div className="content__sale-title">
                                        Ho??n Xu 10% - ????n T??? 0??
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="content__sale-link">
                                <div className="content__sale-thumbnail">
                                    <img src={Sale4} alt="???nh ch??a hi???n th???" className="content__sale-img"/>
                                    <div className="content__sale-title">
                                        N???p Th???, H??a ????n & E-voucher
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="content__sale-link">
                                <div className="content__sale-thumbnail">
                                    <img src={Sale5} alt="???nh ch??a hi???n th???" className="content__sale-img"/>
                                    <div className="content__sale-title">
                                        Freeship Xtra
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="content__sale-link">
                                <div className="content__sale-thumbnail">
                                    <img src={Sale6} alt="???nh ch??a hi???n th???" className="content__sale-img"/>
                                    <div className="content__sale-title">
                                        H??ng Hi???u -50%
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="content__sale-link">
                                <div className="content__sale-thumbnail">
                                    <img src={Sale7} alt="???nh ch??a hi???n th???" className="content__sale-img"/>
                                    <div className="content__sale-title">
                                        H??ng Qu???c T???
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="content__sale-link">
                                <div className="content__sale-thumbnail">
                                    <img src={Sale8} alt="???nh ch??a hi???n th???" className="content__sale-img"/>
                                    <div className="content__sale-title">
                                        Shopee Premium
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    {/*Content Banner Big */}
                    <a href="#">
                        <div className="content__banner-big"/>
                    </a>
                    {/*Content Category*/}
                    <div className="content__category">
                        <div className="content__category-header">
                            <div className="content__category-title">Danh M???c</div>
                        </div>
                        <div className="content__category__content">
                            <div className="content__category-list">
                                <a href="#" className="content__category-link">
                                    <div className="content__category-thumbnail">
                                        <img src={Cate1} alt="???nh ch??a hi???n th???" className="content__category-img"/>
                                        <div className="content__category-title">
                                            th???i trang nam
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="content__category-link">
                                    <div className="content__category-thumbnail">
                                        <img src={Cate2} alt="???nh ch??a hi???n th???" className="content__category-img"/>
                                        <div className="content__category-title">
                                            ??i???n Tho???i & Ph??? Ki???n
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="content__category-link">
                                    <div className="content__category-thumbnail">
                                        <img src={Cate3} alt="???nh ch??a hi???n th???" className="content__category-img"/>
                                        <div className="content__category-title">
                                            Thi???t B??? ??i???n T???
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="content__category-link">
                                    <div className="content__category-thumbnail">
                                        <img src={Cate4} alt="???nh ch??a hi???n th???" className="content__category-img"/>
                                        <div className="content__category-title">
                                            M??y T??nh & Laptop
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="content__category-link">
                                    <div className="content__category-thumbnail">
                                        <img src={Cate5} alt="???nh ch??a hi???n th???" className="content__category-img"/>
                                        <div className="content__category-title">
                                            M??y ???nh & M??y Quay Phim
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="content__category-link">
                                    <div className="content__category-thumbnail">
                                        <img src={Cate6} alt="???nh ch??a hi???n th???" className="content__category-img"/>
                                        <div className="content__category-title">
                                            ?????ng H???
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="content__category-link">
                                    <div className="content__category-thumbnail">
                                        <img src={Cate7} alt="???nh ch??a hi???n th???" className="content__category-img"/>
                                        <div className="content__category-title">
                                            gi??y d??p da
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="content__category-link">
                                    <div className="content__category-thumbnail">
                                        <img src={Cate8} alt="???nh ch??a hi???n th???" className="content__category-img"/>
                                        <div className="content__category-title">
                                            Thi???t b??? ??i???n gia d???ng
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="content__category-link">
                                    <div className="content__category-thumbnail">
                                        <img src={Cate9} alt="???nh ch??a hi???n th???" className="content__category-img"/>
                                        <div className="content__category-title">
                                            Th??? thao & du l???ch
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="content__category-link">
                                    <div className="content__category-thumbnail">
                                        <img src={Cate10} alt="???nh ch??a hi???n th???" className="content__category-img"/>
                                        <div className="content__category-title">
                                            ?? t?? & xe m??y & xe ?????p
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="content__category-list">
                                <a href="#" className="content__category-link">
                                    <div className="content__category-thumbnail">
                                        <img src={Cate11} alt="???nh ch??a hi???n th???" className="content__category-img"/>
                                        <div className="content__category-title">
                                            th???i trang n???
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="content__category-link">
                                    <div className="content__category-thumbnail">
                                        <img src={Cate12} alt="???nh ch??a hi???n th???" className="content__category-img"/>
                                        <div className="content__category-title">
                                            m??? & b??
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="content__category-link">
                                    <div className="content__category-thumbnail">
                                        <img src={Cate13} alt="???nh ch??a hi???n th???" className="content__category-img"/>
                                        <div className="content__category-title">
                                            nh?? c???a & ?????i s???ng
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="content__category-link">
                                    <div className="content__category-thumbnail">
                                        <img src={Cate14} alt="???nh ch??a hi???n th???" className="content__category-img"/>
                                        <div className="content__category-title">
                                            s???c ?????p
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="content__category-link">
                                    <div className="content__category-thumbnail">
                                        <img src={Cate15} alt="???nh ch??a hi???n th???" className="content__category-img"/>
                                        <div className="content__category-title">
                                            s???c kh???e
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="content__category-link">
                                    <div className="content__category-thumbnail">
                                        <img src={Cate16} alt="???nh ch??a hi???n th???" className="content__category-img"/>
                                        <div className="content__category-title">
                                            gi??y d??p n???
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="content__category-link">
                                    <div className="content__category-thumbnail">
                                        <img src={Cate17} alt="???nh ch??a hi???n th???" className="content__category-img"/>
                                        <div className="content__category-title">
                                            t??i v?? n???
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="content__category-link">
                                    <div className="content__category-thumbnail">
                                        <img src={Cate18} alt="???nh ch??a hi???n th???" className="content__category-img"/>
                                        <div className="content__category-title">
                                            ph??? ki???n & trang s???c n???
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="content__category-link">
                                    <div className="content__category-thumbnail">
                                        <img src={Cate19} alt="???nh ch??a hi???n th???" className="content__category-img"/>
                                        <div className="content__category-title">
                                            b??ch h??a online
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="content__category-link">
                                    <div className="content__category-thumbnail">
                                        <img src={Cate20} alt="???nh ch??a hi???n th???" className="content__category-img"/>
                                        <div className="content__category-title">
                                            nh?? s??ch online
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*Content Flash Sale */}
                    <div className="content__flash">
                        <div className="content__flash-header">
                            <img src={Flash} className="content__flash-img"/>
                            <a href="#" className="content__flash-link">
                                Xem t???t c??? &#8250;
                            </a>
                        </div>
                        <div className="content__flash-list">
                            <a href="#" className="content__flash-link">
                                <img src={Flash8} alt="" className="content__flash-bgr"/>
                                <img src={Flash1} alt="???nh ch??a hi???n th???" className="content__flash-img"/>
                                <div className="content__flash-price">
                                    <div className="price">
                                        <i>&#8363;</i> 200.000
                                    </div>
                                    <div className="buy">
                                        <div className="buy-small">
                                            ???? b??n 9
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="content__flash-link">
                                <img src={Flash8} alt="" className="content__flash-bgr"/>
                                <img src={Flash2} alt="???nh ch??a hi???n th???" className="content__flash-img"/>
                                <div className="content__flash-price">
                                    <div className="price">
                                        <i>&#8363;</i> 200.000
                                    </div>
                                    <div className="buy">
                                        <div className="buy-small">
                                            ???? b??n 12
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="content__flash-link">
                                <img src={Flash8} alt="" className="content__flash-bgr"/>
                                <img src={Flash3} alt="???nh ch??a hi???n th???" className="content__flash-img"/>
                                <div className="content__flash-price">
                                    <div className="price">
                                        <i>&#8363;</i> 200.000
                                    </div>
                                    <div className="buy">
                                        <div className="buy-small">
                                            ???? b??n 22
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="content__flash-link">
                                <img src={Flash8} alt="" className="content__flash-bgr"/>
                                <img src={Flash4} alt="???nh ch??a hi???n th???" className="content__flash-img"/>
                                <div className="content__flash-price">
                                    <div className="price">
                                        <i>&#8363;</i> 200.000
                                    </div>
                                    <div className="buy">
                                        <div className="buy-small">
                                            ???? b??n 3
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="content__flash-link">
                                <img src={Flash8} alt="" className="content__flash-bgr"/>
                                <img src={Flash5} alt="???nh ch??a hi???n th???" className="content__flash-img"/>
                                <div className="content__flash-price">
                                    <div className="price">
                                        <i>&#8363;</i> 200.000
                                    </div>
                                    <div className="buy">
                                        <div className="buy-small">
                                            ???? b??n 11
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="content__flash-link">
                                <img src={Flash8} alt="" className="content__flash-bgr"/>
                                <img src={Flash6} alt="???nh ch??a hi???n th???" className="content__flash-img"/>
                                <div className="content__flash-price">
                                    <div className="price">
                                        <i>&#8363;</i> 200.000
                                    </div>
                                    <div className="buy">
                                        <div className="buy-small">
                                            ???? b??n 19
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    {/*Banner Image*/}
                    <div className="content__bannerIMG">
                        <img src={Banner} alt="???nh ch??a hi???n th???" className="content__bannerIMG-img"/>
                        <div className="content__bannerIMG-list">
                            <a href="#" className="content__bannerIMG-link"/>
                            <a href="#2" className="content__bannerIMG-link"/>
                            <a href="#3" className="content__bannerIMG-link"/>
                        </div>
                    </div>
                </div>
            </div>
            <img src={Fix0} alt="" className="fix-0d"/>
        </LayoutUser>
    )
}

export default HomePage