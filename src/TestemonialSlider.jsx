import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '@mui/material/Card';

function TestemonialSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            <Card>Lorem ipsum dolor sit amet...</Card>
            <Card>Lorem ipsum dolor sit amet...</Card>
            <Card>Lorem ipsum dolor sit amet...</Card>
            <Card>Lorem ipsum dolor sit amet...</Card>
            <Card>Lorem ipsum dolor sit amet...</Card>
        </Slider>
    );
}

export default TestemonialSlider;