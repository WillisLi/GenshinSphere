import React from "react"
import { BiChevronDown, BiChevronUp, BiHome } from "react-icons/bi";
import { GiSwordArray } from "react-icons/gi";
import { IoPersonOutline } from "react-icons/io5";

const NavBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <BiHome/>,
    },

    {
        title: 'Characters',
        path: '/characters',
        icon: <IoPersonOutline/>,
    },

    {
        title: 'Weapons',
        icon: <GiSwordArray/>,
        closedIcon: <BiChevronDown/>,
        openIcon: <BiChevronUp/>,

        subMenu: [
            {
                title: 'Sword',
                path: '/weapons/sword',
                icon: '',
            },
            {
                title: 'Claymore',
                path: '/weapons/claymore',
                icon: '',
            },
            {
                title: 'Bow',
                path: '/weapons/bow',
                icon: '',
            },
            {
                title: 'Catalyst',
                path: '/weapons/catalyst',
                icon: '',
            },
            {
                title: 'Polearm',
                path: '/weapons/polearm',
                icon: '',
            },
        ]
    },

    {
        title: 'Artifacts',
        path: '/artifacts',
        icon: '',
    },

    {
        title: 'Materials',
        path: '/materials',
        icon: '',
    },

    {
        title: 'Food',
        path: '/food',
        icon: '',
    },
];

export default NavBarData;