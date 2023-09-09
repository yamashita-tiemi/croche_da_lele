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