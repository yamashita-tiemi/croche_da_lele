import { Heading } from "@chakra-ui/react";

interface TitleNavbarProps {
    title: string
    size: string
}

export function TitleNavbar({ title, size }:TitleNavbarProps) {
    return(
        <Heading
            as="h3"
            fontSize={size}
            fontWeight={400}
            color={"offWhite"}
        >
            {title}
        </Heading>
    )
}

interface TitleSectionProps {
    title: string
}

export function TitleSection({ title }:TitleSectionProps) {
    return(
        <Heading
            as="h2"
            fontSize={"48px"}
            fontWeight={400}
            color={"offWhite"}
            textShadow={"4px 4px 15px rgba(0, 0, 0, 0.45)"}
        >
            {title}
        </Heading>
    )
}