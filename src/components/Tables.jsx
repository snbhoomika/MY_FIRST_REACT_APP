import { Table } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Tables.css';
const Tables = () => {
    const tableColumns = [
        {
            title: 'Breed Name',
            dataIndex: 'name',
        },
        {
            title: 'Description',
            dataIndex: 'description',
        },
        {
            title: 'Life Span(Max)',
            dataIndex: 'life',
        },

    ];

    const url = "https://dogapi.dog/api/v2/breeds";

    const [TableData, setTableData] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get(url);

            const mappedData = response.data.data.map((item) => ({
                key: item.id,
                name: item.attributes.name,
                description: item.attributes.description,
                life: item.attributes.life.max,

            }));

            setTableData(mappedData);

        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Table dataSource={TableData} columns={tableColumns} />
    );
};



export default Tables;