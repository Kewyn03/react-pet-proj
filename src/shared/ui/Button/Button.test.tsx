import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

describe('button', () => {
    test('only first param', () => {
        render(<Button>Test</Button>)
        expect(screen.getByText('Test'))
            .toBeInTheDocument()
    })

    test('class Clear', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>)
        expect(screen.getByText('Test'))
            .toHaveClass('clear')
        screen.debug()
    })
})
