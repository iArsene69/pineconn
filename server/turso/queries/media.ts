import { media } from "~/drizzle/schema"
import type { FormMedia } from "~/server/global.types"

export const createMedia = async (mediaData: FormMedia) => {
    const db = useDB()

    await db.insert(media).values(mediaData)
}