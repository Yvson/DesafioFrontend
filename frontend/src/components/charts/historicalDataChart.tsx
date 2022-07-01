import React from 'react';

// Material UI
import { Box, Grid, styled, Typography } from '@mui/material';
import Chart from 'react-apexcharts';


const LargeBlock = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    ...theme.typography.body2,
    minHeight: '800px',
    height: '100%',
    width: '100%',
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.grey[200]}`,
    color: theme.palette.text.secondary,
}));

const ResponsiveBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'start',
      textAlign: 'start',
    },
}));


export function HistoricalDataChart(props:any) {
    
    const config:any = {
        series: [{
            name: props.dataName,
            data: props.data.historicalData.yaxis,
        }],
        options: {
            chart: {
                type: 'area',
                offsetY: 0,
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: false,
                },
                animations: {
                    enabled: false,
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: "light",
                    type: "vertical",
                    shadeIntensity: 1,
                    inverseColors: true,
                    stops: [0, 100],
                    colorStops: [
                        {
                            offset: 0,
                            color: props.color[0],
                            opacity: 1
                        },
                        {
                            offset: 100,
                            color: props.color[1],
                            opacity: 0.1
                        },
                        
                    ]
                },
            },            
            plotOptions: {
                bar: {
                    borderRadius: 0,
                    horizontal: false,
                    columnWidth: '80%',
                }
            },
            dataLabels: {
                enabled: false,
            },
            xaxis: {
                categories: props.data.historicalData.xaxis,
                labels: {
                    show: true,
                    rotate: 0,
                    hideOverlappingLabels: true,
                    
                },
                axisBorder: {
                    show: true,
                },
                axisTicks: {
                    show: true,
                },
                tickPlacement: 'on',
                tooltip: {
                    enabled: false,
                },
                title: {
                    text: 'Date (DD/MM/YYYY)'
                }


            },
            yaxis: {
                show:true,
                labels: {
                    show: true,
                },
                axisBorder: {
                    show: true,
                },
                axisTicks: {
                    show: true,
                },
                title: {
                    text: 'Price (R$)'
                }
            },
            grid: {
                show: true,
                padding: {
                },
            },
            stroke: {
                curve: 'smooth',
                colors: [props.color[0]],
                width: 2,
            },
            markers: {
                colors: props.color[0],
            },
            legend: {
                show: false,
            },            
            tooltip: {
                marker: {
                    show: false,
                },
            },
    
    
        },
    };


        

    return (
        <LargeBlock>
            <Box display='flex'
                flexDirection='column'
                justifyContent='space-between'
                alignItems="space-between"
                sx={{padding:0, margin: 0, height:'100%', width:'100%' }}
            >
                <Box 
                    display='flex'
                    flexDirection='row'
                    justifyContent='space-between'
                    alignItems='center'
                    sx={{ width:1, paddingTop: 1 }}>
                    <Grid container columns={{ xs: 1, lg: 2 }}>
                        <Grid item xs={1} lg={1}>
                            <ResponsiveBox sx={{ paddingLeft: 1.5, textAlign: 'start'}}>
                                <Typography variant="h4" color="primary" sx={{ fontWeight:500 }}>{props.title}</Typography>
                                <Typography variant="body2" sx={{ fontSize:12 }}>{props.subtitle}</Typography>
                            </ResponsiveBox>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ height:'100%', overflow: 'hidden'}}>
                    <Chart
                        options={config.options}
                        series={config.series}
                        type="area"
                        height='100%'
                        
                        
                    />
                </Box>
            </Box>
        </LargeBlock>        
    );
}

export const MemoizedHistoricalDataChart = React.memo(HistoricalDataChart);