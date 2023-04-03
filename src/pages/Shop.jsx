import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import back1 from '../images/head_img.png'
import { API_PATH } from '../tools/constats'
import { Rating } from 'react-simple-star-rating'


const Shop = () => {
    const [like, setLike] = useState()
    const [products, setProducts] = useState([])
    const [brand, setBrand] = useState([])
    const [color, setColor] = useState([])
    const [camp, setCamp] = useState([])
    const [rating, setRating] = useState(0)
    const handleRating = (rate) => {
        setRating(rate)
    }

    const getCamp = () => {
        axios.get(API_PATH + 'order/slider/')
            .then((res => {
                setCamp(res.data)
            }))
    }
    const getBrand = () => {
        axios.get(API_PATH + 'product/brands/')
            .then((res) => {
                setBrand(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getColors = () => {
        axios.get(API_PATH + 'product/colors/')
            .then((res) => {
                setColor(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }


    const getProducts = () => {
        axios.get(API_PATH + 'product/')
            .then((res => {
                setProducts(res.data)
            }))
    }
    const navigate = useNavigate()

    useEffect(() => {
        getProducts();
        getBrand();
        getColors();
        getCamp();
    }, [])
    const detail = (id) => {
        localStorage.setItem("PRODUCT_ID", JSON.stringify(id))
        navigate('/card')
    }
    return (
        <>
            <Header />
            <div className="Shop">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {camp && camp.slice(0, 1).map((item, index) => {
                                return (
                                    <div key={index} className="shop_box" style={{ backgroundImage: `url(${item.get_image})` }}>
                                        <div className="shop_text">
                                            <div className="shop_text_2">
                                                <div className="shop_name">{item.name}</div>
                                                <div className="shop_h">{item.title}</div>
                                            </div>
                                            <button className='shop_btn'><a href='/' className="shop_a">Получение льготного товара</a></button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="col-12 ">
                            <div className="shop_main_box">
                                <div className="row ">
                                    <div className="col-lg-3">
                                        <div className="row">
                                            <div className="col-12 ">
                                                <div className="shop_filtr">
                                                    <div className="shop_filtr_name">
                                                        По бренду
                                                    </div>
                                                    <input placeholder='Поиск' className='shop_filtr_inp' type="text" name="" id="" />
                                                    {brand && brand.map((item, index) => {
                                                        return (
                                                            <div key={index} className="shop_filtr_box">
                                                                <div className="shop_filtr_left">
                                                                    <input type="radio" name="brand" id="2" className="shop_chek" />

                                                                    <div className="shop_filtr_h">{item.name}</div></div>
                                                                <div className="shop_filtr_right">
                                                                    <div className="shop_filtr_p">{item.products_count}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                    <div className="shop_filtr_clean">Очистить фильтр</div>
                                                </div>
                                            </div>
                                            <div className="col-12 mt-5">
                                                <div className="shop_filtr">
                                                    <div className="shop_filtr_name">
                                                        По Color
                                                    </div>
                                                    <input placeholder='Поиск' className='shop_filtr_inp' type="text" name="" id="" />
                                                    {color && color.map((item, index) => {
                                                        return (
                                                            <div key={index} className="shop_filtr_box">
                                                                <div className="shop_filtr_left">
                                                                    <input type="radio" name='filter' id='1' className="shop_chek" />
                                                                    <div className="shop_filtr_h">{item.name}</div></div>
                                                                <div className="shop_filtr_right">
                                                                    <div className="shop_filtr_p">{item.products_count}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                    <div className="shop_filtr_clean">Очистить фильтр</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="row">
                                                    {products && products.map((item, index) => {
                                                        return (
                                                            <div key={index} className="col-4 mb-4 deal_main">
                                                                <div className="main_main">
                                                                    <div onClick={() => detail(item.id)} className="main_box_img">
                                                                        <img src={item.get_image} alt="" className="main_img" />
                                                                    </div>
                                                                    <div className="main_text">
                                                                        <div className="main_h">
                                                                            {item.name}
                                                                        </div>
                                                                        <div className="main_sale">
                                                                            {item.price} сум
                                                                        </div>
                                                                        <div className="main_p">
                                                                            {item.description.slice(0, 100)}
                                                                        </div>

                                                                        <div className="main_price">
                                                                            <div className="main_left">
                                                                                <Rating className='main_left_star'
                                                                                    initialValue={item.get_rating} />
                                                                                <div className="main_star_h">{item.get_rating}
                                                                                </div>
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
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop