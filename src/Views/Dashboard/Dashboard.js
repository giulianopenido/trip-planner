import styled from 'styled-components';
import Carousel from '../../Components/Carousel/Carousel';
import TripCard from '../../Components/TripCard/TripCard';
import trips from '../../Seeds/trips.json'
import AddTripCard from './../../Components/TripCard/AddTripCard';

const Main = styled.main`
    padding: 24px;
    flex-grow:1;
    max-width:calc(100% - 57px);
    min-width:calc(100% - 300px);
    display: flex;
    flex-direction:column;
    @media screen and (max-width: 768px){
        font-size:12px;
    }
`
const DashboardTitle = styled.h1`
    margin: 0 0 24px 0;
    @media screen and (max-width: 768px){

    }
`

function Dashboard() {

    return (
        <Main>
            <DashboardTitle>Welcome, Isadora Melo!</DashboardTitle>
            <Carousel height={"420px"}>
                <AddTripCard />
                {
                    trips.map( (trip) => (

                        <TripCard trip={trip}></TripCard>
                    ))
                }
            </Carousel>
        </Main> 
    )
}

export default Dashboard;