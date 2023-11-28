import React, { useState } from 'react';
import type { FC, PropsWithChildren } from 'react';
import { Pagination, Table } from 'antd';
import type { PaginationProps } from 'antd';


const showTotal: PaginationProps['showTotal'] = (total) => `共 ${total} 条`;

const BaseTable: FC<PropsWithChildren<{
    columns: any;
    dataSource: object[];
    onChange?: (values: any) => void;
    rowSelection?: any;
    pagination?: boolean;
    onRow?: () => void;
    scroll?: object
}>> = ({
    columns,
    dataSource,
    rowSelection,
    onChange,
    pagination = true,
    scroll = {},
    onRow = () => { }
}) => {
        const [current, setCurrent] = useState<number>(1);
        const [pageSize, setPageSize] = useState<number>(10);
        const [loading, setLoading] = useState<boolean>(false);
        const onChangePage = async (page: number, pageSize: number) => {
            setCurrent(page);
            setPageSize(pageSize);
            if (onChange) {
                onChange({ page, pageSize });
            }
        }

        return (
            <>
                <Table
                    bordered
                    columns={columns}
                    dataSource={dataSource}
                    pagination={false}
                    loading={loading}
                    rowSelection={rowSelection}
                    // @ts-ignore
                    onRow={onRow}
                    scroll={scroll}
                />
                {
                    pagination && <Pagination
                        style={{ textAlign: 'right', marginTop: 12 }}
                        showQuickJumper
                        defaultCurrent={current}
                        total={Number(dataSource.length)}
                        onChange={onChangePage}
                        onShowSizeChange={onChangePage}
                        showTotal={showTotal}
                        showSizeChanger
                        pageSize={pageSize}
                    />
                }
            </>
        )
    }

export default BaseTable