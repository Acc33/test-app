import React from 'react'
import dynamic from 'next/dynamic';

const GarminHRLineChart = (props) => {
    const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
    const avgRestHr = props.data.map(row => row.restHR);
    const avgHighHr = props.data.map(row => row.highHR)
    const date = props.data.map(row => row.date);
    return (
        <div>
            <Chart
            type="line"
            height={300}
            series={[{
                name:'Resting Average Rate',
                data:avgRestHr,
            },
            {
                name:'High Average Rate',
                data:avgHighHr,
            },
            ]}
            options={{
                chart:{
                    type:'line',
                    zoom:{
                        enabled:false
                    }
                },
                colors: ['#0F90E4','#E40F2F'],
                title: {
                    text: 'Heart Rate Summary',
                    align: 'left'
                },
                
                dataLabels: {
                    enabled: true,
                    style:{
                        colors:['#1B1212']
                    }
                    
                },
                xaxis:{
                    categories:date,
                },
                yaxis:{
                    title:{
                        text:'BPM'
                    }
                },

            }}
            />
        </div>
    )
}

export default GarminHRLineChart