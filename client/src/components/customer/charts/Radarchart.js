import React from 'react';
import dynamic from 'next/dynamic';



export const Radarchart = (props) => {
  const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
  return (
    <div>
        <Chart
            type='radar'
            series={props.series}
            options={props.options}
        />
        
    </div>
  )
}
