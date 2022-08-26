import React from 'react';
import Collapsible from '../Collapsible';
import { Radarchart } from '../charts/Radarchart';

const General = (props) => {
  return (
    
    <div>
                <div className="detail_row" style={{display:'flex', justifyContent:'space-around', marginBottom:'40px'}}>
                    <div className="summary">
                        <Collapsible label="Summary">
                            <div>
                                <h3>General Info Chart</h3>
                                <Radarchart series={props.series} options={props.options} />
                            </div>
                        </Collapsible>
                    </div>
                </div>
    </div>
  )
}

export default General