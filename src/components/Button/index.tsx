import NextLink from 'next/link'

import { Heading, AccordionButton, AccordionIcon, Box, AccordionItem, AccordionPanel, Link, HStack, Button } from "@chakra-ui/react"
import { TitleNavbar } from '../Title'
import { AiFillPlusCircle } from 'react-icons/ai'

interface TextIndexProps {
    question: string
    answer: string
}

export function ButtonAccordion({ question, answer }: TextIndexProps) {
    return (
        <AccordionItem
            bg={"offWhite"}
            borderRadius={"8px"}
            boxShadow={"5px 10px 10px 0px rgba(0, 0, 0, 0.30)"}
            padding={4}
            marginBottom={9}
        >
            <Heading
                as="h3"
                fontSize={"24px"}
                fontWeight={400}
                color={"purple"}
            >
                <AccordionButton>
                    <Box
                        as="span"
                        flex='1'
                        textAlign='left'
                    >
                        {question}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </Heading>

            <AccordionPanel pb={4}>
                {answer}
            </AccordionPanel>
        </AccordionItem>
    )
}

interface ButtonLoginProps {
    title: string
    w?: string
    children?: any
}

export function ButtonLogin({ title, w, children }: ButtonLoginProps) {
    return (
        <Box
            as='button'
            borderRadius={"16px"}
            bg='turquesa'
            color='offWhite'
            w={w}
            paddingY={2}
            type='submit'
            minWidth={"100px"}
        >
            <Link
                as={NextLink}
                href={'/admin'}
            >
                <HStack justifyContent={"center"}>
                    {children}
                    <TitleNavbar title={title} size={'28px'} />
                </HStack>
            </Link >
        </Box >
    )
}

interface ButtonMembroProps {
    onOpen: any
}

export function ButtonMembro({ onOpen }: ButtonMembroProps) {
    return (
        <Button onClick={onOpen} bg={"none"} _hover={"none"}>
            <Box
                borderRadius={"16px"}
                bg='turquesa'
                color='offWhite'
                w={"200px"}
                paddingY={4}
            >
                <HStack justifyContent={"center"}>
                    <AiFillPlusCircle size={28} />
                    <TitleNavbar title={"Novo Membro"} size={'20px'} />
                </HStack>
            </Box>
        </Button>
    )
}

interface ButtonSidebarProps {
    href: string
    title: string
}

export function ButtonSidebar({ href, title }: ButtonSidebarProps) {
    return (
        <Button
            bg={"purple"}
            width={"100%"}
            paddingX={5}
            paddingY={8}
            borderRadius={"16px"}
            marginBottom={2}
        >
            <Link as={NextLink} href={href} color='lilac'>
                <TitleNavbar title={title} size={"28px"}/>
            </Link>
        </Button>
    )
}