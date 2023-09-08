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
            bg={"lilac"}
            as="picture"
            w={w}
        >
            <NextImage src={src} alt={alt} width={width} height={height} />
        </Stack>
    )
}