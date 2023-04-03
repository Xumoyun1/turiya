import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import { addToCart, CartDispatchContext, CartStateContext, minusToCart, removeFromCart } from '../contexts/cart';

const Basket = () => {
    const { items, isCartOpen } = useContext(CartStateContext);
    const dispatch = useContext(CartDispatchContext);
    console.log(items);
    const handleRemove = (productId) => {
        return removeFromCart(dispatch, productId);
    };
    let total_amount = 0
    function calc() {
        items.map((item) => {
            total_amount += item.quantity * item.price
        })
    }
    calc();
    const nav = useNavigate()

    const redirect = () => {
        nav('/checkout')
    }

    return (
        <>
            <Header />
            <div className="Basket">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="bas_h">
                                Главное / <span>Корзина</span>
                            </div>
                            <div className="bas_name">Корзина</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9">
                            {items.map((product) => {
                                return (
                                    <div className="bas_box">
                                        <div className="bas_left">
                                            <div onClick={() => handleRemove(product.id)} className="bas_bas">
                                                <img src="/img/basket.png" alt="" className="bas_bas_img" />
                                            </div>
                                            <div className="bas_prod">
                                                <img src={product.images[0].get_image} alt="" className="bas_prod_img" />
                                            </div>
                                            <div className="bas_descr">
                                                {product.name}
                                            </div>
                                            <div className="bas_sale">
                                                {product.quantity * product.price} sum
                                            </div>
                                        </div>
                                        <div className="bas_line"></div>
                                        <div className="bas_cal">
                                            <div onClick={() => addToCart(dispatch, product)} className="cal_plus">+</div>
                                            <div className="cal_num">{product.quantity}</div>
                                            <div onClick={() => minusToCart(dispatch, product)} className="cal_minus">-</div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                        <div className="col-3 d-lg-block d-none">
                            <div className="bas_box_2">
                                {items.map((product) => {
                                    return (
                                        <div className="bas_2_top">
                                            <div className="bas_2_text">
                                                <div className="bas_2_h">Итого {product.quantity} шт</div>
                                                <div className="bas_2_p">{total_amount} сум</div>
                                            </div>
                                            <div className="bas_2_text">
                                                <div className="bas_2_h">Перевозки</div>
                                                <div className="bas_2_p">{product.price_delivery ? `${product.price_delivery}` : '0'} сум</div>
                                            </div>
                                            {/* <div className="bas_2_text">
                                                <div className="bas_2_h">Скидка</div>
                                                <div className="bas_2_p">{product.new_price ? `${product.price - product.new_price}` : '0'} сум</div>
                                            </div> */}
                                            {/* <div className="bas_2_text">
                                                <div className="bas_2_h">Налог</div>
                                                <div className="bas_2_p">300 000 сум</div>
                                            </div> */}
                                            <div className="bas_2_sale">
                                                <div className="bas_2_h_2">Общая сумма</div>
                                                <div className="bas_2_p_2">{`${total_amount + product.price_delivery}`} сум</div>
                                            </div>
                                        </div>
                                    )
                                })}
                                <button onClick={redirect} className="bas_2_a"><a href="">Перейти к покупке</a></button>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="bas_box_3">
                                <div className="bas_box_3_top">
                                    <img src="/img/fav_1.png" alt="" />
                                </div>
                                <div className="bas_descr_2">
                                    Смартфон Samsung Galaxy A71 Black
                                </div>
                                <div className="bas_cal_2">
                                    <div className="cal_plus_2">+</div>
                                    <div className="cal_num_2">1</div>
                                    <div className="cal_minus_2">-</div>
                                </div>
                                <div className="bas_box_3_text">
                                    <div className="bas_3_h"><span>Итого</span> (1 шт.)</div>
                                    <div className="bas_3_p">{total_amount}</div>
                                </div>
                                <div className="bas_box_3_text_2">
                                    <div className="bas_3_h_2">Общая сумма</div>
                                    <div className="bas_3_p_2">4 310 000 сум</div>
                                </div>
                                <div className="bas_box_3_false">
                                    <img src="/img/false_2.png" alt="" />
                                    Удалить
                                </div>
                            </div>
                        </div>
                        <div className="col-12 d-lg-none d-block">
                            <div className="bas_box_2">
                                <div className="bas_2_top">
                                    <div className="bas_2_text">
                                        <div className="bas_2_h">Итого (1 шт.)</div>
                                        <div className="bas_2_p">{total_amount}</div>
                                    </div>
                                    <div className="bas_2_text">
                                        <div className="bas_2_h">Перевозки</div>
                                        <div className="bas_2_p">100 000 сум</div>
                                    </div>
                                    <div className="bas_2_text">
                                        <div className="bas_2_h">Скидка</div>
                                        <div className="bas_2_p">10 000 сум</div>
                                    </div>
                                    <div className="bas_2_text">
                                        <div className="bas_2_h">Налог</div>
                                        <div className="bas_2_p">300 000 сум</div>
                                    </div>
                                    <div className="bas_2_sale">
                                        <div className="bas_2_h_2">Общая сумма</div>
                                        <div className="bas_2_p_2">4 310 000 сум</div>
                                    </div>
                                </div>
                                <button className="bas_2_a"><a href="">Перейти к покупке</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Basket