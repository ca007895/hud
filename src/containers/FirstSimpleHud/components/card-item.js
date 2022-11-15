import React from 'react';
import styled from "styled-components";
import ProgressBar from 'react-bootstrap/ProgressBar';

export function CardItem({ value, icon }) {

    const ContainerCard = styled('div')`
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
    border-radius: 7px;
    `;

    const DadosCard = styled('div')`

    `;

    return (
        <ContainerCard>
            <DadosCard>
                {icon}
                <ProgressBar variant="success" now={value} />
                {/* <ProgressBar variant="info" now={20} />
            <ProgressBar variant="warning" now={60} />
            <ProgressBar variant="danger" now={80} /> */}
            </DadosCard>
        </ContainerCard>
    );
}

export default CardItem
