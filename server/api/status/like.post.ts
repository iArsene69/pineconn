import { doLike, isAlreadyLike, undoLike } from "~/server/turso/queries/threads"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const {threadId} = body
    const user = JSON.parse(event.headers.get("user") || "{}")

    if(!threadId || !user) return sendError(event, createError({statusCode: 400, statusMessage: "No id provided"}))

    const isLiked = await isAlreadyLike(threadId, user.id)

    if(!isLiked) {
        await doLike(threadId, user.id)
    }

    await undoLike(threadId, user.id)
})