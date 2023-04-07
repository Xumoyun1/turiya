import React, { useContext, useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";
import axios from 'axios';
import { API_PATH } from '../tools/constats';
import { addToCart, CartDispatchContext } from '../contexts/cart';
import { Rating } from 'react-simple-star-rating'
import { getText } from '../locales';
import { addToWishlist, WishlistDispatchContext } from '../contexts/wishlist'


const CardMain = () => {
  const [id, setId] = useState(JSON.parse(localStorage.getItem('PRODUCT_ID') || 1))
  const [data, setData] = useState('')
  const [like, setLike] = useState()
  const [data2, setData2] = useState('')
  const [category, setCategory] = useState(JSON.parse(localStorage.getItem('CATEGORY_ID')) || '')
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const dispatch = useContext(CartDispatchContext);
  const [rating, setRating] = useState(0);
  const saveBtns = useRef([]);
  const currect = useRef([])
  const [change, setChange] = useState(false);



  const handleRating = (rate) => {
    setRating(rate)
  }

  const getProduct = () => {
    axios.get(API_PATH + `product/${id}/`)
      .then((res => {
        axios.get(API_PATH + `product/?cat=${res.data.category}`)
          .then((res => {
            setData2(res.data)
          }))
        setData(res.data)
      }))
  }


  useEffect(() => {
    getProduct();
  }, [])

  const handleAddToCart = () => {
    const product = { ...data, quantity: 1 };
    addToCart(dispatch, product);
    setTimeout(() => {
    }, 3500);
  };

  const handleAddToWishlist = (item, index) => {

    saveBtns.current[index].style.background = "#02897A";
    saveBtns.current[index].style.color = "#FFFFFF ";
    currect.current[index].src = "/img/right.png ";
    // document.getElementById(index).setAttribute('style', 'background:#000') 

    const product = { ...item, quantity: 1 };
    addToWishlist(dispatch, product);


    setTimeout(() => {
    }, 3500);
    setChange(true)

  };


  return (
    <>
      <div className="CardMain">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="swiper_box">
                <Swiper
                  loop={true}
                  spaceBetween={10}
                  navigation={true}
                  // thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  {data.images && data.images.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="c_main_swiper_box">
                          <img alt="" src={item.get_image} />
                        </div>
                      </SwiperSlide>
                    )
                  })}

                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={20}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  {data.images && data.images.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="c_main_swiper_box_2">
                          <img alt="" src={item.get_image} />
                        </div>
                      </SwiperSlide>
                    )
                  })}

                </Swiper>
              </div>
            </div>
            <div className="col-lg-7 d-flex flex-column justify-content-between">
              <div className="c_main_up">
                <div className="c_main_name">
                  {data.name}
                </div>
                <div className="c_main_sale">
                  <div className="c_main_sale_false"> {data.new_price ? `UZS ${data.price}` : ''}</div>
                  <div className="c_main_sale_true">UZS {data.new_price ? data.new_price : data.price}</div>
                </div>
                <div className="c_main_info_box">
                  <div className="c_main_info">
                    <div className="c_main_info_img"><img className="c_main_info_icon" src="/img/c_main_1.png" alt="" /></div>
                    <div className="c_main_info_name">Доставка:</div>
                    <div className="c_main_info_p">{data.price_delivery ? `${data.price_delivery} UZS` : `Есть, бесплатно`}</div>
                  </div>
                  <div className="c_main_info">
                    <div className="c_main_info_img"><img className="c_main_info_icon" src="/img/c_main_2.png" alt="" /></div>
                    <div className="c_main_info_name">Самовывоз:</div>
                    <div className="c_main_info_p">{data.phone ? 'Есть' : 'Нет'}</div>
                  </div>
                  <div className="c_main_info">
                    <div className="c_main_info_img"><img className="c_main_info_icon" src="/img/c_main_3.png" alt="" /></div>
                    <div className="c_main_info_name">Способ покупки:</div>
                    <div className="c_main_info_p">{data.type_cash}</div>
                  </div>
                  <div className="c_main_info">
                    <div className="c_main_info_img"><img className="c_main_info_icon" src="/img/c_main_4.png" alt="" /></div>
                    <div className="c_main_info_name">Возврат товара:</div>
                    <div className="c_main_info_p">{data.return_day} дней</div>
                  </div>
                  <a href="/" className="c_main_info_a">
                    <div className="c_main_info_a_img"><img className="c_main_info_a_icon" src="/img/c_main_5.png" alt="" /></div>
                    <div className="c_main_info_a_name">Ознакомиться c правилами возврата</div>
                  </a>
                  {/* <div className="c_main_count_name">Выберите количество</div>
                  <div className="c_main_count">
                    <div className="c_main_count_minus"></div>
                    <div className="c_main_count_h">123</div>
                    <div  className="c_main_count_plus"></div>
                  </div> */}
                </div>
              </div>
              <div className="c_main_down">
                <div onClick={handleAddToCart} className="c_main_btn">Добавить в корзину</div>
                {/* <img src="/img/c_main_love.png" alt="" className="c_main_like" /> */}
                <img src="/img/c_main_love_2.png" alt="" className="c_main_like_2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="CardDesc">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="c_desc_name">
                Описание
              </div>
            </div>
            <div className="col-12">
              <div className="c_desc_text">
                <div className="c_desc_h">Бренд:</div>
                <div className="c_desc_p">{data.brand}</div>
              </div>
              <div className="c_desc_text">
                <div className="c_desc_h">Цвет:</div>
                {data.colors && data.colors.map((item, index) => {
                  return (
                    <div key={index} className="c_desc_p">{item}</div>
                  )
                })}
              </div>
              <div className="c_desc_text">
                <div className="c_desc_h">Страна производителя:</div>
                <div className="c_desc_p">{data.made_in}</div>
              </div>
              <div className="c_desc_text">
                <div className="c_desc_h">Состав:</div>
                <div className="c_desc_p">{data.characteristic}</div>
              </div>
            </div>
          </div>
        </div>
      </div>








      {/* <div className="CardRecom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="c_recom_name">
                Похожие продукты
              </div>
            </div>
          </div>
          <div className="row">


            {data2 && data2.map((item, index) => {
              return (
                <div key={index} className="col-lg-3 col-6 mb-sm-4 mb-3 main_col">
                  <div className="main_main">
                    <div className="main_box_img">
                      <img src={item.get_image} alt="" className="main_img" />
                      <div className="main_h">
                        {item.name}
                      </div>
                    </div>
                    <div className="main_text">
                      <div className="main_p">
                        {item.description}
                      </div>


                      <div className="main_sale">
                        {item.price}
                      </div>

                      <div className="main_price">
                        <div className="main_left">
                          <Rating className='main_left_star'
                            initialValue={item.get_rating} />
                          <div className="main_star_h">{item.get_rating}
                          </div>
                        </div>

                        <div className="main_right">
                          <div data-index={item.id} ref={(element) => saveBtns.current.push(element)} onClick={() => handleAddToWishlist(item, index)} className='main_like_box'>
                            <img data-index={item.id} ref={(element) => currect.current.push(element)} onClick={() => handleAddToWishlist(item, index)} src="/img/like.png" alt="" className="main_like" />
                            <div className='main_like_h'>{getText('nav_2')}</div>
                          </div>
                        </div> 

                      </div>
                    </div>
                  </div>
                </div>
              )
            })}



          </div>
        </div>
      </div> */}
    </>
  )
}

export default CardMain