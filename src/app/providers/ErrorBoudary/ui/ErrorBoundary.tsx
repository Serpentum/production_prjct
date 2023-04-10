import React, { ErrorInfo, ReactNode, Suspense } from 'react'

interface IErrorBoundaryProps extends React.PropsWithChildren{
  fallback: ReactNode
}
interface IErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info)
  }

  render() {
    const { children, fallback } = this.props
    const { hasError } = this.state
    if (hasError) {
      return (
        <Suspense fallback="">
          {fallback}
        </Suspense>
      )

    }
    return children
  }
}

export default ErrorBoundary
