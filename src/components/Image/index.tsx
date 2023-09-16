import { Stack } from "@chakra-ui/react";
import NextImage from 'next/image';

interface ImageProps {
    src: string
    alt: string
    width: number
    height: number
    w?: string
}

export function Image({ src, alt, width, height, w }:ImageProps) {
    return(
        <Stack
            as="picture"
            w={w}
            align={"center"}
            minWidth={"200px"}
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

export function ImageCard({ src, alt, width, height, w }:ImageCardProps) {
    return(
        <Stack
            as="picture"
            w={w}
            // borderRadius={"50%"}
        >
            <NextImage src={src} alt={alt} width={width} height={height} />
        </Stack>
    )
}