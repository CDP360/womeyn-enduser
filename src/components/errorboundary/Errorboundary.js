import React, { Component } from 'react'

export default class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        console.log("Logging", error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return <>
                <div className='text-center mt-5'>
                    <h1>Something went Wrong!!</h1>

                </div>
            </>
        }
        return this.props.children;
    }
}
