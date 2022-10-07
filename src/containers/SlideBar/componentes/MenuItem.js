import React from "react"
import {StyledListItem, ItemList, StyledToolTip} from "./styles"
import { useLocation } from 'react-router-dom'

function Sidebar({title, route, icon}) {
    const location = useLocation();
    const activeItem = useLocation().pathname === route.substring(1)
    return <StyledListItem>
        <StyledToolTip title={title} placement="left">
            <ItemList linkactive={activeItem.toString()} to={route}>{icon}</ItemList>
        </StyledToolTip>
    </StyledListItem>
}

export default Sidebar