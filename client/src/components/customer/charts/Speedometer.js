import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

export const Speedometer = (props) => {
  
  return (
    <div>
        <ReactSpeedometer
            maxValue={100}
            minValue={0}
            value={props.value}
            needleTransition="easeElastic"
            needleColor="blue"
            needleHeightRatio={0.7}
            customSegmentStops={[0,40,80,100]}
            segmentColors={['red','yellow','green']}
            currentValueText= {"Current Percent: ${value}%"}
            customSegmentLabels={[
                {
                  text: "Poor",
                  position: "INSIDE",
                  color: "#555",
                },
                {
                  text: "Fair",
                  position: "INSIDE",
                  color: "#555",
                },
                {
                  text: "Good",
                  position: "INSIDE",
                  color: "#555",
                },
                
              ]}
        />
    </div>
  )
}
