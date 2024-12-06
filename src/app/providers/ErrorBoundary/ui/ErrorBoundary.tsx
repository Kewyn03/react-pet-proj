import React, { ErrorInfo, Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'
import { PageError } from 'widgets/PageError.tsx'

interface IErrorBoundaryProps {
    children: React.ReactNode
}

interface IErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends React.Component<
    IErrorBoundaryProps,
    IErrorBoundaryState
> {
    constructor(props: IErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    public static getDerivedStateFromError(error: Error): IErrorBoundaryState {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo)
    }

    override render() {
        const { hasError } = this.state
        const { children } = this.props
        if (hasError) {
            return (
                <Suspense fallback=''>
                    <PageError />
                </Suspense>
            )
        }

        return children
    }
}

export default ErrorBoundary
