import * as contentful from 'contentful' // maybe change to import { createClient } from 'contentful' or import contentful from 'contentful'

const client = () => {
    const config = useRuntimeConfig()
    return contentful.createClient({
        space: config.private.CONTENTFUL_SPACE_ID,
        accessToken: config.private.CONTENTFUL_ACCESS_TOKEN,
        environment: config.private.CONTENTFUL_ENVIRONMENT,
    })
}

export default defineEventHandler(async (event) => {
    let query = getQuery(event)
    try {
        let response = await client().getEntries(query)
        if (query.limit === "1") return response.items[0]
        return response.items
    } catch (error: any) {
        throw new Error(error)
    }
})