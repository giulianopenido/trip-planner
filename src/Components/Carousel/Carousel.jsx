import { useState } from 'react';
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import DimensionHelper from './../../Helpers/DimensionHelper';

//height: ${props => props.height || "350px"};
//height: ${props => props.height || "350px"};

const CarouselWrapper = styled.div`
    max-width: calc(100% - 100px);
    position: relative;
    margin: 0 auto;
    padding:16px 0;
`;

const CarouselBox = styled.div`
    width: auto;
    overflow: hidden;
    white-space: nowrap;
    display: inline-block;
    display: flex;
    align-items: center;
`;

const Switch = styled.a`
    font-weight: bold;
    height: 100%;
    width: 45px;
    text-align: center;
    font-family: sans-serif;
    top: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    
`;

const SwitchRight = styled(Switch)`
    position: absolute;
    right: -50px;
    justify-content: flex-end;
`;

const SwitchLeft = styled(Switch)`
    position: absolute;
    left: -50px;
    justify-content: flex-start;
`;


function Carousel(props) {

    const [scrollAmount, setScrollAmount] = useState(300);

    function scrollLeft() {
        const carousel = document.querySelector("#tripCarousel");
        const jumpedWidth = DimensionHelper.getChildWidth(carousel);
        console.log(jumpedWidth);
        let newScrollAmount =  scrollAmount - jumpedWidth;
        if (newScrollAmount < 0) {
            newScrollAmount = 0;
        }
        carousel.scrollTo({
            top: 0,
            left: (newScrollAmount),
            behavior: "smooth",
        });
        setScrollAmount(newScrollAmount);
    }

    function scrollRight() {
        const carousel = document.querySelector("#tripCarousel");
        if (scrollAmount <= carousel.scrollWidth - carousel.clientWidth) {
            const jumpedWidth = DimensionHelper.getChildWidth(carousel);
            const newScrollAmount =  scrollAmount + jumpedWidth;
            carousel.scrollTo({
                top: 0,
                left: (newScrollAmount),
                behavior: "smooth",
            });
            setScrollAmount(newScrollAmount);
        }
    }

    return (
        <CarouselWrapper height={props.height}>
            <CarouselBox height={props.height} id="tripCarousel">
                {props.children}
            </CarouselBox>
            <SwitchLeft>
                <IconButton onClick={scrollLeft}> <ArrowBackIos /> </IconButton>
            </SwitchLeft>
            <SwitchRight>
                <IconButton onClick={scrollRight}> <ArrowForwardIos /> </IconButton>
            </SwitchRight>
        </CarouselWrapper>
    )
}

export default Carousel;