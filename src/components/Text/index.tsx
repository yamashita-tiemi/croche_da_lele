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
            // w={w}
            w={[
                "90%",
                "85%",
                "80%",
                "70%",
                "70%",
                "70%",
                "80%"
            ]}
        >
            {text}
        </Heading>
    )
}

interface TextCardProps {
    text: string
    size: string
    w?: string
}

export function TextCard({ text, size, w }: TextCardProps) {
    return (
        <Heading
            as="p"
            fontSize={size}
            fontWeight={400}
            color={"offWhite"}
            textShadow={"4px 4px 15px rgba(0, 0, 0, 0.45)"}
            width={"100%"}
        >
            {text}
        </Heading>
    )
}