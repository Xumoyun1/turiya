import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import { AccordionBody, AccordionHeader, AccordionItem, UncontrolledAccordion } from 'reactstrap'
import axios from 'axios';
import { API_PATH } from '../tools/constats';
import { getText } from '../locales'

const Header = () => {
    const [activeTab, setActiveTab] = useState('1');
    const [burger, setBurger] = useState()
    const [catalog, setCatalog] = useState([])
    const [sub, setSub] = useState([])
    const [catName, setCatName] = useState('1')

    const [sub2, setSub2] = useState('')

    const getSub2 = (id) => {
        axios.get(API_PATH + `product/category/${id}/`)
            .then((res => {
                setSub2(res.data)
            }))
    }



    const getCatalog = () => {
        axios.get(API_PATH + 'product/category/')
            .then((res => {
                setCatalog(res.data)
                // console.log(res.data);
            }))
    }


    const test = () => {
        setBurger(!burger)
        axios.get(API_PATH + `product/ayjwdyawd/1/`)
            .then((res => {
                // console.log(res.data);
                setSub(res.data)
                // console.log(res.data);
            }))
    }

    const getSubcategory = (id) => {
        axios.get(API_PATH + `product/category/${id}/`)
            .then((res => {
                // console.log(id);
                // console.log(res.data);
                setSub(res.data)
                setCatName(id)
                // console.log(res.data);
            }))
    }


    useEffect(() => {
        getCatalog();
    }, []);

    const location = useLocation()


    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }



    return (
        <>
            <div className="top_3"></div>
            <div className={`Header ${burger ? 'active' : ''}`}>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-1 d-flex justify-content-between">
                            <div onClick={test} className={`head_box ${burger ? 'active' : ''}`}>
                                <div className="head_box_l">
                                    <div className="head_l_1"></div>
                                    <div className="head_l_2"></div>
                                    <div className="head_l_3"></div>
                                </div>
                                <div className="head_name">{getText('header_1')}</div>

                                <img src="/img/logo_2.png" alt="" className="head_box_logo" />

                                <div className="head_box_box">
                                    <img src="/img/icon_love.png" alt="" className="head_box_love" />
                                    <img src="/img/icon_box.png" alt="" className="head_box_buy" />
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-10 col-12 d-flex align-items-center justify-content-end">
                            <Link to='/' className={`head_box_2 ${location.pathname === '/' ? 'active' : ''}`}>
                                <img src={`${location.pathname === '/' ? '/img/icon_house_2.png' : '/img/icon_house.png'}`} alt="" className="head_img" />
                                <div className="head_h">{getText('header_2')}</div>
                            </Link>
                            <Link to='/shop' className={`head_box_2 ${location.pathname === '/favourite' ? 'active' : ''}`}>
                                <img src={`${location.pathname === '/favourite' ? '/img/icon_buy_2.png' : '/img/icon_buy.png'}`}
                                    alt="" className="head_img" />
                                <div className="head_h">{getText('header_3')}</div>
                            </Link>
                            <Link to='/about' className={`head_box_2 ${location.pathname === '/basket' ? 'active' : ''}`}>
                                <img src={`${location.pathname === '/basket' ? '/img/icon_talk_2.png' : '/img/icon_talk.png'}`}
                                    alt="" className="head_img" />
                                <div className="head_h">{getText('header_4')}</div>
                            </Link>
                            <Link to='/politic' className={`head_box_2 ${location.pathname === '/card' ? 'active' : ''}`}>
                                <img src={`${location.pathname === '/card' ? '/img/icon_key_2.png' : '/img/icon_key.png'}`}
                                    alt="" className="head_img" />
                                <div className="head_h">{getText('header_5')}</div>
                            </Link>
                            <Link to='/public' className={`head_box_2 ${location.pathname === '/about' ? 'active' : ''}`}>
                                <img src={`${location.pathname === '/about' ? '/img/icon_bag_2.png' : '/img/icon_bag.png'}`}
                                    alt="" className="head_img" />
                                <div className="head_h">{getText('header_6')}</div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={`header_2 ${burger ? 'active' : ''}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-6">

                                {catalog && catalog.map((item, index) => {
                                    return (
                                        <Nav key={index} tabs>
                                            <NavItem>
                                                <NavLink id={item.id} className={classnames({ active: activeTab === item.id, })} onClick={() => { toggle(item.id); }}
                                                >
                                                    <div onClick={() => getSubcategory(item.id)} className="header_2_box mt-2">
                                                        <div className="d-flex">
                                                            <img src={item.get_icon} alt="" className="header_2_img" />
                                                            <div className="header_2_h">{item.name}</div>
                                                        </div>
                                                        <img src='' alt="" className="header_2_arrow" />
                                                    </div>
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    )
                                })}
                            </div>
                            <div className="col-lg-1 col-1 d-flex justify-content-center">
                                <div className="head_2_line"></div>
                            </div>
                            <div className="col-lg-8 col-5">
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId={catName ? catName : '1'} className=''>
                                        {/* {sub} */}
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="header_2_name">
                                                    {/* {catName.name} */}
                                                </div>
                                            </div>
                                            {sub && sub.map((item2, index2) => {
                                                return (
                                                    <div key={index2} className="col-lg-3 col-md-6 mb-5">
                                                        <div className="header_2_h_2">{item2.name}</div>
                                                        {item2.three_subcategory && item2.three_subcategory.map((item3, index3) => {
                                                            return (
                                                                <div key={index3}>
                                                                    <div className="header_2_p">{item3.name}</div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </TabPane>
                                </TabContent>

                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className={`header_3 ${burger ? 'active' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Link to="/" className="head_3_a">
                                <div className="head_3_img_box"><img src="/img/icon_house_2.png" alt="" className="head_3_img" /></div>
                                <div className="head_3_h">{getText('header_2')}</div>
                            </Link>
                            <Link to="/" className="head_3_a">
                                <div className="head_3_img_box"><img src="/img/icon_buy_2.png" alt="" className="head_3_img" /></div>
                                <div className="head_3_h">{getText('header_3')}</div>
                            </Link>
                            <Link to="/" className="head_3_a">
                                <div className="head_3_img_box"><img src="/img/icon_talk_2.png" alt="" className="head_3_img" /></div>
                                <div className="head_3_h">{getText('header_4')}</div>
                            </Link>
                            <Link to="/" className="head_3_a">
                                <div className="head_3_img_box"><img src="/img/icon_key_2.png" alt="" className="head_3_img" /></div>
                                <div className="head_3_h">{getText('header_5')}</div>
                            </Link>
                            <Link to="/" className="head_3_a">
                                <div className="head_3_img_box"><img src="/img/icon_bag_2.png" alt="" className="head_3_img" /></div>
                                <div className="head_3_h">{getText('header_6')}</div>
                            </Link>
                            <UncontrolledAccordion >
                                <AccordionItem>
                                    <AccordionHeader targetId="1" >
                                        <div className="head_3_accor">
                                            <div className="head_3_accor_text">
                                                <div className="head_3_accor_img">
                                                    <img src="/img/h_2_1.png" alt="" className="head_3_accor_image" />
                                                </div>
                                                <div className="head_3_accor_name">Женская одежда</div>
                                            </div>
                                            <img src="/img/h_3_arrow.png" alt="" className="head_3_accor_arrow" />
                                        </div>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="1">
                                        <UncontrolledAccordion >
                                            <AccordionItem className='acc_item'>
                                                <AccordionHeader targetId="1" >
                                                    <div className="head_3_accor">
                                                        <div className="head_3_accor_text">
                                                            <div className="head_3_accor_name">Джемпры и кардиганы</div>
                                                        </div>
                                                        <img src="/img/h_3_arrow.png" alt="" className="head_3_accor_arrow" />
                                                    </div>
                                                </AccordionHeader>
                                                <AccordionBody accordionId="1">
                                                    <Link to="" className="head_3_accor_box_2">
                                                        <div className="head_3_accor_box_2_h">
                                                            Джемпры
                                                        </div>
                                                    </Link>
                                                </AccordionBody>
                                            </AccordionItem>
                                        </UncontrolledAccordion>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader targetId="2" >
                                        <div className="head_3_accor">
                                            <div className="head_3_accor_text">
                                                <div className="head_3_accor_img">
                                                    <img src="/img/h_2_1.png" alt="" className="head_3_accor_image" />
                                                </div>
                                                <div className="head_3_accor_name">Женская одежда</div>
                                            </div>
                                            <img src="/img/h_3_arrow.png" alt="" className="head_3_accor_arrow" />
                                        </div>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="2">
                                        <UncontrolledAccordion >
                                            <AccordionItem className='acc_item'>
                                                <AccordionHeader targetId="2" >
                                                    <div className="head_3_accor">
                                                        <div className="head_3_accor_text">
                                                            <div className="head_3_accor_name">Джемпры и кардиганы</div>
                                                        </div>
                                                        <img src="/img/h_3_arrow.png" alt="" className="head_3_accor_arrow" />
                                                    </div>
                                                </AccordionHeader>
                                                <AccordionBody accordionId="2">
                                                    <Link to="" className="head_3_accor_box_2">
                                                        <div className="head_3_accor_box_2_h">
                                                            Джемпры
                                                        </div>
                                                    </Link>
                                                </AccordionBody>
                                            </AccordionItem>
                                        </UncontrolledAccordion>
                                    </AccordionBody>
                                </AccordionItem>
                            </UncontrolledAccordion>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header