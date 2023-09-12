import { Heading, AccordionButton, AccordionIcon, Box, AccordionItem, AccordionPanel } from "@chakra-ui/react"

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