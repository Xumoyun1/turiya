import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import Header from '../components/Header';
import { API_PATH } from '../tools/constats';
import axios from 'axios';

const Profile = () => {
    const [password, setPassword] = useState('')
    const [old_password, setOldPassword] = useState('')
    // const [conf_password, setConfPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [activeTab, setActiveTab] = useState('1');
    const [token, setToken] = useState(localStorage.getItem('turiya'))

    // old password new password repetation of new password -> success 

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    // api = user/change-password 
    // Basic OTk4OTA4MTA2NzYzOlBhc3NAMTIz
    const changePassword = (e) => {
        e.preventDefault();
        // console.log(token)
        axios.patch(API_PATH + 'user/change-password/', { old_password, password, conf_password: password2 }, {
            headers: {
                'Authorization': `Token ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            console.log(res.data);
            // document.location.reload()
        }).catch((err) => {
            console.log(err);
        })

    }

    return (
        <>

            <Header />

            <div className="Profile">
                <div className="container">
                    <div className="row">
                        <div className="col-2 d-lg-flex d-none"></div>
                        <div className="col-8">
                            <div className="prof_name_text">
                                <div className="prof_name_text_h">Профиль / </div>
                                <div className="prof_name_text_p"> Покупки</div>
                            </div>
                        </div>
                        <div className="col-2 d-flex justify-content-end">
                            <Link to="/" className='prof_out_box'>
                                <img src="/img/out.png" alt="" />
                                <div className="prof_out_name">
                                    Выйти
                                </div>
                            </Link>
                        </div>

                        <div className="col-12">
                            <div className="prof_nav_main">
                                <Nav tabs>
                                    <NavItem className=''>
                                        <NavLink id='1' className={classnames({ active: activeTab === '1', })} onClick={() => { toggle('1'); }}
                                        >
                                            <div className="prof_nav_box">
                                                <img src="/img/prof_1.png" alt="" />
                                                <div className="prof_nav_box_name">Покупки</div>
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className=''>
                                        <NavLink id='2' className={classnames({ active: activeTab === '2', })} onClick={() => { toggle('2'); }}
                                        >
                                            <div className="prof_nav_box">
                                                <img src="/img/prof_2.png" alt="" />
                                                <div className="prof_nav_box_name">Мои карты</div>
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className=''>
                                        <NavLink id='3' className={classnames({ active: activeTab === '3', })} onClick={() => { toggle('3'); }}
                                        >
                                            <div className="prof_nav_box">
                                                <img src="/img/prof_3.png" alt="" />
                                                <div className="prof_nav_box_name">Изменить пароль</div>
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </div>

                        <div className="col-12">
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1" className=''>
                                    <div className="tab_buy">
                                        <div className="tab_buy_name_box">
                                            <div className="row tab_buy_box_row">
                                                <div className="col-1">
                                                    <div className="tab_buy_name">
                                                        #
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="tab_buy_name">
                                                        Продукт
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="tab_buy_name">
                                                        Количество
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="tab_buy_name">
                                                        Дата
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="tab_buy_name">
                                                        Статус
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="tab_buy_name">
                                                        Сумма
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab_text">
                                            <div className="row tab_text_row">
                                                <div className="col-1">
                                                    <div className="tab_text_name">
                                                        1
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="tab_text_name">
                                                        Iphone 13 pro max 256gb
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="tab_text_name">
                                                        1-количество
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="tab_text_name">
                                                        01.11.2022
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="tab_text_name_2">
                                                        Неоплачено
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="tab_text_name">
                                                        11 248 100 сум
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row tab_text_row">
                                                <div className="col-1">
                                                    <div className="tab_text_name">
                                                        1
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="tab_text_name">
                                                        Iphone 13 pro max 256gb
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="tab_text_name">
                                                        1-количество
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="tab_text_name">
                                                        01.11.2022
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="tab_text_name_2 active">
                                                        Oплачено
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="tab_text_name">
                                                        11 248 100 сум
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab_buy_2">
                                        <div className="tab_buy_2_top">
                                            <div className="tab_buy_name">
                                                Продукт
                                            </div>
                                            <div className="tab_buy_num">
                                                #1
                                            </div>
                                        </div>
                                        <div className="tab_text_name">
                                            Iphone 13 pro max 256gb
                                        </div>
                                        <div className="tab_buy_name">Количество</div>
                                        <div className="tab_text_name">1-количество</div>
                                        <div className="tab_buy_name">Дата</div>
                                        <div className="tab_text_name">01.11.2022</div>
                                        <div className="tab_buy_name">Статус</div>
                                        <div className="tab_text_name_2">
                                            Неоплачено
                                        </div>
                                        <div className="tab_buy_name">Сумма</div>
                                        <div className="tab_text_name">11 248 100 сум</div>
                                    </div>
                                    <div className="tab_buy_2">
                                        <div className="tab_buy_2_top">
                                            <div className="tab_buy_name">
                                                Продукт
                                            </div>
                                            <div className="tab_buy_num">
                                                #1
                                            </div>
                                        </div>
                                        <div className="tab_text_name">
                                            Iphone 13 pro max 256gb
                                        </div>
                                        <div className="tab_buy_name">Количество</div>
                                        <div className="tab_text_name">1-количество</div>
                                        <div className="tab_buy_name">Дата</div>
                                        <div className="tab_text_name">01.11.2022</div>
                                        <div className="tab_buy_name">Статус</div>
                                        <div className="tab_text_name_2">
                                            Неоплачено
                                        </div>
                                        <div className="tab_buy_name">Сумма</div>
                                        <div className="tab_text_name">11 248 100 сум</div>
                                    </div>

                                    <Link to='/' className="tab_out">
                                        <img src="/img/out_2.png" alt="" />
                                        Выйти
                                    </Link>

                                </TabPane>
                                <TabPane tabId="2" className=''>
                                    <div className="row">
                                        <div className="col-12 d-flex justify-content-center">
                                            <div className="tab_card">
                                                <div className="tab_card_top">
                                                    <div className="tab_card_left">
                                                        <div className="tab_card_left_img">
                                                            <img src="/img/card_1.png" alt="" />
                                                        </div>
                                                        SUM
                                                    </div>
                                                    <div className="tab_card_righ">
                                                        <img src="/img/card_2.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="tab_card_sum">4,680,000</div>
                                                <div className="tab_card_name"> <span>Card holder</span> Mahkam Erke</div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <Link to='/' className="tab_out">
                                                <img src="/img/out_2.png" alt="" />
                                                Выйти
                                            </Link>
                                        </div>

                                    </div>
                                </TabPane>
                                <TabPane tabId="3" className=''>
                                    <div className="row justify-content-center">
                                        <div className="col-md-6 d-flex flex-column align-items-center">
                                            <form onSubmit={changePassword} className='d-flex flex-column align-items-end w-100' action="">
                                                <div className="tab_parol">
                                                    <div className="tab_parol_box">
                                                        <div className="tab_parol_h">Stariy Пароль *</div>
                                                        <input value={old_password} onChange={e => setOldPassword(e.target.value)} required placeholder='******' type="text" name="" id="" className="tab_parol_inp" />
                                                    </div>
                                                    <div className="tab_parol_box">
                                                        <div className="tab_parol_h">Новый пароль *</div>
                                                        <input value={password} onChange={e => setPassword(e.target.value)} required placeholder='******' type="text" name="" id="" className="tab_parol_inp" />
                                                    </div>
                                                    <div className="tab_parol_box">
                                                        <div className="tab_parol_h">Повторить пароль *</div>
                                                        <input value={password2} onChange={e => setPassword2(e.target.value)} required placeholder='******' type="text" name="" id="" className="tab_parol_inp" />
                                                    </div>
                                                </div>
                                                <button type='submit' className="tab_parol_btn">Сохранить изменения</button>
                                            </form>
                                        </div>
                                        <div className="col-12">
                                            <Link to='/' className="tab_out">
                                                <img src="/img/out_2.png" alt="" />
                                                Выйти
                                            </Link>
                                        </div>
                                    </div>
                                </TabPane>
                            </TabContent>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile