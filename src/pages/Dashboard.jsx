import React from 'react'
import { Bar } from 'react-chartjs-2'
import Box from '../components/box/Box'
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../components/dashboard-wrapper/DashboardWrapper'
import SummaryBox, { SummaryBoxSpecial } from '../components/summary-box/SummaryBox'
import { colors, data } from '../constants'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const Dashboard = () => {
    return (
        <div>
            <DashboardWrapper>
                <DashboardWrapperMain>
                    <div className="row">
                        <div className="col-8 col-md-12">
                            <div className="row">
                                {
                                    data.summary.map((item, index) => (
                                        <div key={index} className="col-6 col-md-6 col-md-12 mb">
                                            <SummaryBox item={item} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-4 hide-md">
                            <SummaryBoxSpecial item={data.revenueSummary} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Box>
                                <RevenueByMothsChart />
                            </Box>
                        </div>
                    </div>
                </DashboardWrapperMain>
                <DashboardWrapperRight>
                    <div className="title mb">Overall</div>
                    <div className="title mb">Revenue by Channel</div>
                </DashboardWrapperRight>
            </DashboardWrapper>
        </div>
    )
}

export default Dashboard

const RevenueByMothsChart = () => {
    const chartOptions =  {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAses: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            yAses: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            }
        },
        elements: {
            bar: {
                backgroundColor: colors.orange,
                borderRadius: 20,
                borderSkiped: 'bottom'
            }
        }
    }

    const chartData = {
        labels: data.revenueByMonths.labels,
        datasets: [
            {
                labels: 'Revenue',
                data: data.revenueByMonths.data
            }
        ]
    }

    return (
        <>
            <div className="title">
                Revenue by months
            </div>
            <div>
                <Bar options={chartOptions} data={chartData} height={`300px`}/>
            </div>
        </>
    )
}
