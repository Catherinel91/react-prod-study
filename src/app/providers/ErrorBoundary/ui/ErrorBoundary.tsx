import React, { ErrorInfo, ReactNode } from 'react';
import { PageError } from 'widgets/PageError';

interface ErrorBoundaryPrors {
  children : ReactNode;
}

interface ErrorBoundaryState {
  hasError : boolean;
}

export default class ErrorBoundary extends
    React.Component<ErrorBoundaryPrors, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryPrors) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log('err', error);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            // You can render any custom fallback UI
            return <PageError />;
        }

        return children;
    }
}
