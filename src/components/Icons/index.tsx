import NextLink from 'next/link'

import { HiMiniShoppingBag } from "react-icons/hi2";
import { TbLogout } from "react-icons/tb";
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { HStack, Link, Stack } from "@chakra-ui/react";

interface IconProps {
    width: string
    colorBg: string
    color: string
    children?:any
    margin?: any
    marginBottom?: any
    href: string
    isExternal?: boolean
}

export function Icon({ width, colorBg, color, children, margin, marginBottom, href, isExternal }:IconProps) {
    return (
            <Link as={NextLink} href={href} isExternal={isExternal}>
                <Stack
                    color={color}
                    bg={colorBg}
                    borderRadius={"50%"}
                    width={width}
                    height={width}
                    alignItems={"center"}
                    justifyContent={"center"}
                    margin={margin}
                    marginBottom={marginBottom}
                >
                    {children}
                </Stack>
            </Link>
    )
}

export function IconShop() {
    return (
        <Icon width={"100px"} colorBg={"purple"} color={"offWhite"} href={'/'}>
            <HiMiniShoppingBag size={36} />
        </Icon>
    )
}

interface IconLogOutProps {
    size: number
    bg: string
    color: string
}

export function IconLogOut({ size, bg, color }:IconLogOutProps) {
    return (
        <Icon width={"100px"} colorBg={bg} color={color} href={'/login'}>
            <TbLogout size={size} />
        </Icon>
    )
}

interface IconSocialMediaProps {
    size: number
    width: string
}

export function IconSocialMedia({ size, width }:IconSocialMediaProps) {
    return (
        <HStack>
            <Icon width={width} colorBg={"offWhite"} color={"#000"} href={'https://www.instagram.com/'} isExternal><FaInstagram size={size}/></Icon>
            <Icon width={width} colorBg={"offWhite"} color={"#000"} href={'https://web.whatsapp.com/'} isExternal><FaWhatsapp size={size}/></Icon>
            <Icon width={width} colorBg={"offWhite"} color={"#000"} href={'https://www.tiktok.com/pt-BR/'} isExternal><FaTiktok size={size}/></Icon>
        </HStack>
    )
}