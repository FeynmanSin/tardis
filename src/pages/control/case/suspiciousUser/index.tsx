import React, { useState, useRef } from 'react';
import SearchForm from '@/components/Basics/SearchForm';
import BaseTable from '@/components/Basics/BaseTable';
import { Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useNavigate, useLocation } from 'umi';
import StrategyModal from '../components/StrategyModal';
const searchFormConfig = [
    {
        label: '预警等级',
        type: 'select',
        id: '1',
        options: []
    },
    {
        label: '单位类型',
        type: 'select',
        id: '2',
        options: []

    },
    {
        label: '单位名称',
        type: 'input',
        id: '3'
    },
    {
        label: '时间范围',
        type: 'rangePicker',
        id: 'rangePicker'
    },
    {
        label: '可疑行为',
        type: 'select',
        id: '5',
        options: []

    },
    {
        label: '账号名',
        type: 'input',
        id: '6'
    },
    {
        label: '有无受控记录',
        type: 'radio',
        id: '7',
        options: [
            { id: '', name: '全部' },
            { id: '1', name: '有' },
            { id: '2', name: '无' },
        ]

    },
]



const SuspiciousUser: React.FC = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const modalRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();
    const location = useLocation();
    const getTableData = (values: any) => {
        console.log('getTableData', values)
    }

    const jump = (record: any) => {
        console.log(">>>>location", location)
        navigate(`${location.pathname}/detail`, { replace: true, state: { ...record, formPage: location.pathname } });

    }

    const showModal = (record: any) => {
        // @ts-ignore
        modalRef.current.showModal(record);

    }


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
            width: 120,
        },
        {
            title: '所属区划',
            dataIndex: '4',
            align: "center",
            width: 120,
        },
        {
            title: '账号名',
            dataIndex: '5',
            align: "center",
            width: 120,
        },
        {
            title: '可疑行为',
            dataIndex: '6',
            align: "center",
            width: 200,
        },
        {
            title: '最近一次预警时间',
            dataIndex: '7',
            align: "center",
            width: 200,
        },
        {
            title: '有无受控记录',
            dataIndex: '8',
            align: "center",
            width: 130,
            render: (text) => {
                let color;
                if (text == '有') {
                    color = '#EC3612';
                }
                return <span style={{ color: color }}>{text}</span>
            }
        },
        {
            title: '状态',
            dataIndex: '9',
            align: "center",
            width: 80,
        },
        {
            title: '操作',
            align: 'center',
            fixed: 'right',
            width: 200,
            render: (text, record) => {
                return (
                    <div>
                        <a onClick={() => jump(record)}>预警明细</a>
                        {` | `}
                        <a onClick={() => showModal(record)}>执行控制</a>
                    </div>
                )
            }
        },
    ];
    const dataSource = [
        {
            1: '高',
            2: '广东永悦安药业科技有限公司',
            3: '药品持有人',
            4: '广东省XX市',
            5: 'testcyr001',
            6: '高频调用，模拟提交',
            7: '2021-10-09  09:30:21',
            8: '有',
            9: '待审'
        },
        {
            1: '中',
            2: '广东永悦安药业科技有限公司',
            3: '药品持有人',
            4: '广东省XX市',
            5: 'testcyr001',
            6: '高频调用，模拟提交',
            7: '2021-10-09  09:30:21',
            8: '无',
            9: '待审'
        },
        {
            1: '低',
            2: '广东永悦安药业科技有限公司',
            3: '药品持有人',
            4: '广东省XX市',
            5: 'testcyr001',
            6: '高频调用，模拟提交',
            7: '2021-10-09  09:30:21',
            8: '有',
            9: '待审'
        },
    ]
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

    return (
        <div>
            <SearchForm searchFormConfig={searchFormConfig} onSearch={getTableData} />
            <div style={{ display: 'flex', margin: '12px 0px' }}>
                <Button onClick={showModal} type='primary' style={{ marginRight: 12 }}>批量控制</Button>
                <Button>导出EXCEL</Button>
            </div>
            <BaseTable
                columns={columns}
                dataSource={dataSource}
                onChange={getTableData}
                rowSelection={{
                    ...rowSelection,
                }}
            />
            {/* @ts-ignore */}
            <StrategyModal ref={modalRef} />
        </div>
    )
}

export default SuspiciousUser