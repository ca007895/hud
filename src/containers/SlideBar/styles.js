import React from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components";
import { withTheme } from "@material-ui/core/styles";

export const SlideBarContainer = withTheme(styled.div
`
    display: inline-block;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    min-height: 100%;
    width: 80px;
    background-color: ${(props) => props.theme.palette.sidebarBackgroundColor};
    float: left;
`);

export const ListContainer = withTheme(styled.ul
`
    text-align: center;
    color: white;
    list-style-type: none;
`);

export const ItemList = withTheme(styled(Link)
`
    padding: 16px;
    font-size: 24px;
    text-decoration:none
`);


export const TitleMenu = withTheme(styled.span
`
    color: ${(props) => props.theme.palette.sidebarBackgroundColor};
`);