import type { User } from "../global.types"

export const useTransformer = (user: User) => {
    return {
        name: user.name,
        username: user.username,
        profileImg: user.profileImg,
        email: user.email,
        handle: `@${user.username}`,
    }
} 