import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import SearchForm from '@/components/Basics/SearchForm';
import BaseTable from '@/components/Basics/BaseTable';
import { Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useNavigate, useLocation } from 'umi';
const searchFormConfig = [
    {
        label: '预警时间',
        type: 'rangePicker',
        id: 'rangePicker'
    },
    {
        label: '可疑行为',
        type: 'select',
        id: '2',
        options: []

    },
    {
        label: '用户IP',
        type: 'input',
        id: '3'
    },
    {
        label: '系统名称',
        type: 'input',
        id: '4'
    },

]

const Detail: React.FC<PropsWithChildren<{
    modalRef: any
}>> = ({
    modalRef
}) => {
        const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

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
                title: '可疑行为',
                dataIndex: '2',
                align: "center",
                width: 200,
            },
            {
                title: '说明',
                dataIndex: '3',
                align: "center",
                width: 120,
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
                title: '预警时间',
                dataIndex: '6',
                align: "center",
                width: 200,
            },
            {
                title: '系统名称',
                dataIndex: '7',
                align: "center",
                width: 200,
            },
            {
                title: '单位名称',
                dataIndex: '8',
                align: "center",
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
                2: '模拟提交',
                3: '同一用户10秒内提交次数>10',
                4: 'testcyr001',
                5: '192.168.0.1',
                6: '2021-10-09  09:30:21',
                7: ' 新国家不良反应持有人直报系统',
                8: '广东永悦安药业科技有限公司',
            },]
        return (
            <div>
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
                />
            </div>
        )
    }

export default Detail