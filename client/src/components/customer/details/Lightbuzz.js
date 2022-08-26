import React from 'react';
import Collapsible from '../Collapsible'


const Lightbuzz = (props) => {
  return (

    <div>
    
                <div className="detail_row" style={{display:'flex', justifyContent:'space-around', marginBottom:'40px'}}>
                    <div className="sit_to_stand">
                        <Collapsible label="Sit To Stand">
                            <div>
                                <h3>Sit to Stand</h3>          
                                {props.isSittoStand ? 
                                (<h1>Some data</h1>) :
                                (<h1>no data</h1>)}
                            </div>
                        </Collapsible>
                    </div>
                </div>
    </div>
  )
}

export default Lightbuzz