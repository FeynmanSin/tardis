import React, { memo, useImperativeHandle, forwardRef, useState } from 'react';
import { Modal, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import BaseTable from '@/components/Basics/BaseTable';
import SearchForm from '@/components/Basics/SearchForm';


const searchFormConfig = [
    {
        label: '操作时间',
        type: 'rangePicker',
        id: 'rangePicker'
    },
    {
        label: '系统名称',
        type: 'input',
        id: '1'
    },
    {
        label: '埋点名称',
        type: 'input',
        id: '2'
    },
    {
        label: '埋点URL',
        type: 'input',
        id: '3'
    },
    {
        label: '日志固化状态',
        type: 'radio',
        id: '7',
        options: [
            { id: '', name: '全部' },
            { id: '1', name: '已固化' },
            { id: '2', name: '未固化' },
        ]

    },
]




const Index: React.FC = forwardRef((props, ref) => {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [selectedRows, setSelectedRows] = useState<React.Key[]>([]);

    useImperativeHandle(ref, () => {
        return {
            showModal,
        };
    }, []);

    const showModal = (record: any) => {
        setVisible(true);
    }
    const getTableData = () => {

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
            title: '单位名称',
            dataIndex: '1',
            align: "center",
            width: 200,
        },
        {
            title: '单位类型',
            dataIndex: '2',
            align: "center",
            width: 130,
        },
        {
            title: '账号名',
            dataIndex: '3',
            align: "center",
            width: 130,
        },
        {
            title: '用户IP',
            dataIndex: '4',
            align: "center",
            width: 130,
        },
        {
            title: '操作时间',
            dataIndex: '5',
            align: "center",
            width: 200,
        },
        {
            title: '埋点名称',
            dataIndex: '6',
            align: "center",
            width: 130,
        },
        {
            title: '埋点URL',
            dataIndex: '7',
            align: "center",
            width: 200,
        },
        {
            title: '系统名称',
            dataIndex: '8',
            align: "center",
            width: 200,
        },
        {
            title: '所属区划',
            dataIndex: '9',
            align: "center",
            width: 120,
        },
        {
            title: '日志固化状态',
            dataIndex: '10',
            align: "center",
            width: 120,
        },
    ];
    const dataSource = [
        {
            id: '3333',
            1: ' 广东永悦安药业科技有限公司',
            2: '药品持有人',
            3: 'testcyr001',
            4: '192.168.0.1',
            5: '2021-10-09  09:30:24',
            6: '个例报告查询',
            7: ' http://121.8.201.149:64666/k.com',
            8: '新国家不良反应持有人直报系统',
            9: '广东省XX市',
            10: '已固化'
        },

    ]

    const rowSelection = {
        type: 'radio',
        selectedRowKeys: selectedRowKeys,
        onChange: (newSelectedRowKeys: React.Key[], selectedRows: []) => {
            console.log(`selectedRowKeys: ${newSelectedRowKeys}`, 'selectedRows: ', selectedRows);
            setSelectedRows(selectedRows);
        },
    };
    const selectRow = (record: any) => {
        console.log('>>>>>>', record)
        console.log('>>>>>>', selectedRowKeys)
        setSelectedRowKeys([record.id]);

        // this.setState({ selectedRowKeys: [record.id], selectedRows: [record] });
    }
    const onCancel = () => {
        setVisible(false)
    }
    const onOK = () => {
        setVisible(false)
    }

    return (
        <Modal
            open={visible}
            title="查看日志"
            destroyOnClose
            maskClosable
            centered
            width={1920}
            styles={{ body: { height: 560 } }}
            confirmLoading={confirmLoading}
            onCancel={onCancel}
            onOk={onOK}
        >
            <SearchForm searchFormConfig={searchFormConfig} onSearch={getTableData} />
            <div style={{ display: 'flex', margin: '12px 0px' }}>
                <Button>导出EXCEL</Button>
            </div>
            <BaseTable
                columns={columns}
                dataSource={dataSource}
                onChange={getTableData}
                pagination={false}
            />
        </Modal>
    )
})

export default memo(Index);