import type { Media, PublicMedia } from "../global.types";

export const mediaTransformer = (media: Media): PublicMedia => {
    return {
        id: media.id,
        url: media.url
    }
}