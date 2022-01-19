import React from 'react'
import Box from '../components/box/Box'
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../components/dashboard-wrapper/DashboardWrapper'
import SummaryBox, { SummaryBoxSpecial } from '../components/summary-box/SummaryBox'
import { data } from '../constants'

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
                </DashboardWrapperMain>
                <DashboardWrapperRight>
                    DashboardWrapperRight
                </DashboardWrapperRight>
            </DashboardWrapper>
        </div>
    )
}

export default Dashboard
