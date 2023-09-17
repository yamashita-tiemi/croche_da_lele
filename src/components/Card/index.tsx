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
            height={"395px"}
            boxShadow={"4px 4px 10px 0px rgba(0, 0, 0, 0.25)"}
            paddingX={12}
            paddingY={9}
            borderRadius={"16px"}
            align={"center"}
            justifyContent={"center"}
            spacing={10}
            width={[
                "95%",
                "80%",
                "80%",
                "60%",
                "30%",
                "30%",
                "30%",
            ]}
        >
            <ImageCard src={src} alt={alt} width={width} height={height} w={w} />
            <TitleNavbar title={title} size={"36px"} />

            <Link
                href={"#" + id}
                width={[
                    "100%",
                    "100%",
                    "80%",
                    "80%",
                    "80%",
                    "80%",
                    "80%",
                ]}
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
            // width={"30%"}
            minHeight={"400px"}
            boxShadow={"4px 4px 10px 0px rgba(0, 0, 0, 0.25)"}
            padding={10}
            borderRadius={"16px"}
            align={"center"}
            justifyContent={"center"}
            spacing={12}
            width={[
                "95%",
                "80%",
                "80%",
                "60%",
                "30%",
                "30%",
                "30%",
            ]}
        >
            <ImageCard src={src} alt={alt} width={width} height={height} w={w} />
            <Stack
                spacing={8}
                align={"center"}
                textAlign={"center"}
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
                textAlign={"center"}
                width={{
                    sm:"100%"
                
                    // "90%",
                    // "90%",
                    // "80%",
                    // "80%",
                    // "100%",
                    // "100%",
                    // "100%",
                }}
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