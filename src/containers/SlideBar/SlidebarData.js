import React from 'react'
import ReceiptIcon from '@material-ui/icons/Receipt';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import BuildIcon from '@material-ui/icons/Build';
import { Routes } from '../../util/Routes';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import ApartmentIcon from '@material-ui/icons/Apartment';
import AutorenewIcon from '@material-ui/icons/Autorenew';
export const SlidebarData = [
    {
        title: "Home",
        icon: <AccountBalanceIcon />,
        link: Routes.Home
    },
    {
        title: "Requests",
        icon: <ReceiptIcon />,
        link: Routes.Requests
    },
    {
        title: "Factory",
        icon: <ApartmentIcon />,
        link: Routes.Factory
    },
    {
        title: "Deliver",
        icon: <LocalShippingIcon />,
        link: Routes.Deliver
    },
    {
        title: "Process miner",
        icon: <AutorenewIcon />,
        link: Routes.Wash
    },
    {
        title: "Upgrades",
        icon: <BuildIcon />,
        link: Routes.Upgrades
    },
    {
        title: "Bank",
        icon: <LocalAtmIcon />,
        link: Routes.Cash
    },
]