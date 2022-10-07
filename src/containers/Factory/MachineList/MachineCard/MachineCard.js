import React from "react"
import {ContainerMachineCard} from "./styles"
import Nui from '../../../../util/Nui';

function MachineCard({ machine }) {
    return <ContainerMachineCard>
        {machine.name} - {machine.level}
        <div>
            {machine.minuteslimit}
            {machine.farmPerMinute}
        </div>
        <button onClick={() => Nui.send("sellMachine", machine)}>
            Upgrade
        </button>
        <button onClick={() => Nui.send("updateMachine", machine)}>
            Upgrade
        </button>
        <button onClick={() => Nui.send("getStonesMachine", machine)}>
            Click to get {machine.stones} stones
        </button>
    </ContainerMachineCard>
}

export default MachineCard
