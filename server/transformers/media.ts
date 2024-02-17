import type { Media } from "../global.types";

export const mediaTransformer = (media: Media) => {
    return {
        id: media.id,
        url: media.url
    }
}