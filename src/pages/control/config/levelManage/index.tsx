import React, { useRef } from 'react';
import { Button, Tag } from 'antd';
import BaseTable from '@/components/Basics/BaseTable';
import type { ColumnsType } from 'antd/es/table';
import Modal from './modal';


const LevelManage = () => {
    const modalRef = useRef();

    const getTableData = () => {

    }
    const showModal = () => {
        // @ts-ignore
        modalRef.current.showModal()
    }

    const columns: ColumnsType = [
        {
            title: '序号',
            dataIndex: 'id',
            key: 'users_xuhao',
            width: 80,
            align: 'center',
            render: (row, record, index) => (
                <p>{index + 1}</p>
            ),
        },
        {
            title: '预警等级',
            dataIndex: '1',
            align: "center",
            render: (text) => {
                let color;
                if (text == '高') {
                    color = '#EC3612';
                } else if (text == '中') {
                    color = '#F59A23';
                }
                return <span style={{ color: color }}>{text}</span>
            }
        },
        {
            title: '级别颜色',
            dataIndex: '2',
            align: "center",
            render: (text) => {
                let color;
                if (text == 0) {
                    color = 'error'
                    text = '红色'
                }
                if (text == 1) {
                    color = 'warning'
                    text = '橙色'
                }
                if (text == 2) {
                    color = 'default'
                    text = '灰色'
                }
                return (
                    <Tag color={color}>
                        {text}
                    </Tag>
                )
            }
        },
        {
            title: '级别说明',
            dataIndex: '3',
            align: "center",
        },
        {
            title: '操作',
            align: 'center',
            fixed: 'right',
            width: 200,
            render: (text, record) => {
                return (
                    <>
                        <a onClick={() => showModal()}>修改</a>
                        {` | `}
                        <a onClick={() => showModal()}>删除</a>
                    </>
                )
            }
        },
    ];
    const dataSource = [
        {
            1: '高',
            2: '0',
            3: '',
        },
        {
            1: '中',
            2: '1',
            3: '',
        },
        {
            1: '低',
            2: '2',
            3: '',
        },
    ]



    return (
        <>
            <Button type='primary' onClick={showModal} style={{ marginBottom: 10 }}>新增</Button>
            <BaseTable
                columns={columns}
                dataSource={dataSource}
                onChange={getTableData}
            />
            {/* @ts-ignore */}
            <Modal ref={modalRef} />
        </>
    )
}

export default LevelManage