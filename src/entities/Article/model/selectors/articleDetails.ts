import { StateSchema } from 'app/providers/StoreProvider'

export const getArticleDetailsData = (state: StateSchema) => state.articleDetails?.data
export const getArticleIsLoading = (state: StateSchema) => state.articleDetails?.isLoading
export const getArticleError = (state: StateSchema) => state.articleDetails?.error
