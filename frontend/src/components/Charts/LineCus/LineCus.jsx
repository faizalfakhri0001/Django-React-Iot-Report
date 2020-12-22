import React from 'react';
import { Line } from '@reactchartjs/react-chart.js'
import "./LineCus.css";

const LineCus = ({ dataIn = [], Idx = [] }) => {
    const data = (canvas) => {
        const ctx = canvas.getContext("2d")
        const gradient = ctx.createLinearGradient(0, 0, 1000, 0);
        gradient.addColorStop(0, 'green');
        gradient.addColorStop(.2, 'cyan');
        gradient.addColorStop(.4, 'green');
        gradient.addColorStop(.6, 'cyan');
        gradient.addColorStop(.8, 'green');

        return {
            labels: Idx,
            datasets: [
                {
                    label: '# of Votes',
                    data: dataIn,
                    fill: false,
                    backgroundColor: gradient,
                    borderColor: gradient,
                    lineTension: 0,
                },
            ],
        }
    }

    const options = {
        legend: {
            display: true,
            labels: {
                fontColor: 'rgba(255,255,255,0.5)'
            }
        },
        scales: {
            xAxes: [
                {
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        fontColor: 'rgba(255,255,255,0.2)',
                        autoSkip: true,
                        maxTicksLimit: 10,
                    },
                }
            ],
            yAxes: [
                {
                    gridLines: {
                        color: 'rgba(255,255,255,0.2)',
                        zeroLineColor: 'rgba(255,255,255,0.2)',
                    },
                    ticks: {
                        min: 0,
                        max: 100,
                        stepSize: 10,
                        fontColor: 'rgba(255,255,255,0.2)',
                        padding: 6,
                    },
                },
            ],
        },
    }
    return (
        <Line data={data} options={options} height={130} />
    );
};

export default LineCus;