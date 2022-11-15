import React from 'react'
import styled from "styled-components";
import { withTheme } from "@material-ui/core/styles";

export const HudContainer = withTheme(styled.div
`
    width: calc(100% - 10px);
    height: calc(100% - 11px);
`);