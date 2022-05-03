import React, { useEffect } from 'react'
import { Carousel } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getCarouselAction } from '../../../redux/actions/CarouselAction';


export default function HomeCarousel() {
    const contentStyle = {
        height: '600px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% ',
        backgroundPosition: 'top'

    }
    const { arrImg } = useSelector(state => state.CarouselReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCarouselAction)
    }, [])


    const renderImg = () => {
        return arrImg.map((item, index) => {
            return <div key={index}>
                <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }} >
                    <img src={item.hinhAnh} className='w-full h-max opacity-0 ' alt="img_carousel" />
                </div>
            </div >
        })
    }
    return (
        <Carousel autoplay>
            {renderImg()}
        </Carousel>
    )
}
