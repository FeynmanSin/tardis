import React from 'react';
import { Card, Button } from 'antd';
import { useNavigate, useLocation } from 'umi';
import BasicInfo from './basicInfo';
import RuleConfig from './ruleConfig';

const Detail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const save = () => {

    }
    const back = () => {
        // @ts-ignore
        navigate(`${location.state.formPage}`, { replace: true })
    }

    return (
        <Card size='small' title="新增" extra={
            <>
                <Button type="primary" onClick={save} style={{ marginRight: 12 }}>保存</Button>
                <Button onClick={back}>取消</Button>
            </>
        } >
            <BasicInfo />
            <RuleConfig />

        </Card >
    )
}

export default Detail