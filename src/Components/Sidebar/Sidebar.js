import { useState } from 'react';
import { Box, SidebarWrapper, Header, Avatar, Nav, ProfileName, SidebarSectionTitle } from './styles.js';
import { 
    KeyboardArrowLeft, 
    HomeOutlined, 
    MenuOpen, 
    FlightOutlined, 
    EventOutlined,
    AccountBalanceWalletOutlined,
    CommuteOutlined
} from '@material-ui/icons';
import { IconButton, Divider,ListItem } from '@material-ui/core';
import classnames from 'classnames';
import './styles.css';
import ProfilePic from './../../assets/img/profile.jpeg';
import { Link } from 'react-router-dom';

function Sidebar() {

    const [isToggled, setIsToggled] = useState(false);

    function toggleSidebar() {
        setIsToggled(!isToggled);
    }

    let toggleClasses = classnames({ opened: !isToggled }, { toggled: isToggled })

    return (
        <Box className={toggleClasses}>
            <SidebarWrapper className={toggleClasses}>
                <Header>
                    <Avatar>
                        <img src={ProfilePic} style={{width: "100%"}}></img>
                    </Avatar>
                    <ProfileName>Isadora Melo</ProfileName>
                    <IconButton 
                        className="open-sidebar-icon"
                        onClick={toggleSidebar}
                    >
                        <KeyboardArrowLeft className="color-white"/>
                    </IconButton>
                </Header>
                { isToggled && 
                <IconButton className="open-sidebar-icon" onClick={toggleSidebar}>
                    <MenuOpen className="color-white"/>
                </IconButton>
                }
                <Divider />
                <Nav>
                    <Link to="/">
                        <div className="sidebar-item">
                                <ListItem style={{padding: 0}} button>
                                    <HomeOutlined className="sidebar-icon"/>
                                    <div className="item-text"> Dashboard</div>
                                </ListItem>
                        </div>
                    </Link>
                </Nav>
                <Nav>
                    {
                        !isToggled &&
                        <SidebarSectionTitle>Travelling</SidebarSectionTitle>
                    }
                    <div className="sidebar-item">
                        <ListItem style={{padding: 0}} button>
                            <FlightOutlined className="sidebar-icon"/>
                            <div className="item-text"> My Trips</div>
                        </ListItem>
                    </div>
                    <div className="sidebar-item">
                        <ListItem style={{padding: 0}} button>
                            <EventOutlined className="sidebar-icon"/>
                            <div className="item-text"> Calendar</div>
                        </ListItem>
                    </div>
                </Nav>
                <Nav>
                    {
                        !isToggled &&
                        <SidebarSectionTitle>Trip Management</SidebarSectionTitle>
                    }
                    <div className="sidebar-item">
                        <ListItem style={{padding: 0}} button>
                            <AccountBalanceWalletOutlined className="sidebar-icon"/>
                            <div className="item-text"> Budget</div>
                        </ListItem>
                    </div>
                    <div className="sidebar-item">
                        <ListItem style={{padding: 0}} button>
                            <CommuteOutlined className="sidebar-icon"/>
                            <div className="item-text">Tickets</div>
                        </ListItem>
                    </div>
                </Nav>
            </SidebarWrapper>
        </Box>
    )
}

export default Sidebar;