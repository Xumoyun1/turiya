import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { API_PATH } from '../tools/constats'
import { Rating } from 'react-simple-star-rating'
import { addToWishlist, WishlistDispatchContext } from '../contexts/wishlist'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'



function Interesting() {
    const dispatch = useContext(WishlistDispatchContext)

    const [like, setLike] = useState()

    const [inter, setInter] = useState('')
    const navigate = useNavigate()

    const getInter = () => {
        axios.get(API_PATH + 'product/popular/')
            .then((res => {
                setInter(res.data)
            }))
    }

    useEffect(() => {
        getInter()
    }, [])

    const [rating, setRating] = useState(0)

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
    }

    const handleAddToWishlist = (item) => {
        const product = { ...item, quantity: 1 }
        addToWishlist(dispatch, product)
        setTimeout(() => {
        }, 3500)

    }
    const detail = (id) => {
        localStorage.setItem("PRODUCT_ID", JSON.stringify(id))
        navigate('/card')
    }


    return (
        <>
            <div className="Interesting">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="inter_name">
                                Самое интересное
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="head_main_box">
                                <div className="row">

                                    {inter && inter.map((item, index) => {
                                        return (
                                            <div key={index} className="col-lg-3 col-6 mb-sm-4 mb-3 main_col">
                                                <div className="main_main">
                                                    <div onClick={() => detail(item.id)} className="main_box_img">
                                                        <img src={item.get_image} alt="" className="main_img" />
                                                    </div>
                                                    <div className="main_text">
                                                        <div className="main_h">{item.name}
                                                        </div>
                                                        <div className="main_sale">
                                                            {item.price}
                                                        </div>
                                                        <div className="main_p">
                                                            {item.description}
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
                                                                    <div onClick={() => handleAddToWishlist(item)}
                                                                        className="main_like_h">Сохранить</div>
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
        </>
    )
}

export default Interesting