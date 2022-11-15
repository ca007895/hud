import React from 'react';
import { HudContainer } from './Styles'
import { FaHamburger } from 'react-icons/fa';
import CardItem from './components/card-item'
import CircleProgressiveBar from '../../components/circle-progress-bar/CircleProgressBar'
import ResizeComponent from '../../components/resize-component/ResizeComponent'


export function FirstSimpleHud({ data }) {

    return (
        <HudContainer>
            <ResizeComponent x={200} y={200} width={49} height={49} minHeight={'49px'} minWidth={'49px'} canEdit={true}>
                <CircleProgressiveBar strokeWidth={4} fontSize='12px' value={50} color={'#FF0000'} />
            </ResizeComponent>
        </HudContainer>
    );
}

export default FirstSimpleHud

