import React, { memo, useImperativeHandle, forwardRef, useState } from 'react';
import { Modal, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import BaseTable from '@/components/Basics/BaseTable';
import SearchForm from '@/components/Basics/SearchForm';


const searchFormConfig = [
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
        label: '埋点分组',
        type: 'input',
        id: '3'
    },
    {
        label: '埋点URL',
        type: 'input',
        id: '4'
    },

    {
        label: '埋点编号',
        type: 'input',
        id: '5'
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
            title: '系统名称',
            dataIndex: '1',
            align: "center",
            width: 200,
        },
        {
            title: '埋点分组',
            dataIndex: '2',
            align: "center",
            width: 130,
        },
        {
            title: '埋点编号',
            dataIndex: '3',
            align: "center",
            width: 130,
        },
        {
            title: '埋点名称',
            dataIndex: '4',
            align: "center",
            width: 130,
        },
        {
            title: '埋点URL',
            dataIndex: '5',
            align: "center",
            width: 200,
        },
        {
            title: '埋点状态',
            dataIndex: '6',
            align: "center",
            width: 130,
        },
        {
            title: '开始时间',
            dataIndex: '7',
            align: "center",
            width: 200,
        },
        {
            title: '停用时间',
            dataIndex: '8',
            align: "center",
            width: 200,
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
            title="选择埋点"
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
            <BaseTable
                columns={columns}
                dataSource={dataSource}
                onChange={getTableData}
            />
        </Modal>
    )
})

export default memo(Index);