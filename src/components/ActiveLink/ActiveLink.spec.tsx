import { render } from '@testing-library/react'
import { ActiveLink } from '.'
import '@testing-library/jest-dom'

jest.mock('next/router', () => {
    return {
        useRouter() {
            return {
                asPath: '/'
            }
        }
    }
})

describe("Active link component", () => {
    it('render correctly', () => {
        const { getByText } = render(
            <ActiveLink href='/' activeClass='active'>
                <a>Home</a>
            </ActiveLink>
        )

        expect(getByText('Home')).toBeInTheDocument()
    })

    it('adds a active class if path is the same', () => {
        const { getByText } = render(
            <ActiveLink href='/' activeClass='active'>
                <a>Home</a>
            </ActiveLink>
        )

        expect(getByText('Home')).toHaveClass('active')
    })
})
