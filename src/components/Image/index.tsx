import { Stack } from "@chakra-ui/react";
import NextImage from 'next/image';

interface ImageProps {
    src: string
    alt: string
    width: number
    height: number
    w?: string
    py?: string
}

export function Image({ src, alt, width, height, w, py }: ImageProps) {
    return (
        <Stack
            as="picture"
            w={w}
            align={"center"}
            minWidth={"80px"}
            paddingY={py}
        >
            <NextImage src={src} alt={alt} width={width} height={height} />
        </Stack>
    )
}

interface ImageCardProps {
    src: string
    alt: string
    width: number
    height: number
    w?: string
}

export function ImageCard({ src, alt, width, height, w }: ImageCardProps) {
    return (
        <Stack
            as="picture"
            w={w}
        // borderRadius={"50%"}
        >
            <NextImage src={src} alt={alt} width={width} height={height} />
        </Stack>
    )
}

interface ImageNavbar1Props {
    src: string
    alt: string
    width: number
    height: number
}

export function ImageNavbar1({ src, alt, width, height }: ImageNavbar1Props) {
    return (
        <Stack
            as="picture"
            width={"20%"}
            align={"center"}
            minWidth={"200px"}
            display={[
                "none",
                "none",
                "none",
                "none",
                "flex",
                "flex",
                "flex"
            ]}
        >
            <NextImage src={src} alt={alt} width={width} height={height} />
        </Stack>
    )
}

interface ImageNavbar2Props {
    src: string
    alt: string
    width: number
    height: number
}

export function ImageNavbar2({ src, alt, width, height }: ImageNavbar2Props) {
    return (
        <Stack
            as="picture"
            width={"10%"}
            align={"center"}
            minWidth={"70px"}
            display={[
                "flex",
                "flex",
                "flex",
                "flex",
                "none",
                "none",
                "none"
            ]}
        >
            <NextImage src={src} alt={alt} width={width} height={height} />
        </Stack>
    )
}