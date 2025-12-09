import React from 'react'
import { Chart as ChartJs, defaults } from "chart.js/auto"
import { Doughnut } from 'react-chartjs-2'
import { fakeDataEmails, fakeDataSales, fakeDataClients, fakeDataTraffic } from "../../Data/fakeData"


function GridDonutSM({ type, icon }) {
    const options = {
        cutout: '80%',
    }
    const dataMap = {
        emails: fakeDataEmails,
        sales: fakeDataSales,
        clients: fakeDataClients,
        traffic: fakeDataTraffic,
    }
    let h3Text, procentChange, pText = "";
    switch (type) {
        case "emails":
            h3Text = fakeDataEmails[0].value.toLocaleString()
            procentChange = "+14%"
            pText = "Emails Sent"
            break;
        case "sales":
            h3Text = fakeDataSales[0].value.toLocaleString()
            procentChange = "+22%"
            pText = "Sales Obtained"
            break;
        case "clients":
            h3Text = fakeDataClients[0].value.toLocaleString()
            procentChange = "+5%"
            pText = "New Clients"
            break;
        case "traffic":
            h3Text = fakeDataTraffic[0].value.toLocaleString()
            procentChange = "+43%"
            pText = "Traffic Receieved"
            break;
    }

    return (
        <>
            <div className='flex flex-col justify-center text-accentLime text-2xl'>
                {icon}
                <h3 className='dark:text-white text-black text-lg'>
                    {h3Text}
                </h3>
                <p className='text-accentLime font-light text-lg'>{pText}</p>
            </div>
            <div className='flex flex-col justify-between items-end'>
                <Doughnut
                    data={{
                        datasets: [
                            {
                                data: dataMap[type].map((item) => item.value),
                                backgroundColor: [
                                    "#60ceb2",
                                    "#615fff"
                                ],
                                borderWidth: 0,
                            }
                        ]
                    }}
                    options={options}
                />
                <p className='text-accentLime italic font-extralight'>{procentChange}</p>
            </div>
        </>
    )
}

export default GridDonutSM
