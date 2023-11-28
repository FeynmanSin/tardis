import React from 'react'
import type { PropsWithChildren } from 'react';
import { Button, Cascader, Col, DatePicker, Form, Input, Row, Select, Radio } from 'antd';
import { SearchFormConfig } from './type';
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons';

import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
// 解决日期选择器一半中文一半英文问题
dayjs.locale('zh-cn');

import 'dayjs/locale/zh-cn';
const SearchFormItems: React.FC<PropsWithChildren<{
    searchFormConfig: SearchFormConfig[];
    onSearch: (values: any) => void;
}>> = ({
    searchFormConfig = [],
    onSearch,
}) => {
        const form = Form.useFormInstance();

        const searchHandle = () => {
            const values = form.getFieldsValue()
            if (values.rangePicker && values.rangePicker.length > 0) {
                values.beginTime = dayjs(new Date(values.rangePicker[0])).format('YYYY-MM-DD');
                values.endTime = dayjs(new Date(values.rangePicker[1])).format('YYYY-MM-DD');
                delete values.rangePicker;
            }
            onSearch(values);
        }

        const onReset = () => {
            form.resetFields();
            const values = form.getFieldsValue()
            onSearch(values);
        }

        const renderItems: (item: SearchFormConfig) => any = (item) => {
            switch (item.type) {
                case 'select':
                    return (
                        <Select
                            style={{ ...item.styles }}
                            options={item.options}
                            allowClear
                        />
                    );
                case 'rangePicker':
                    return <DatePicker.RangePicker style={{ width: '100%' }} format={'YYYY/MM/DD'} />
                case 'radio':
                    return <Radio.Group >
                        {
                            item.options && item.options.length > 0 && item.options.map(radio => {
                                return <Radio value={radio.id} key={radio.id}> {radio.name} </Radio>
                            })
                        }
                    </Radio.Group>
                default:
                    return <Input style={{ ...item.styles }} allowClear />
            }
        }
        return (
            <>
                <Row>
                    {
                        searchFormConfig.length > 0 && searchFormConfig.map(item => {
                            return (
                                <Col  {...{ xs: 24, sm: 24, md: 12, lg: 12, xl: 8 }} key={item.id}>
                                    <Form.Item name={item.id} label={item.label} initialValue={item.defaultValue ? item.defaultValue : ''}>
                                        {
                                            renderItems(item)
                                        }
                                    </Form.Item>
                                </Col>
                            )
                        })
                    }
                    <div style={{ textAlign: 'right', flex: 1 }}>
                        <Button icon={<SearchOutlined />} style={{ marginTop: 10 }} type="primary" onClick={searchHandle}>查询</Button>
                        <Button icon={<ReloadOutlined />} style={{ marginLeft: 8, marginRight: 16 }} onClick={onReset}>重置</Button>
                    </div>
                </Row >

            </>
        )
    }

export default SearchFormItems