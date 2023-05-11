import React from "react";

class ErrorBoundary extends React.Component<{ children: any }> {
  constructor(props: { children: any }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
  }

  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
