import { Heading } from "@chakra-ui/react";

interface TextIndexProps {
    text: string
    size: string
    color: string
    w?: string
}

export function TextIndex({ text, size, color, w }: TextIndexProps) {
    return (
        <Heading
            as="p"
            fontSize={size}
            fontWeight={400}
            color={color}
            w={w}
        >
            {text}
        </Heading>
    )
}

interface TextCardShopProps {
    text: string
    w?: string
}

export function TextCardShop({ text, w }: TextCardShopProps) {
    return (
        <Heading
            as="p"
            fontSize={"24px"}
            fontWeight={400}
            color={"offWhite"}
            textShadow={"4px 4px 15px rgba(0, 0, 0, 0.45)"}
            w={w}
        >
            {text}
        </Heading>
    )
}