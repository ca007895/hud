import React from 'react';
import styled from "styled-components";
import ProgressBar from 'react-bootstrap/ProgressBar';

export function ProgressiveButtonIcon({ value, icon, color, showValue }) {

    const DadosCard = styled('div')`

    .bg-custom-color {
        background-color: ${color} !important;
    }
    `;

    const ProgressBarVertical = styled(ProgressBar)`

        transform: rotate(-90deg);
        background-color: ${color}

    `;

    return (
        <DadosCard>
            <ProgressBarVertical variant="custom-color" now={value} color={color}>
                {icon}
            </ProgressBarVertical>
            {/* <ProgressBar variant="info" now={20} />
            <ProgressBar variant="warning" now={60} />
            <ProgressBar variant="danger" now={80} /> */}
        </DadosCard>
    );
}

export default ProgressiveButtonIcon
