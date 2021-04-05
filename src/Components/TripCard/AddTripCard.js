import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import { Add } from '@material-ui/icons';


export const CardWrapper = styled.div`
    height: 400px;
    border-radius: 10px;
    overflow: hidden;
    min-width: 300px;
    max-width: 300px;
    transition: 0.2s ease;
    margin: 16px 12px;
    border: dashed 5px rgb(235, 231, 239);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    &:hover {
        transform: scale(1.02)
    }

    @media screen and (max-width: 768px){
        min-width:188px;
        max-width:188px;
        height:250px;
    }

    p {
        color:rgb(191, 191, 197);
    }
`;


function AddTripCard(props) {
    return (
        <CardWrapper>
            <IconButton style={ {width: "3rem", height:"3rem" }}><Add fontSize='large'style={ {color: "rgb(106, 115, 216)"}}/></IconButton>
            <p>Create Trip</p>
        </CardWrapper>
    )
}

export default AddTripCard;