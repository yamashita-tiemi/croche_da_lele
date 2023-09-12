import { Box, Stack } from "@chakra-ui/react"
import { TitleNavbar } from "../Title"
import { ImageCard } from "../Image"

interface CardSectionProps {
    src: string
    alt: string
    width: number
    height: number
    title: string
    w?: string
}

export function CardSection({ src, alt, title, width, height, w }:CardSectionProps) {
    return (
        <Stack
            bg={"turquesa"}
            width={"30%"}
            height={"395px"}
            boxShadow={"4px 4px 10px 0px rgba(0, 0, 0, 0.25)"}
            paddingX={12}
            paddingY={9}
            borderRadius={"16px"}
            align={"center"}
            justifyContent={"center"}
            spacing={10}
        >
            <ImageCard src={src} alt={alt} width={width} height={height} w={w}/>
            <TitleNavbar title={title} size={"36px"} />

            <Box
                as='button'
                borderRadius={"4px"}
                bg='purple'
                color='offWhite'
                w={"80%"}
                p={4}
            >
                Ver Produtos
            </Box>
        </Stack>
    )
}