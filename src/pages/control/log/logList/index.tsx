import React, { useState, useRef } from 'react';
import SearchForm from '@/components/Basics/SearchForm';
import BaseTable from '@/components/Basics/BaseTable';
import { Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useNavigate, useLocation } from 'umi';
import Modal from './modal';
const searchFormConfig = [
    {
        label: '操作时间',
        type: 'rangePicker',
        id: 'rangePicker'
    },
    {
        label: '单位类型',
        type: 'select',
        id: '1',
        options: []
    },
    {
        label: '单位名称',
        type: 'input',
        id: '2'
    },
    {
        label: '系统名称',
        type: 'input',
        id: '3'
    },

    {
        label: '账号名',
        type: 'input',
        id: '4'
    },
    {
        label: '用户IP',
        type: 'input',
        id: '5'
    },

    {
        label: '埋点URL',
        type: 'input',
        id: '6'
    },
    {
        label: '埋点分组',
        type: 'input',
        id: '7'
    },
    {
        label: '埋点名称',
        type: 'input',
        id: '8'
    },

    {
        label: '日志固化状态',
        type: 'radio',
        id: '9',
        options: [
            { id: '', name: '全部' },
            { id: '1', name: '已固化' },
            { id: '2', name: '未固化' },
        ]
    },


]



const CurControlled: React.FC = () => {
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
            title: '单位名称',
            dataIndex: '1',
            align: "center",
            width: 200,
        },
        {
            title: '单位类型',
            dataIndex: '2',
            align: "center",
            width: 120,
        },
        {
            title: '账号名',
            dataIndex: '3',
            align: "center",
            width: 120,
        },
        {
            title: '用户IP',
            dataIndex: '4',
            align: "center",
            width: 120,
        },
        {
            title: '操作时间',
            dataIndex: '5',
            align: "center",
            width: 200,
        },
        {
            title: '埋点分组',
            dataIndex: '6',
            align: "center",
            width: 200,
        },
        {
            title: '埋点名称',
            dataIndex: '7',
            align: "center",
            width: 200,
        },
        {
            title: '埋点URL',
            dataIndex: '8',
            align: "center",
            width: 200,
        },
        {
            title: '系统名称',
            dataIndex: '9',
            align: "center",
            width: 200,
        },
        {
            title: '所属区划',
            dataIndex: '10',
            align: "center",
            width: 120,
        },

        {
            title: '日志固化状态',
            dataIndex: '11',
            align: "center",
            width: 200,
        },
    ];
    const dataSource = [
        {
            1: '高',
            2: '广东永悦安药业科技有限公司',
            3: '药品持有人',
            4: '广东省XX市',
            5: 'testcyr001',
            6: '2021-10-09  09:30:21',
            7: '拒绝访问',
            8: '禁用账号，禁用1天',
            9: '高频调用，模拟提交',
            10: '受控中'
        },
        {
            1: '中',
            2: '广东永悦安药业科技有限公司',
            3: '药品持有人',
            4: '广东省XX市',
            5: 'testcyr001',
            6: '2021-10-09  09:30:21',
            7: '拒绝访问',
            8: '禁用账号，禁用1天',
            9: '高频调用，模拟提交',
            10: '受控中'
        },
        {
            1: '低',
            2: '广东永悦安药业科技有限公司',
            3: '药品持有人',
            4: '广东省XX市',
            5: 'testcyr001',
            6: '2021-10-09  09:30:21',
            7: '拒绝访问',
            8: '禁用账号，禁用1天',
            9: '高频调用，模拟提交',
            10: '受控中'
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
                <Button onClick={showModal} type='primary' style={{ marginRight: 12 }}>人工研判</Button>
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
            <Modal ref={modalRef} />
        </div>
    )
}

export default CurControlled