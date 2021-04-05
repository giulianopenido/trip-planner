import styled from 'styled-components';
import DefaultImage from './../../assets/img/mykonos.jpg';
import DateHelper from './../../Helpers/DateHelper';

export const CardWrapper = styled.div`
    height: 400px;
    border-radius: 10px;
    box-shadow: 2px 2px 10px 1px rgb(0 0 0 / 20%);
    overflow: hidden;
    min-width:300px;
    max-width:300px;
    transition: 0.2s ease;
    margin: 16px 12px;

    &:hover {
        transform: scale(1.02)
    }

    @media screen and (max-width: 768px){
        min-width:188px;
        max-width:188px;
        height:250px;
    }

`;

const CardHeader = styled.div`
    background-position: center;
    background-size: cover;
    background-image: url(${DefaultImage});
    height: 50%;
`;


const CardBody = styled.div`
    height:50%;
    padding: 24px;
    
    h2 {
        margin: 0 0 4px 0;
        font-size: 1.17rem;
    }

    h3 {
        font-size: .9rem;
        margin: 0 0 8px 0;
        color: rgb(146, 148, 154);
    }
`;

const DateRange = styled.div`
    margin: 16px 0;
    display: flex;
    align-items: center;
    
    span {
        font-size: .8rem;

    }
`;

const RangeLine = styled.div`
    margin: 0 25px;
    border: 1px dashed black;
    flex-grow: 1;
    position: relative;

    &:before {
        content:"";
        position: absolute;
        top: -3.5px;
        left:-16px;
        border-radius: 50%;
        border: 3.5px solid rgb(110, 128, 185);
        background-color: rgb(110, 128, 185);
    }

    &:after {
        content:"";
        position: absolute;
        top: -3.5px;
        right:-16px;
        border-radius: 50%;
        border: 3.5px solid rgb(110, 128, 185);
        background-color: rgb(110, 128, 185);
    }

`;


function TripCard(props) {

    return (
        <CardWrapper>
            <CardHeader imgSrc={props.imgSrc}/>
            <CardBody>
                <h2>{props.trip.title}</h2>
                <h3>
                    {
                        props.trip.countries.join(", ")
                    }
                </h3>
                <DateRange>
                    <span>{DateHelper.dateToWeekDay(new Date(props.trip.startDate))}</span>
                    <RangeLine />
                    <span>{DateHelper.dateToWeekDay(new Date(props.trip.endDate))}</span>
                </DateRange>
            </CardBody>
        </CardWrapper>

    )

}   

export default TripCard;