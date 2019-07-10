import React from 'react'

const BackButton = (props) => {
    return <button onClick={() => props.getPreviousSushi()}>
            Back
          </button>
}

export default BackButton
