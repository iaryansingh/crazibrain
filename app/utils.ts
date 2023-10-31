import {ImageLoaderProps} from "next/image";


const normalizeSrc = (src: string) => {
    if (src[0] === '/') {
        return src.slice(1)
    } else {
        let  url = new URL(src);
        if (url.protocol === "http:" || url.protocol === "https:") {
            return url.pathname.split("/").slice(-2).join("/")
        }
    }

    return src
}

export function cloudinaryLoader({ src, width, quality }: ImageLoaderProps) {
    const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
    return `https://res.cloudinary.com/crazibrain/image/upload/${params.join(',')}/${normalizeSrc(src)}`;
}
