import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Error boundary for better development experience
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Portfolio Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center flex-col">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-red-400 mb-4">Oops! Something went wrong</h1>
            <p className="text-gray-400 mb-6">The portfolio encountered an unexpected error.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-6 py-3 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-400 transition-colors"
            >
              Reload Portfolio
            </button>
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-gray-300 hover:text-white">
                  Error Details (Development)
                </summary>
                <pre className="mt-4 p-4 bg-gray-900 rounded-lg text-sm overflow-auto max-w-2xl">
                  {this.state.error?.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const root = createRoot(document.getElementById("root"));

root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);