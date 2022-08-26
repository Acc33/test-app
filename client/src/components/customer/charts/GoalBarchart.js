import React from 'react'
import dynamic from 'next/dynamic';



export const GoalBarChart = (props) => {
    const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
    var stepsdata = [];
    
    for (let i=0;i<props.data.length;i++){
        var item = {
            x:props.data[i].date,
            y:parseInt((parseInt(props.data[i].intenseDuration)/60)),
            goals: [
                {
                  name: 'Goal',
                  value: props.goal,
                  strokeHeight: 5,
                  strokeColor: '#775DD0'
                }
            ]
        };
        stepsdata.push(item)
    }
    
    return (
        <div>
            <Chart
            type="bar"
            height={300}
            series={[{
                name:'Actual',
                data:stepsdata,
            }]}
            options={{
                chart:{
                    type:'bar'
                },
                plotOptions: {
                    bar: {
                    columnWidth: '40%'
                    }
                },
                colors: [props.color],
                dataLabels: {
                    enabled: true,
                    style:{
                        colors:['#1B1212']
                    }
                },
                legend: {
                    show: true,
                    showForSingleSeries: true,
                    customLegendItems: ['Actual', 'Expected'],
                    markers: {
                    fillColors: [props.color, '#775DD0']
                    }
                },
                yaxis:{
                    title:{
                        text:'Vigorous Minutes'
                    }
                },
            }}
            
        
            />
            
        </div>
    )
}
