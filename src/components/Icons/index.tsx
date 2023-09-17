import { HiMiniShoppingBag } from "react-icons/hi2";
import { TbLogout } from "react-icons/tb";
import { FaInstagram, FaWhatsapp, FaTiktok, FaTrash } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import { BiSolidPencil } from "react-icons/bi";
import { Button, HStack, Stack } from "@chakra-ui/react";

interface IconProps {
    width: string
    colorBg: string
    color: string
    children?:any
    margin?: any
    marginBottom?: any
}

export function Icon({ width, colorBg, color, children, margin, marginBottom }:IconProps) {
    return (
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
    )
}

export function IconShop() {
    return (
        <Icon width={"100px"} colorBg={"purple"} color={"offWhite"}>
            <HiMiniShoppingBag size={36} />
        </Icon>
    )
}

export function IconLogOut() {
    return (
        <Icon width={"100px"} colorBg={"purple"} color={"offWhite"}>
            <TbLogout size={40} />
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
            <Icon width={width} colorBg={"offWhite"} color={"#000"}><FaInstagram size={size}/></Icon>
            <Icon width={width} colorBg={"offWhite"} color={"#000"}><FaWhatsapp size={size}/></Icon>
            <Icon width={width} colorBg={"offWhite"} color={"#000"}><FaTiktok size={size}/></Icon>
        </HStack>
    )
}

interface IconSocialCRUDProps {
    // onOpenView: any
    onOpenEdit: any
    onOpenDelete: any
    id1: string
    id2: string
}