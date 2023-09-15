import NextLink from 'next/link'

import { Heading, AccordionButton, AccordionIcon, Box, AccordionItem, AccordionPanel, Link, HStack } from "@chakra-ui/react"
import { TitleNavbar } from '../Title'

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

interface ButtonTurquesaProps {
    title: string
    href: string
    fontsize: string
    w?: string
    children?: any
    justifyContent: string
}

export function ButtonTurquesa({ title, href, fontsize, w, children, justifyContent }: ButtonTurquesaProps) {
    return (

        <Link
            as={NextLink}
            href={href}
            width={"100%"}
            display={"flex"}
            justifyContent={justifyContent}
            color='offWhite'
        >
            <Box
                as='button'
                borderRadius={"16px"}
                bg='turquesa'
                color='offWhite'
                w={w}
                paddingY={4}
                type='submit'
            >
                <HStack justifyContent={"center"}>
                    {children}
                    <TitleNavbar title={title} size={fontsize} />
                </HStack>
            </Box>
        </Link >
    )
}