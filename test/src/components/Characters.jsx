import React, { useEffect, useState } from 'react';
import axios  from 'axios'
import { Table } from 'antd'

function Character() {
    const [data, setData] = useState([])
    const columns = [
        {
            title: 'Temp',
            dataIndex: ['main', 'temp'],
            key: 'temp'
        },

        {
            title: 'MinTemperature',
            dataIndex: ['main', 'temp_min'],
            key: 'temp_min'
        },

        {
            title: 'MaxTemperature',
            dataIndex: ['main', 'temp_max'],
            key: 'temp_max'
        },


        {
            title: 'Weather',
            dataIndex: 'weather',
            key: 'weather'
        },
    ]

    const getData = async () => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&appid=6fe433dbc5f912aa84ca60e3c3a57047`)
        if (response.data) {
            console.log(response.data.list)
            const list = response.data.list.map((item) => {
                return {
                    ...item,
                    weather: item.weather[0].main
                }
            })
            setData(list)
        }
    }



        useEffect(() => {
            getData();
        }, [])



        return (
            <Table
                columns={columns}
                dataSource={data}
                rowKey='id'>
            </Table>
)
        }

export default Character