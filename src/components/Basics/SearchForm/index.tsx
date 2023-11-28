import React, { memo, useEffect, useState } from 'react';
import { SearchFormConfig } from './type';
import type { PropsWithChildren } from 'react';
import { Collapse, Form } from 'antd';
import SearchFormItems from './SearchFormItems';
import type { CollapseProps } from 'antd';

const SearchForm: React.FC<PropsWithChildren<{
    searchFormConfig: SearchFormConfig[];
    onSearch: (value: any) => void;
}>> = ({
    searchFormConfig,
    onSearch
}) => {
        const [items, setItems] = useState<CollapseProps['items']>();
        const [form] = Form.useForm();

        useEffect(() => {
            setItems(
                [
                    {
                        key: '1',
                        label: '查询条件',
                        children: <SearchFormItems searchFormConfig={searchFormConfig} onSearch={onSearch} />,
                    }
                ]
            );
        }, [searchFormConfig]);

        return (
            <Form labelCol={{ span: 7 }} form={form}>
                <Collapse items={items} defaultActiveKey={['1']} />
            </Form>
        )
    }

export default memo(SearchForm);