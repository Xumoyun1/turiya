import React from 'react'
import Header from '../components/Header'

const About = () => {
    return (
        <>
            <Header />
            <div className="About">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12">
                            <div className="ab_link">
                                <a href="" className="ab_a">Главное /</a>
                                <div className="ab_a_h">
                                    О нас
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="ab_name">
                                О Нас
                            </div>
                            <div className="ab_p">
                                Turiya.uz -высокое качество обслуживания, обеспечение более быстрого и удобного процесса покупки.
                                <br />
                                <br />
                                Turiya.uz в 14% покупатели имеют право приобрести товар в кредит. Наша команда состоит из молодых, амбициозных и трудолюбивых людей, которые стремятся идти в ногу со временем и неустанно работать над собой. Члены нашей сплоченной команды подходят к каждой работе профессионально и творчески.Естественно, что вы подбираете дорогих клиентов!
                            </div>
                            <div className="ab_p">
                                Turiya.uz -высокое качество обслуживания, обеспечение более быстрого и удобного процесса покупки.
                                <br />
                                <br />
                                Turiya.uz в 14% покупатели имеют право приобрести товар в кредит. Наша команда состоит из молодых, амбициозных и трудолюбивых людей, которые стремятся идти в ногу со временем и неустанно работать над собой. Члены нашей сплоченной команды подходят к каждой работе профессионально и творчески.Естественно, что вы подбираете дорогих клиентов!
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src="/img/ab_1.png" alt="" className="ab_img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About