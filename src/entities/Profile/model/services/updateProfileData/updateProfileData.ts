import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { Profile } from '../../types/Profile'

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>
>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const formData = getProfileForm(thunkAPI.getState())

        try {
            const response = await thunkAPI.extra.api.put<Profile>('/profile', formData)

            return response.data
        } catch (e) {
            console.error(e)
            return thunkAPI.rejectWithValue('error')
        }
    }
)
