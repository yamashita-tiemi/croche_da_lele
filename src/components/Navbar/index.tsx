import NextLink from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi";
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, HStack, Link, Stack, flexbox, useDisclosure } from "@chakra-ui/react"

import { ImageNavbar1, ImageNavbar2 } from "../Image"
import { TitleNavbar } from "../Title"
import { ButtonSidebar } from '../Button'
import { Icon, IconLogOut } from '../Icons'

interface NavbarProps {
    login: string
    href: string
    children: any
    children2?: any
}

export function Navbar({ login, href, children, children2 }: NavbarProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <HStack
            bg={"purple"}
            width={"100%"}
            height={"100px"}
            justifyContent={"space-between"}
            paddingX={6}
        >
            <ImageNavbar1 src={"/logo.png"} alt={"Crochê da Lelê"} width={491} height={125} />
            <ImageNavbar2 src={"/logo_redonda.png"} alt={"Crochê da Lelê"} width={491} height={125} />
            <Flex
                gap={"10"}
                display={[
                    "none",
                    "none",
                    "none",
                    "none",
                    "flex",
                    "flex",
                    "flex"
                ]}
            >
                <Link as={NextLink} href='/' color='lilac'>
                    <TitleNavbar title={"Home"} size={"28px"} />
                </Link>
                <Link as={NextLink} href='/contato' color='lilac'>
                    <TitleNavbar title={"Contato"} size={"28px"} />
                </Link>
                <Link as={NextLink} href='/membros' color='lilac'>
                    <TitleNavbar title={"Membros"} size={"28px"} />
                </Link>
            </Flex>
            <Flex
                w={"20%"}
                justifyContent={"flex-end"}
                alignItems={"center"}
                display={[
                    "none",
                    "none",
                    "none",
                    "none",
                    "none",
                    "flex",
                    "flex"
                ]}
            >
                <Link as={NextLink} href={href} color='lilac'>
                    <TitleNavbar title={login} size={"28px"} />
                </Link>
                {children}
            </Flex>
            <Stack display={[
                "flex",
                "flex",
                "flex",
                "flex",
                "flex",
                "none",
                "none"
            ]}>
                <Button colorScheme='teal' onClick={onOpen}>
                    <Icon width={''} colorBg={''} color={''}>
                        <GiHamburgerMenu size={24} />
                    </Icon>
                </Button>
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader color={"purple"} fontSize={"28px"}>Crochê da Lelê</DrawerHeader>

                        <DrawerBody gap={10} marginTop={10}>
                            <ButtonSidebar href={'/'} title={'Home'} />
                            <ButtonSidebar href={'/contato'} title={'Contato'} />
                            <ButtonSidebar href={'/membros'} title={'Membros'} />
                            <ButtonSidebar href={href} title={login} />
                        </DrawerBody>
                        <DrawerFooter>
                            {children2}
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </Stack>
        </HStack>
    )
}