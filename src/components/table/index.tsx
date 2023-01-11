import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Table} from "antd";
import "./style.css"

const dataSource = [
    {
        key: '1',
        name: '№1',
        fromLat: 59.84660399,
        fromLng: 30.29496392,
        beforeLat: 59.82934196,
        beforeLng: 30.42423701,
    },
    {
        key: '2',
        name: '№2',
        fromLat: 59.82934196,
        fromLng: 30.42423701,
        beforeLat: 59.82761295,
        beforeLng: 30.41705607,
    },
    {
        key: '3',
        name: '№3',
        fromLat: 59.83567701,
        fromLng: 30.38064206,
        beforeLat: 59.84660399,
        beforeLng: 30.29496392,
    },
    {
        key: '4',
        name: '№4',
        fromLat: 59.84660399,
        fromLng: 30.29496392,
        beforeLat: 59.82761295,
        beforeLng: 30.41705607,
    },
    {
        key: '5',
        name: '№5',
        fromLat: 59.83567701,
        fromLng: 30.38064206,
        beforeLat: 59.84660399,
        beforeLng: 30.29496392,
    },
];

const columns = [
    {
        title: 'Номер заявки',
        dataIndex: 'name',
        key: '0',
    },
    {
        title: 'Координаты от lat',
        dataIndex: 'fromLat',
        key: '1',
    },
    {
        title: 'Координаты от lng',
        dataIndex: 'fromLng',
        key: '2',
    },
    {
        title: 'Координаты до lat',
        dataIndex: 'beforeLat',
        key: '3',
    },
    {
        title: 'Координаты до lng',
        dataIndex: 'beforeLng',
        key: '4',
    },
];
const TableComponent = (): JSX.Element => {
    const [activeIndex, setActiveIndex] = useState<number>(-1);
    const dispatch = useDispatch();

    return (
        <div>
            <Table
                rowClassName={(record, index) => activeIndex === index ? 'table-row-light' :  'table-row-dark'}
                onRow={(record, rowIndex) => {
                    const beforeCoords = Object.values([record.beforeLat, record.beforeLng]).join(',')
                    const fromCoords = Object.values([record.fromLat, record.fromLng]).join(',')
                    const payload = `${beforeCoords};${fromCoords}`
                    return {
                        onClick: () => {
                            setActiveIndex(rowIndex!)
                            dispatch({type: "LOAD_COORDS", payload})
                        }
                    };
                }}
                size={"small"}
                pagination={false}
                dataSource={dataSource}
                columns={columns}
            />
        </div>
    );
};
export default TableComponent
