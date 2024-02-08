import type { FormUser, User } from "~/server/global.types"
import { userTransformer } from "~/server/transformers/user"
import { createUser } from "~/server/turso/queries/users"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const {username, email, password, repeatPassword, name} = body

    if(!username || !email ||!password ||!repeatPassword ||!name) {
        return sendError(event, createError({statusCode: 400, statusMessage: "Invalid data"}))
    }

    if (password !== repeatPassword) {
        return sendError(event, createError({statusCode: 400, statusMessage: "Passwords do not match"}))
    }

    const userData: FormUser = {
        username,
        email,
        password,
        name,
        profileImg: 'https://picsum.photos/200/200'
    }

    const user = await createUser(userData)
    if(!user){
        return sendError(event, createError({statusCode: 500, statusMessage: "Error creating user"}))
    }

    return {
        body: userTransformer(user)
    }

})