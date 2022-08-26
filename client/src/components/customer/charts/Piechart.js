import React from 'react';
import dynamic from 'next/dynamic';

export const Piechart = (props) => {

  const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
  return (
    <div>
        <Chart
            type="donut"
            width={500}
            height={250}
            series={props.series}
            options={{
                labels:props.labels,
                legend:{
                  position:'bottom'
                },
                colors:['#ED5564', '#4FC1E8', '#A0D568', '#FFCE54', '#AC92EB'],
                dataLabels: {
                  style: {
                    colors: ['#1B1212'],
                    fontSize: '15px',
                    fontWeight:'normal'
                  }
                }
            }}
        >
        </Chart>
        
    </div>
  )
}



