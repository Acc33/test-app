import React from 'react'
import dynamic from 'next/dynamic';



export const HorizontalBarChart = (props) => {

  const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
  return (
    <div>
        <Chart
          type="bar"
          height={300}
          series={[{
            data:props.series
          }]}
          options={{
            plotOptions:{
              bar:{
                borderRadius:4,
                horizontal:true,
              }
            },
            dataLabels:{
              enabled:false
            },
            xaxis:{
              categories:props.categories,
            }
          }}
          />
        
    </div>
  )
}
