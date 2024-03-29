import type { PublicUser, User } from "../global.types"

export const userTransformer = (user: User): PublicUser => {
    return {
        id: user.id,
        name: user.name,
        username: user.username,
        profileImg: user.profileImg,
        email: user.email,
        handle: `@${user.username}`,
    }
} 