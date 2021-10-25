import preloader from '../../../assets/loader.svg'
import React from 'react'

let Preloader = (props) => {
    return <div style={{ backgroundColor: 'unset' }}>
        <img src={preloader} />
    </div>
}

export default Preloader