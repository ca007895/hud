import styled from "styled-components";
import { withTheme, withStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List'
import Dialog from '@material-ui/core/Dialog'

export const StyledList = withTheme(styled(List)
`
`); 

export const StyledDialog = withTheme(styled(Dialog)
`
.MuiBackdrop-root {
    background-color: transparent
    }
`); 