import React from 'react'
import dynamic from 'next/dynamic';

const BasicBarChart = (props) => {
    const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
    const stepData = props.data.map(row => row.stepsCount);
    const date = props.data.map(row => row.date);
    return (
        <div>
            <Chart
            type="bar"
            height={300}
            series={[{
                name:'Steps Count',
                data:stepData,
            }]}
            options={{
                chart:{
                    type:'bar'
                },
                plotOptions: {
                    bar: {
                    columnWidth: '40%',
                    horizontal:false,
                    endingShape:'rounded'
                    }
                },
                colors: [props.color],
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
                        text:props.text
                    }
                },
                fill:{
                    opacity:1
                }

            }}
            />
        </div>
    )
}

export default BasicBarChart