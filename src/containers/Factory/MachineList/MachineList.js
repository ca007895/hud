import React from "react"
import MachineCard from "./MachineCard/MachineCard"
function MachineList({ machines }) {
    if (machines && machines.length > 0) {
        return <div>
            {machines.map((machine => <MachineCard machine={machine} />))}
        </div>
    } else {
        return <div>
           <span>Dont have machines yet</span>
        </div>

    }
}

export default MachineList
