import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import BackButton from '../components/BackButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const renderButtons = () => {
    let lastIndex = props.allSushi.length - 1
    if (props.startingIndex === 0) {
      return <MoreButton getMoreSushi={props.getMoreSushi} />
    } else {
      return <div className="belt"><BackButton getPreviousSushi={props.getPreviousSushi} /><MoreButton getMoreSushi={props.getMoreSushi} /></div>
    }
  }

  return (
    <Fragment>
      <div className="belt">
        {
          // Render Sushi components here!
          props.someSushi.map(sushiObj => <Sushi key={sushiObj.id} sushi={sushiObj} eatSushi={props.eatSushi} eatenSushi={props.eatenSushi} />)
        }
        {renderButtons()}
      </div>
    </Fragment>
  )
}

export default SushiContainer
