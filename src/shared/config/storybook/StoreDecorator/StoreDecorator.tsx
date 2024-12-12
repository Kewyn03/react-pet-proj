import { Story } from '@storybook/react'
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { StoreProvider } from 'app/providers/StoreProvider'
import { DeepPartial } from 'redux'

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
    <StoreProvider initialState={state}>
        <StoryComponent />
    </StoreProvider>
)
