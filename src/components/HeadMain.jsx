import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { addToWishlist, WishlistDispatchContext } from '../contexts/wishlist'
import { API_PATH } from '../tools/constats'
import { Rating } from 'react-simple-star-rating'


const HeadMain = () => {
    const dispatch = useContext(WishlistDispatchContext);
    const [like, setLike] = useState()
    const [back, setBack] = useState([])
    const [prod, setProd] = useState([])

    const [rating, setRating] = useState(0)

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
    }

    const getBack = () => {
        axios.get(API_PATH + 'order/slider/')
            .then((res => {
                setBack(res.data)
            }))

        axios.get(API_PATH + 'product/')
            .then((res => {
                setProd(res.data)
            }))
    }

    useEffect(() => {
        getBack()
    }, []);
    const navigate = useNavigate()
    const detail = (id) => {
        localStorage.setItem("PRODUCT_ID", JSON.stringify(id))
        navigate('/card')
    }
    const handleAddToWishlist = (item) => {
        const product = { ...item, quantity: 1 };
        addToWishlist(dispatch, product);
        setTimeout(() => {
        }, 3500);

    };


    return (
        <> <div className="top_2">
            <div className="top_2_box">
                <img src="/img/search.png" alt="" className="top_2_img" />
                <input placeholder='Поиск' type="text" name="" id="" className="top_2_inp" />
            </div>
        </div>
            <div className="HeadMain">
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            {back && back.slice(0, 1).map((item, index) => {
                                return (
                                    <div key={index} className="head_2_box" style={{ backgroundImage: `url(${item.get_image})` }}>
                                        {/* <div className="head_2_img_box"><img src="/img/head_img.png" alt="" className="head_2_img" /></div> */}
                                        <div className="head_2_text">
                                            <div className="head_2_text_2">
                                                <div className="head_2_name">{item.name}</div>
                                                <div className="head_2_h">{item.title}</div>
                                            </div>
                                            <button className='head_2_btn'><a href='/' className="head_2_a">Получение льготного товара</a></button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="col-12">
                            <div className="head_main_box">
                                <select className='main_sel' name="" id="">
                                    <option value="">Обычное</option>
                                    <option value="">nmadir</option>
                                    <option value="">qanaqadir</option>
                                </select>
                                <div className="row">
                                    {prod && prod.map((item, index) => {
                                        return (
                                            <div key={index} className="col-lg-3 col-6 mb-sm-4 mb-3 main_col">
                                                <div className="main_main">
                                                    <div onClick={() => detail(item.id)} className="main_box_img">
                                                        <img src={item.get_image} alt="" className="main_img" />
                                                        <div className="main_text">
                                                            <div className="main_h">{item.name}
                                                            </div>

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
                                                                <div onClick={() => setLike(!like)} className={`main_like_box ${like ? 'active' : ''} `}>
                                                                    <img src="/img/like.png" alt="" className="main_like" />
                                                                    <div onClick={() => handleAddToWishlist(item)} className="main_like_h">Сохранить</div>
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
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                            <Link to="" className="main_a">
                                Показать еще
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default HeadMain