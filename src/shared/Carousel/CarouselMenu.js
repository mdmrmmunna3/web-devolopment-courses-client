import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import frontEnd2 from '../../assets/banner/frontEnd2.png';
import imge1 from '../../assets/banner/imge1.jpg';
import imge2 from '../../assets/banner/imge2.png';
import imge3 from '../../assets/banner/imge3.png';
import './CarouselMenu.css'

const CarouselMenu = () => {
    return (
        <Carousel className='style'>
            <Carousel.Item>
                <img
                    className="d-block "
                    src={imge1}
                    alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block "
                    src={imge2}
                    alt="Second slide"
                />

            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block "
                    src={imge3}
                    alt="Third slide"
                />

            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block "
                    src={frontEnd2}
                    alt="Third slide"
                />
            </Carousel.Item>

        </Carousel>

    );
};

export default CarouselMenu;