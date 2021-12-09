import React from "react"
import { BiChevronDown, BiChevronUp, BiHome, BiFoodMenu } from "react-icons/bi";
import { GiSwordArray } from "react-icons/gi";
import { HiTemplate } from "react-icons/hi";
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
        path: '/weapons',
        icon: <GiSwordArray/>,
    },

    {
        title: 'Banners',
        icon: '',
        closedIcon: <BiChevronDown/>,
        openIcon: <BiChevronUp/>,
        
        subMenu: [
            {
                title: 'History',
                path: '/banners',
                icon: '',
            },
            {
                title: '5* Weapon Archive',
                path: '/banners/5*weapon',
                icon: '',
            },
            {
                title: '4* Character Archive',
                path: '/banners/4*char',
                icon: '',
            },
            {
                title: '4* Weapon Archive',
                path: '/banners/4*weapon',
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
        title: 'Elements',
        path: '/elements',
        icon: '',
    },

    {
        title: 'Materials',
        path: '/materials',
        icon: <HiTemplate/>,
    },

    {
        title: 'Food',
        path: '/food',
        icon: <BiFoodMenu/>,
    },
];

export default NavBarData;