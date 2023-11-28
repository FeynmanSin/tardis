import React, { useState, useRef } from 'react';
import SearchForm from '@/components/Basics/SearchForm';
import BaseTable from '@/components/Basics/BaseTable';
import { Button, Card } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useNavigate, useLocation } from 'umi';
import Modal from './modal';
const searchFormConfig = [
    {
        label: '预警等级',
        type: 'select',
        id: '1',
        options: []
    },
    {
        label: '系统名称',
        type: 'input',
        id: '2'
    },
    {
        label: '可疑行为',
        type: 'select',
        id: '3',
        options: []
    },
    {
        label: '预警时间',
        type: 'rangePicker',
        id: 'rangePicker2'
    },
    {
        label: '控制策略',
        type: 'select',
        id: '4',
        options: []
    },
    {
        label: '用户IP',
        type: 'input',
        id: '5'
    },
    {
        label: '执行控制时间',
        type: 'rangePicker',
        id: 'rangePicker'
    },
    {
        label: '结束控制时间',
        type: 'rangePicker',
        id: 'rangePicker6'
    },
    {
        label: '状态',
        type: 'select',
        id: '7',
        options: []
    },



]

const History: React.FC = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const modalRef = useRef<HTMLInputElement | null>(null);
    const location = useLocation();
    const navigate = useNavigate()

    const back = () => {
        // @ts-ignore
        navigate(`${location.state.formPage}`, { replace: true })
    }

    const showModal = (record: any) => {
        // @ts-ignore
        modalRef.current.showModal(record);
    }
    const getTableData = (values: any) => {
        console.log('getTableData', values)
    }

    const rowSelection = {
        type: 'checkbox',
        onChange: (newSelectedRowKeys: React.Key[], selectedRows: []) => {
            console.log(`selectedRowKeys: ${newSelectedRowKeys}`, 'selectedRows: ', selectedRows);
            setSelectedRowKeys(newSelectedRowKeys);
        },
        // getCheckboxProps: (record: any) => ({
        //     record
        // }),
    };

    const columns: ColumnsType = [
        {
            title: '预警等级',
            dataIndex: '1',
            align: "center",
            width: 120,
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
            title: '单位名称',
            dataIndex: '2',
            align: "center",
            width: 200,
        },
        {
            title: '单位类型',
            dataIndex: '3',
            align: "center",
            width: 200,
        },
        {
            title: '账号名',
            dataIndex: '4',
            align: "center",
            width: 120,
        },
        {
            title: '用户IP',
            dataIndex: '5',
            align: "center",
            width: 120,
        },
        {
            title: '系统名称',
            dataIndex: '6',
            align: "center",
            width: 120,
        },
        {
            title: '执行控制时间',
            dataIndex: '7',
            align: "center",
            width: 200,
        },
        {
            title: '结束控制时间',
            dataIndex: '8',
            align: "center",
            width: 200,
        },
        {
            title: '控制策略',
            dataIndex: '9',
            align: "center",
            width: 200,
        },
        {
            title: '策略描述',
            dataIndex: '9',
            align: "center",
            width: 200,
        },
        {
            title: '可疑行为',
            dataIndex: '9',
            align: "center",
            width: 200,
        },
        {
            title: '预警说明',
            dataIndex: '9',
            align: "center",
            width: 200,
        },
        {
            title: '所属区划',
            dataIndex: '9',
            align: "center",
            width: 200,
        },
        {
            title: '备注说明',
            dataIndex: '9',
            align: "center",
            width: 200,
        },
        {
            title: '预警时间',
            dataIndex: '9',
            align: "center",
            width: 200,
        },
        {
            title: '控制到期时间',
            dataIndex: '9',
            align: "center",
            width: 200,
        },
        {
            title: '状态',
            dataIndex: '9',
            align: "center",
            fixed: 'right',
            width: 200,
        },
        {
            title: '操作',
            align: 'center',
            fixed: 'right',
            width: 200,
            render: (text, record) => {
                return (
                    <a onClick={() => showModal(record)}>参考日志</a>
                )
            }
        },
    ];
    const dataSource = [
        {
            1: '高',
            2: '广东永悦安药业科技有限公司',
            3: '药品持有人',
            4: 'testcyr001',
            5: '192.168.0.1',
            6: '新国家不良反应持有人直报系统',
            7: ' 2021-10-09  09:30:21',
            8: '2021-10-10 09:30:21',
            9: '手动结束'
        },]
    return (
        <Card size='small' title="历史控制记录" extra={<Button onClick={back}>返回</Button>} style={{ height: '100%' }}>
            <SearchForm searchFormConfig={searchFormConfig} onSearch={getTableData} />
            <div style={{ display: 'flex', margin: '12px 0px' }}>
                <Button>导出EXCEL</Button>
            </div>
            <BaseTable
                columns={columns}
                dataSource={dataSource}
                onChange={getTableData}
                rowSelection={{
                    ...rowSelection,
                }}
                scroll={{ x: 1000 }}
            />
            {/* @ts-ignore */}
            <Modal ref={modalRef} />
        </Card>
    )
}

export default History