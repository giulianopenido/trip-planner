import styled from 'styled-components';

export const Box = styled.div`
    position:relative;
    transition: width .2s ease-in-out;
    flex: 0 0 auto;  
    flex-shrink: 0;
    white-space: nowrap;
`

export const SidebarWrapper = styled.div` 
    height:100%;
    position:fixed;
    top:0;
    background-color: rgb(96, 0, 238);
    transition: width .2s ease-in-out;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow-x: hidden;
    flex:1 0 auto;
`

export const Header = styled.header`
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding-top:8px;
    padding-bottom:8px;
`
export const Avatar=styled.div`
    width: 56px;
    height: 56px;
    margin-left:12px;
    margin-right:12px;
    display: flex;
    overflow: hidden;
    position: relative;
    font-size: 1.25rem;
    align-items: center;
    flex-shrink: 0;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    line-height: 1;
    user-select: none;
    border-radius: 50%;
    justify-content: center;

    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
        margin-left:8px;
        margin-right:8px;
    }
`

export const ProfileName = styled.h2`
    color: white;
    font-size: 1.1rem;
    font-weight:300;
`

export const Nav = styled.ul`
    margin-top: 0;
    margin-bottom: 32px;
    padding:0;

    .sidebar-icon {
        color: white;
        margin: 24px;
        width: 32px;
        height: 32px;
        @media (max-width: 768px) {
            margin: 16px;
            width: 25px;
            height: 25px;
        }
    }

    .item-text {
        font-size: 1rem;
        color:white;
        font-weight:500;
    }
`

export const SidebarSectionTitle = styled.h3`
    color:white;
    font-weight:300;
    margin: 0 0 8px 24px;
`
