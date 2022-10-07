import React from "react"
import { SlidebarData } from "./SlidebarData.js"
import {SlideBarContainer, ListContainer} from "./styles"
import MenuItem from "./componentes/MenuItem"
function Sidebar() {
    return <SlideBarContainer>
        <ListContainer>
            {
                SlidebarData.map((val, key) => {
                    return <MenuItem key={key} title={val.title} route={val.link} icon={val.icon}/>
                })
            }
        </ListContainer>
    </SlideBarContainer>
}

export default Sidebar