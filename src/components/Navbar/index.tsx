import NextLink from 'next/link'
import { HStack, Link } from "@chakra-ui/react"
import { Image } from "../Image"
import { TitleNavbar } from "../Title"

export function Navbar() {
    return (
        <HStack
            bg={"purple"}
            height={"100px"}
            justifyContent={"space-between"}
            paddingX={6}
        >
            <Image src={"/logo.png"} alt={"Crochê da Lelê"} width={491} height={125} w="20%" />
            <HStack
                spacing={10}
            >
                <Link as={NextLink} href='/' colorScheme='lilac'>
                    <TitleNavbar title={"Home"} size={"32px"} />
                </Link>
                <Link as={NextLink} href='/contato'>
                    <TitleNavbar title={"Contato"} size={"32px"} />
                </Link>
                <Link as={NextLink} href='/membros'>
                    <TitleNavbar title={"Membros"} size={"32px"} />
                </Link>
            </HStack>
            <HStack
                spacing={10}
                w={"20%"}
                justifyContent={"flex-end"}
            >
                <Link as={NextLink} href='/login'>
                    <TitleNavbar title={"Login"} size={"32px"} />
                </Link>
                <TitleNavbar title={"Img"} size={"32px"} />
            </HStack>
        </HStack>
    )
}