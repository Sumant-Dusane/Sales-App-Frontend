import React, { useEffect, useRef } from 'react';
import './piechart.scss';
import { Chart } from 'chart.js/auto';

export default function Piechart() {
    const chartRef = useRef(null);
    useEffect(() => {
        try {
            const ctx = chartRef.current.getContext('2d');
            new Chart(ctx, {
                type: 'doughnut',
                options: {
                    cutoutPercentage: 75,
                    legend: {
                        position: 'left',
                        elements: {
                            arc: {
                                borderWidth: 10,
                            }
                        },
                        labels: {
                            boxWidth: 10,
                            fontStyle: 'italic',
                            fontColor: '#aaa',
                            usePointStyle: true,
                        }
                    },
                },
                data: {
                    labels: [
                        "Amazon",
                        "Flipkart",
                        "Mytra",
                    ],
                    datasets: [{
                        data: [250, 100, 100],
                        borderWidth: 0,
                        backgroundColor: [
                            '#074EFD',
                            '#FFD700',
                            "#B3D0FD",
                        ],
                        hoverBackgroundColor: [
                            '#074EFD',
                            '#FFD700',
                            "#B3D0FD",
                        ],
                    }]
                }
            });
        } catch (e) {
            console.log(e);
        }
    }, []);
    return (
        <canvas className='pie-chart' ref={chartRef} />
    )
}
