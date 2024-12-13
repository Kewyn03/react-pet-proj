import 'app/styles/index.scss'
import { Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localstorage'

export const RouterDecorator = (story: () => Story) => {
    window.localStorage.setItem(USER_LOCAL_STORAGE_KEY, 'asd')
    return <BrowserRouter>{story()}</BrowserRouter>
}
