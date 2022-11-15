import React from 'react';
import styled from "styled-components";
import { CircleProgress } from 'react-gradient-progress'
import { Rnd } from "react-rnd";
import { useEffect, useState } from 'react';

export function ResizeContainer({ width, height, x, y, canEdit, children, minWidth, minHeight }) {

    const [tamanho, setTamanho] = useState({ width: width, height: height });
    const [position, setPosition] = useState({ x: x ?? 0, y: y ?? 0 });

    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { tamanho });
        }
        return child;
    });



    const EditContainer = styled('div')`
        border: 1px solid #eee;
    `;
    return (
        <Rnd
            enableResizing={canEdit ?? false}
            disableDragging={!canEdit ?? true}
            minWidth={minWidth}
            bounds={'parent'}
            minHeight={minHeight}
            default={{
                x: position.x,
                y: position.y,
                width: tamanho.width,
                height: tamanho.height,
            }}
            lockAspectRatio={true}
            onDragStop={(e, d) => { console.log(d); setPosition({ x: d.x, y: d.y }) }}
            onResize={(e, direction, ref, delta, position) => {
                setTamanho({
                    width: ref.offsetWidth,
                    height: ref.offsetHeight,
                    ...position,
                });
            }}
        >

            {canEdit ? <EditContainer> {childrenWithProps} </EditContainer> : childrenWithProps}
        </Rnd>

    );
}

export default ResizeContainer
