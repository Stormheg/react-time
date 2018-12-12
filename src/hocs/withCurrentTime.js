import React from 'react'

export default (WrappedComponent) => {
    return class extends React.Component {
        componentDidMount() {
            let now = new Date()
            let hours = now.getHours()
            let minutes = now.getMinutes()
            let seconds = now.getSeconds()

            let time = {
                hours,
                minutes,
                seconds
            }
        }
        render() {
            return <WrappedComponent {...this.props} />
        }
    }
}