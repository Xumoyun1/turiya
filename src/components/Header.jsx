import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import { AccordionBody, AccordionHeader, AccordionItem, UncontrolledAccordion, Accordion } from 'reactstrap'
import axios from 'axios';
import { API_PATH } from '../tools/constats';
import { getText } from '../locales'

const Header = () => {
    const [activeTab, setActiveTab] = useState('1');
    const [burger, setBurger] = useState()
    const [catalog, setCatalog] = useState([])
    const [sub, setSub] = useState([])
    const [catName, setCatName] = useState('1')
    const [subCategory, setSubCategory] = useState([]);
    const [itemId, setItemId] = useState(1);
    const [product, setProduct] = useState();
    const [open, setOpen] = useState('1');
    const [head, setHead] = useState(false);
    const [head2, setHead2] = useState(false);

    const toggleAcc = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    }

    const getCatalog = () => {
        axios.get(API_PATH + 'product/category/')
            .then((res => {
                setCatalog(res.data)
                console.log(res.data);
            }))
    }
    const nav = useNavigate()
    const getProductbyCategory = (category_id) => {
        console.log(category_id);
        axios.get(API_PATH + `product/?cat=${category_id}`)
            .then((res => {
                setProduct(res.data)
                localStorage.setItem('CAT_ID', category_id)
                console.log(res.data);
                nav('/shop')
                // document.location.reload(true)
            }))
    }

    const test = () => {
        setBurger(!burger)
        axios.get(API_PATH + `product/category/1/`)
            .then((res => {
                setSub(res.data)
            }))
    }



    useEffect(() => {
        axios.get(API_PATH + `product/category/${itemId}/`)
            .then((res => {
                setSubCategory(res.data.subcategories);
                console.log(subCategory);
            }))
    }, [itemId])

    useEffect(() => {
        getCatalog();

    }, []);

    const location = useLocation()


    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const getHead = () => {

        setHead(true)
        if (head == true) {
            setHead(false)
            setHead2(false);
        }

    }
    const getHead2 = () => {
        setHead2(!head2)
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

                                <Link to="/"><img src="/img/logo_2.png" alt="" className="head_box_logo" /></Link>

                                <div className="head_box_box">
                                    <Link to="/favourite"><img src="/img/icon_love.png" alt="" className="head_box_love" /></Link>
                                    <Link to="/basket"><img src="/img/icon_box.png" alt="" className="head_box_buy" /></Link>
                                </div>

                            </div>
                        </div>


                        <div className="col-lg-10 col-12 d-flex align-items-center justify-content-end">
                            <Link to='/' className={`head_box_2 ${location.pathname === '/' ? 'active' : ''}`}>
                                <img src={`${location.pathname === '/' ? '/img/icon_house_2.png' : '/img/icon_house.png'}`} alt="" className="head_img" />
                                <div className="head_h">{getText('header_2')}</div>
                            </Link>
                            <Link to='/shop' className={`head_box_2 ${location.pathname === '/shop' ? 'active' : ''}`}>
                                <img src={`${location.pathname === '/shop' ? '/img/icon_buy_2.png' : '/img/icon_buy.png'}`}
                                    alt="" className="head_img" />
                                <div className="head_h">{getText('header_3')}</div>
                            </Link>
                            <Link to='/about' className={`head_box_2 ${location.pathname === '/about' ? 'active' : ''}`}>
                                <img src={`${location.pathname === '/about' ? '/img/icon_talk_2.png' : '/img/icon_talk.png'}`}
                                    alt="" className="head_img" />
                                <div className="head_h">{getText('header_4')}</div>
                            </Link>
                            <Link to='/politic' className={`head_box_2 ${location.pathname === '/politic' ? 'active' : ''}`}>
                                <img src={`${location.pathname === '/politic' ? '/img/icon_key_2.png' : '/img/icon_key.png'}`}
                                    alt="" className="head_img" />
                                <div className="head_h">{getText('header_5')}</div>
                            </Link>
                            <Link to='/public' className={`head_box_2 ${location.pathname === '/public' ? 'active' : ''}`}>
                                <img src={`${location.pathname === '/public' ? '/img/icon_bag_2.png' : '/img/icon_bag.png'}`}
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
                                        <Nav key={index} onClick={() => { setItemId(item.id) }} tabs>
                                            <NavItem>
                                                <NavLink id={item.id} className={classnames({ active: activeTab === item.id, })} onClick={() => { toggle(item.id); }}
                                                >
                                                    <div className="header_2_box mt-2">
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
                                {/* activeTab={activeTab} */}
                                <TabContent >
                                    {/* tabId={catName ? catName : '1'} */}
                                    <TabPane className=''>
                                        {/* {sub} */}
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="header_2_name">
                                                    {/* {catName.name} */}
                                                </div>
                                            </div>

                                            {subCategory && subCategory.length > 0 && subCategory.map((item2) => {
                                                return (
                                                    <div key={item2.id} className="col-lg-3 col-md-6 mb-5">
                                                        <div className="header_2_h_2">{item2.name}</div>
                                                        {item2.three_subcategories && item2.three_subcategories.map((item3, index3) => {
                                                            return (
                                                                <div onClick={() => (getProductbyCategory(item3.id))} key={index3}>
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
                                <div className="head_3_left">
                                    <div className="head_3_img_box"><img src="/img/icon_house_2.png" alt="" className="head_3_img" /></div>
                                    <div className="head_3_h">{getText('header_2')}</div>
                                </div>

                            </Link>
                            <Link to="/" className="head_3_a">
                                <div className="head_3_left">
                                    <div className="head_3_img_box"><img src="/img/icon_buy_2.png" alt="" className="head_3_img" /></div>
                                    <div className="head_3_h">{getText('header_3')}</div>
                                </div>

                            </Link>
                            <Link to="/" className="head_3_a">
                                <div className="head_3_left">
                                    <div className="head_3_img_box"><img src="/img/icon_talk_2.png" alt="" className="head_3_img" /></div>
                                    <div className="head_3_h">{getText('header_4')}</div>
                                </div>

                            </Link>
                            <Link to="/" className="head_3_a">
                                <div className="head_3_left">
                                    <div className="head_3_img_box"><img src="/img/icon_key_2.png" alt="" className="head_3_img" /></div>
                                    <div className="head_3_h">{getText('header_5')}</div>
                                </div>

                            </Link>
                            <Link to="/" className="head_3_a">
                                <div className="head_3_left">
                                    <div className="head_3_img_box"><img src="/img/icon_bag_2.png" alt="" className="head_3_img" /></div>
                                    <div className="head_3_h">{getText('header_6')}</div>
                                </div>

                            </Link>


                            {catalog && catalog.map((item, index) => {
                                return (
                                    <div key={index} className="head_4_a">
                                        <div onClick={() => getHead()} className="head_4_box">
                                            <div className="head_4_left">
                                                <div className="head_4_img_box"><img src={item.get_icon} alt="" className="head_4_img" /></div>
                                                <div className="head_4_h">{item.name}</div>
                                            </div>
                                            <img className={`head_4_a_icon ${head ? 'active' : ''}`} src="/img/down.png" alt="" />
                                        </div>


                                        <div onClick={() => getHead2()} className={`head_4_box_2 ${head ? 'active' : ''}`}>
                                            <div className="head_4_left">
                                                <div className="head_4_h">{getText('header_6')}</div>
                                            </div>
                                            <img className={`head_4_a_icon ${head2 ? 'active' : ''}`} src="/img/down.png" alt="" />
                                        </div>


                                        <div className={`head_4_box_3 ${head2 ? 'active' : ''}`}>
                                            <div className="head_4_left">
                                                <div className="head_4_h">{getText('header_6')}</div>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })}















                            {/* <UncontrolledAccordion >
                                <AccordionItem>

                                    {catalog && catalog.map((item, index) => {
                                        return (
                                            <AccordionHeader key={index} targetId={item.id} >
                                                <div className="head_3_accor">
                                                    <div className="head_3_accor_text">
                                                        <div className="head_3_accor_img">
                                                            <img src={item.get_icon} alt="" className="head_3_accor_image" />
                                                        </div>
                                                        <div className="head_3_accor_name">{item.name}</div>
                                                    </div>
                                                    <img src="/img/h_3_arrow.png" alt="" className="head_3_accor_arrow" />
                                                </div>
                                            </AccordionHeader>

                                        )
                                    })}

                                    {
                                        subCategory && subCategory.length > 0 && subCategory.map((item2) => {
                                            return (
                                                <AccordionBody key={item2.id} accordionId={item2.id}>
                                                    <UncontrolledAccordion >
                                                        <AccordionItem className='acc_item'>
                                                            <AccordionHeader targetId={item2.id} >
                                                                <div className="head_3_accor">
                                                                    <div className="head_3_accor_text">
                                                                        <div className="head_3_accor_name">{item2.name}</div>
                                                                    </div>
                                                                    <img src="/img/h_3_arrow.png" alt="" className="head_3_accor_arrow" />
                                                                </div>
                                                            </AccordionHeader>
                                                            {item2.three_subcategories && item2.three_subcategories.map((item3, index3) => {
                                                                return (
                                                                    <AccordionBody key={index3} accordionId={item3.id}>
                                                                        <Link to="/shop" className="head_3_accor_box_2">
                                                                            <div className="head_3_accor_box_2_h">
                                                                                {item3.name}
                                                                            </div>
                                                                        </Link>
                                                                    </AccordionBody>
                                                                )
                                                            })}
                                                        </AccordionItem>
                                                    </UncontrolledAccordion>
                                                </AccordionBody>
                                            )
                                        })
                                    }


                                </AccordionItem>
                            </UncontrolledAccordion> */}

                            {/* <Accordion open={open} toggle={toggleAcc}>

                                {catalog && catalog.map((item) => {
                                    return (
                                        <AccordionItem>
                                            <AccordionHeader targetId={1} onClick={() => setItemId(1)}>Accordion Item 1</AccordionHeader>
                                            <AccordionBody accordionId={itemId}>
                                                {subCategory && subCategory.map((nested_item) => {
                                                    return (
                                                        <AccordionItem>
                                                            <AccordionHeader targetId="3">Sub Accordion Item 2</AccordionHeader>
                                                            <AccordionBody accordionId="3">
                                                                <strong>This is the second item&#39;s accordion body.</strong>
                                                                You can modify any of this with custom CSS or overriding our default
                                                                variables. It&#39;s also worth noting that just about any HTML can
                                                                go within the <code>.accordion-body</code>, though the transition
                                                                does limit overflow.
                                                            </AccordionBody>
                                                        </AccordionItem>
                                                    )
                                                })}
                                            </AccordionBody>
                                        </AccordionItem>
                                    )
                                })}
                                <AccordionItem>
                                    <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
                                    <AccordionBody accordionId="2">
                                        <strong>This is the second item&#39;s accordion body.</strong>
                                        You can modify any of this with custom CSS or overriding our default
                                        variables. It&#39;s also worth noting that just about any HTML can
                                        go within the <code>.accordion-body</code>, though the transition
                                        does limit overflow.
                                    </AccordionBody>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
                                    <AccordionBody accordionId="3">
                                        <strong>This is the third item&#39;s accordion body.</strong>
                                        You can modify any of this with custom CSS or overriding our default
                                        variables. It&#39;s also worth noting that just about any HTML can
                                        go within the <code>.accordion-body</code>, though the transition
                                        does limit overflow.
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion> */}





                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Header