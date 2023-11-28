import React from 'react';
import type { PropsWithChildren } from 'react';
import BaseTable from '@/components/Basics/BaseTable';
import type { ColumnsType } from 'antd/es/table';

const DetailTable: React.FC<PropsWithChildren<{
    modalRef: any;
}>> = ({
    modalRef,
}) => {
        const showModal = () => {
            modalRef.current.showModal()
        }
        const del = () => {

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
                title: '埋点编号',
                dataIndex: '2',
                align: "center",
                width: 200,
            },
            {
                title: '埋点URL',
                dataIndex: '3',
                align: "center",
                width: 120,
            },
            {
                title: '状态',
                dataIndex: '4',
                align: "center",
                width: 120,
            },
            {
                title: '开始时间',
                dataIndex: '5',
                align: "center",
                width: 120,
            },
            {
                title: '停用时间',
                dataIndex: '6',
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
                        <div>
                            <a onClick={() => showModal(record)}>编辑</a>
                            {` | `}
                            <a onClick={() => del(record)}>删除</a>
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
        return (
            < BaseTable
                columns={columns}
                dataSource={dataSource}
                pagination={false}
            />
        )
    }

export default DetailTable