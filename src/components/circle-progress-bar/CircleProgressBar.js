import React from 'react';
import styled from "styled-components";
import { CircleProgress } from 'react-gradient-progress'
import { Rnd } from "react-rnd";
import  { useEffect, useState } from 'react';

export function CircleProgressiveBar({ value, color, endColor, fontColor, fillColor, tamanho, fontSize, strokeWidth }) {
    console.log(tamanho)
    return (

            <CircleProgress percentage={value}
                strokeWidth={strokeWidth}
                width={tamanho.width}
                primaryColor={[color, endColor]}
                fill={fillColor}
                fontColor={fontColor}
                fontSize={fontSize}
                fontFamily={'fantasy'}
                secondaryColor={'#a0a0a0'} />

    );
}

export default CircleProgressiveBar
