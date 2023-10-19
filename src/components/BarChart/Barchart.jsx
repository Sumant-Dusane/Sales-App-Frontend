import React, { useEffect, useRef } from 'react';
import "./barchart.scss";
import { Chart } from 'chart.js';

export default function Barchart() {
    const chartRef = useRef(null);
    useEffect(() => {
        try {
            const ctx = chartRef.current.getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                },
                data: {
                    labels: ['Electroics', 'Fashion', 'Hardware'],
                    datasets: [{
                        label: 'Sales',
                        data: [250, 100, 100, 200],
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
                        borderWidth: 1,
                        maxBarThickness: 35,
                        borderRadius: 12
                    }]
                }
            })
        } catch (e) {
            console.log(e);
        }
    });
    return (
        <canvas className='bar-chart' ref={chartRef} />
    )
}
