import NextLink from 'next/link'
import NextImage from 'next/image';

import { Link, Stack } from "@chakra-ui/react";

interface ImageProps {
    src: string
    alt: string
    width: number
    height: number
    w?: string
    py?: string
    mx?: string
}

export function Image({ src, alt, width, height, w, py, mx }: ImageProps) {
    return (
        <Stack
            as="picture"
            w={w}
            align={"center"}
            minWidth={"80px"}
            paddingY={py}
            marginX={mx}
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
        <Link as={NextLink} href="/"
            width={"20%"}
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
            <Stack as="picture" align={"center"} minWidth={"200px"}>
                <NextImage src={src} alt={alt} width={width} height={height} />
            </Stack>
        </Link>
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
        <Link as={NextLink} href="/"
        width={"10%"}
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
            <Stack as="picture" align={"center"} minWidth={"70px"}>
                <NextImage src={src} alt={alt} width={width} height={height} />
            </Stack>
        </Link>
    )
}