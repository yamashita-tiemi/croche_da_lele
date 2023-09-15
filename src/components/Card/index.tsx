import { Box, Link, Stack } from "@chakra-ui/react"

import { TitleNavbar, TitleSection } from "../Title"
import { ImageCard } from "../Image"
import { TextCard } from "../Text"

interface CardSectionProps {
    src: string
    alt: string
    width: number
    height: number
    title: string
    w?: string
    id: string
}

export function CardSection({ src, alt, title, width, height, w, id }: CardSectionProps) {
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
            <ImageCard src={src} alt={alt} width={width} height={height} w={w} />
            <TitleNavbar title={title} size={"36px"} />

            <Link
                href={"#" + id}
                width={"80%"}
            >
                <Box
                    as='button'
                    bg='purple'
                    width={"100%"}
                    color='offWhite'
                    borderRadius={"4px"}
                    p={4}
                >
                    Ver Produtos
                </Box>
            </Link>
        </Stack>
    )
}

interface CardShopProps {
    src: string
    alt: string
    width: number
    height: number
    title: string
    text: string
    color: string
    w?: string
}

export function CardShop({ src, alt, title, text, width, height, color, w }: CardShopProps) {
    return (
        <Stack
            bg={color}
            width={"30%"}
            minHeight={"400px"}
            boxShadow={"4px 4px 10px 0px rgba(0, 0, 0, 0.25)"}
            padding={10}
            borderRadius={"16px"}
            align={"center"}
            justifyContent={"center"}
            spacing={12}
        >
            <ImageCard src={src} alt={alt} width={width} height={height} w={w} />
            <Stack
                spacing={8}
                align={"center"}
            >
                <TitleSection title={title} size={"32px"} />
                <TextCard text={text} size={"24px"} />
            </Stack>
        </Stack>
    )
}

interface CardContatoProps {
    title: string
    obs?: any
    text: string
}

export function CardContato({ title, text, obs }: CardContatoProps) {
    return (
            <Stack
                spacing={5}
                align={"center"}
            >
                <Stack
                    spacing={3}
                >
                    <TextCard text={title} size={"36px"} />
                    <TextCard text={obs} size={"20px"} />
                </Stack>
                <TextCard text={text} size={"32px"} />
            </Stack>
    )
}