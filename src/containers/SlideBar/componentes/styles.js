import React from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components";
import { withTheme, withStyles } from "@material-ui/core/styles";
import Tooltip from '@material-ui/core/Tooltip';

export const StyledListItem = withTheme(styled.li
`
    cursor: pointer;
    transition: all ease-out 120ms;
`); 

export const StyledIcon = withTheme(styled.i
    `
    display: block;
    font-size: 24px;
    transition: all ease 450ms;
    `); 

    
export const ItemList = withTheme(styled(Link)
`
    padding: 16px;
    font-size: 24px;
    text-decoration:none;
    display: block;
    transition: all ease 450ms;
    display: grid;
    justify-content: center;
    border-radius: 10px;
    align-items: center;
    background-color: ${(props) => props.linkactive === "true" ? props.theme.palette.hoverSidebarLinkColor : "transparent" };

    &:hover {
        background-color: ${(props) => props.theme.palette.hoverSidebarLinkColor};
    }
    .MuiSvgIcon-root {
        font-size: 34px;
        color:white;
    }
    
`);

export const StyledToolTip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.tooltipBackgroundColor,
    color: 'white',
    fontSize: 14,
  },
}))(Tooltip);
