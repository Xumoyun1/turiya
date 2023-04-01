import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";
import { API_PATH } from "../tools/constats";
import { useEffect } from "react";
import axios from "axios";

const Deal = () => {
    const [like, setLike] = useState()
    const [deal, setDeal] = useState()

    const getDeal = () => {
        axios.get(API_PATH + 'order/campaign/')
            .then((res => {
                setDeal(res.data)
            }))

    }


    useEffect(() => {
        getDeal()
    }, [])


    return (
        <>
            <div className="Deal">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="deal_name">Акция недели</div>
                        </div>

                        {deal && deal.map((item, index) => {
                            return (
                                <div key={index} className="col-lg-4 col-sm-6 mb-4">
                                    <div className="deal_box">
                                        <img src={item.get_image} alt="" className="deal_img" />
                                        <div className="deal_text">
                                            <div className="deal_h">{item.name}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}



                    </div>
                    <div className="row deal_row">
                        <div className="col-4 mb-4">
                            <div className="deal_box_2">
                                <img src="/img/deal_2.png" alt="" className="deal_img_2" />
                                <div className="deal_text_2">
                                    <div className="deal_h_2">Майская распродажа</div>
                                    <div className="deal_p_2">Ищите новый сезон</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="row">
                                <div className="col-4 mb-4 deal_main">
                                    <div className="main_main">
                                        <div className="main_box_img">
                                            <img src="/img/main_prod.png" alt="" className="main_img" />
                                        </div>
                                        <div className="main_text">
                                            <div className="main_h">Винтажная пишущая машинка для публикации потрясающих историй о дизайне пользовательского интерфейса и веб-разработке.
                                            </div>
                                            <div className="main_sale">
                                                999 000 сум
                                            </div>
                                            <div className="main_p">
                                                Доступно для отправки на Марс или куда-либо еще
                                            </div>

                                            <div className="main_price">
                                                <div className="main_left">
                                                    <img src="/img/star_1.png" alt="" className="main_star" />
                                                    <img src="/img/star_1.png" alt="" className="main_star" />
                                                    <img src="/img/star_2.png" alt="" className="main_star" />
                                                    <div className="main_star_h">4.99</div>
                                                </div>
                                                <div className="main_right">
                                                    <div onClick={() => setLike(!like)} className={`main_like_box ${like ? 'active' : ''}`}>
                                                        <img src="/img/like.png" alt="" className="main_like" />
                                                        <div className="main_like_h">Сохранить</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 mb-4 deal_main">
                                    <div className="main_main">
                                        <div className="main_box_img">
                                            <img src="/img/main_prod.png" alt="" className="main_img" />
                                        </div>
                                        <div className="main_text">
                                            <div className="main_h">Винтажная пишущая машинка для публикации потрясающих историй о дизайне пользовательского интерфейса и веб-разработке.
                                            </div>
                                            <div className="main_sale">
                                                999 000 сум
                                            </div>
                                            <div className="main_p">
                                                Доступно для отправки на Марс или куда-либо еще
                                            </div>

                                            <div className="main_price">
                                                <div className="main_left">
                                                    <img src="/img/star_1.png" alt="" className="main_star" />
                                                    <img src="/img/star_1.png" alt="" className="main_star" />
                                                    <img src="/img/star_2.png" alt="" className="main_star" />
                                                    <div className="main_star_h">4.99</div>
                                                </div>
                                                <div className="main_right">
                                                    <div onClick={() => setLike(!like)} className={`main_like_box ${like ? 'active' : ''}`}>
                                                        <img src="/img/like.png" alt="" className="main_like" />
                                                        <div className="main_like_h">Сохранить</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 mb-4 deal_main">
                                    <div className="main_main">
                                        <div className="main_box_img">
                                            <img src="/img/main_prod.png" alt="" className="main_img" />
                                        </div>
                                        <div className="main_text">
                                            <div className="main_h">Винтажная пишущая машинка для публикации потрясающих историй о дизайне пользовательского интерфейса и веб-разработке.
                                            </div>
                                            <div className="main_sale">
                                                999 000 сум
                                            </div>
                                            <div className="main_p">
                                                Доступно для отправки на Марс или куда-либо еще
                                            </div>

                                            <div className="main_price">
                                                <div className="main_left">
                                                    <img src="/img/star_1.png" alt="" className="main_star" />
                                                    <img src="/img/star_1.png" alt="" className="main_star" />
                                                    <img src="/img/star_2.png" alt="" className="main_star" />
                                                    <div className="main_star_h">4.99</div>
                                                </div>
                                                <div className="main_right">
                                                    <div onClick={() => setLike(!like)} className={`main_like_box ${like ? 'active' : ''}`}>
                                                        <img src="/img/like.png" alt="" className="main_like" />
                                                        <div className="main_like_h">Сохранить</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 mb-4 deal_main">
                                    <div className="main_main">
                                        <div className="main_box_img">
                                            <img src="/img/main_prod.png" alt="" className="main_img" />
                                        </div>
                                        <div className="main_text">
                                            <div className="main_h">Винтажная пишущая машинка для публикации потрясающих историй о дизайне пользовательского интерфейса и веб-разработке.
                                            </div>
                                            <div className="main_sale">
                                                999 000 сум
                                            </div>
                                            <div className="main_p">
                                                Доступно для отправки на Марс или куда-либо еще
                                            </div>

                                            <div className="main_price">
                                                <div className="main_left">
                                                    <img src="/img/star_1.png" alt="" className="main_star" />
                                                    <img src="/img/star_1.png" alt="" className="main_star" />
                                                    <img src="/img/star_2.png" alt="" className="main_star" />
                                                    <div className="main_star_h">4.99</div>
                                                </div>
                                                <div className="main_right">
                                                    <div onClick={() => setLike(!like)} className={`main_like_box ${like ? 'active' : ''}`}>
                                                        <img src="/img/like.png" alt="" className="main_like" />
                                                        <div className="main_like_h">Сохранить</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row deal_row">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            loop={true}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >

                            {deal && deal.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="deal_box">
                                            <img src={item.get_image} alt="" className="deal_img" />
                                            <div className="deal_text">
                                                <div className="deal_h">{item.name}</div>
                                                <div className="deal_p">{item.title}</div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}

                        </Swiper>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Deal