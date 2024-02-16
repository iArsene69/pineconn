import { media, threads } from "~/drizzle/schema";

export const getThreads = async () => {
    const db = useDB()

    try {
        const allThreads = await db.query.threads.findMany({
            with: {
                media: true
            }
        })
        
        return allThreads
    } catch (error) {
        console.log(error)
        return []
    }


}