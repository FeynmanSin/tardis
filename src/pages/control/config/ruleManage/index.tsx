import React, { useState } from 'react';
import { Button, Switch } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import BaseTable from '@/components/Basics/BaseTable';
import SearchForm from '@/components/Basics/SearchForm';
import { useNavigate, useLocation } from 'umi';
const searchFormConfig = [
    {
        label: '预警类型',
        type: 'select',
        id: '1',
        options: []
    },
    {
        label: '创建时间',
        type: 'rangePicker',
        id: 'rangePicker2'
    },
    {
        label: '规则状态',
        type: 'select',
        id: '2',
        options: []
    },

]

const RuleManage = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const location = useLocation();
    const navigate = useNavigate()

    const getTableData = () => {

    }


    const jump = (record: any, type: string) => {
        console.log(">>>>location", location)
        navigate(`${location.pathname}/detail`, { replace: true, state: { ...record, formPage: location.pathname, type } });
    }

    const columns: ColumnsType = [
        {
            title: '规则名称',
            dataIndex: '2',
            align: "center",
            width: 200,
        },
        {
            title: '预警类型',
            dataIndex: '3',
            align: "center",
            width: 200,
        },
        {
            title: '预警等级',
            dataIndex: '9',
            align: "center",
            width: 200,
        },
        {
            title: '预警周期',
            dataIndex: '4',
            align: "center",
            width: 120,
        },
        {
            title: '规则类型',
            dataIndex: '5',
            align: "center",
            width: 120,
        },
        {
            title: '规则说明',
            dataIndex: '6',
            align: "center",
            width: 120,
        },
        {
            title: '规则状态',
            dataIndex: '7',
            align: "center",
            width: 200,
            render: (text, record) => {
                return <Switch checkedChildren="已启用" unCheckedChildren="已停用" defaultChecked />
            }
        },
        {
            title: '操作',
            align: 'center',
            fixed: 'right',
            width: 200,
            render: (text, record) => {
                return (
                    <a onClick={() => jump(record, 'detail')}>查看</a>
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
        <>
            <SearchForm searchFormConfig={searchFormConfig} onSearch={getTableData} />
            <div style={{ display: 'flex', margin: '12px 0px' }}>
                <Button onClick={() => jump({}, 'create')} type='primary' style={{ marginRight: 12 }}>新增</Button>
                <Button>批量删除</Button>
            </div>
            <BaseTable
                columns={columns}
                dataSource={dataSource}
                onChange={getTableData}
                rowSelection={{
                    ...rowSelection,
                }}
            />
        </>
    )
}

export default RuleManage