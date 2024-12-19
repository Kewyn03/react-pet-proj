import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article } from '../../types/article'

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>
>(
    'profile/fetchProfileData',
    async (articleId, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Article>(`/articles/${articleId}`)

            return response.data
        } catch (e) {
            console.error(e)
            return thunkAPI.rejectWithValue('error')
        }
    }
)
