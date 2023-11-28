import React, { useState } from 'react';
import { Card, Radio } from 'antd';

import SimpleRule from './simpleRule';
import ComplexRule from './complexRule';
const RuleConfig = () => {
    const [radioKey, setRadioKey] = useState('1');
    const onRadioChange = (e: any) => {
        setRadioKey(e.target.value);
    }
    return (
        <Card size='small' title="预警规则设置" >
            <div style={{ display: 'flex', marginBottom: 12 }}>
                <div>规则类型：</div>
                <Radio.Group defaultValue={radioKey} onChange={onRadioChange} style={{ marginRight: 12 }}>
                    <Radio value={'1'}>简单规则</Radio>
                    <Radio value={'2'}>复杂规则</Radio>
                </Radio.Group>
            </div>
            {
                radioKey == '1' ? <SimpleRule /> : <ComplexRule />
            }
        </Card >
    )
}

export default RuleConfig