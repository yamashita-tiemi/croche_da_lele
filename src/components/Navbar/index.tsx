import NextLink from 'next/link'
import { HStack, Link } from "@chakra-ui/react"

import { Image } from "../Image"
import { TitleNavbar } from "../Title"

interface NavbarProps {
    login: string
    href: string
    children:any
}

export function Navbar({ login, href, children }: NavbarProps) {
    return (
        <HStack
            bg={"purple"}
            width={"100%"}
            height={"100px"}
            justifyContent={"space-between"}
            paddingX={6}
        // position={"fixed"}
        // top={0}
        >
            <Image src={"/logo.png"} alt={"Crochê da Lelê"} width={491} height={125} w="20%" />
            <HStack
                spacing={10}
            >
                <Link as={NextLink} href='/' color='lilac'>
                    <TitleNavbar title={"Home"} size={"32px"} />
                </Link>
                <Link as={NextLink} href='/contato' color='lilac'>
                    <TitleNavbar title={"Contato"} size={"32px"} />
                </Link>
                <Link as={NextLink} href='/membros' color='lilac'>
                    <TitleNavbar title={"Membros"} size={"32px"} />
                </Link>
            </HStack>
            <HStack
                w={"20%"}
                justifyContent={"flex-end"}
            >
                <Link as={NextLink} href={href} color='lilac'>
                    <TitleNavbar title={login} size={"32px"} />
                </Link>
                {children}
            </HStack>
        </HStack>
    )
}