import React, { useEffect, useState, useMemo, useRef, Suspense } from 'react';
import { Skeleton, Spin, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';

interface NewsArticle {
    id: string;
    ctime: string;
    title: string;
    description: string;
    source: string;
    picUrl: string;
    url: string;
}

const VirtualList = () => {
    const [dataSource, setDataSource] = useState<NewsArticle[]>([]);//总数据
    const [visibleItems, setVisibleItems] = useState<NewsArticle[]>([]);//渲染到页面的数据
    const [startIdx, setStartIdx] = useState(0);//开始项索引
    const [endIdx, setEndIdx] = useState(10);//结束项索引
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const loadMoreRef = useRef<HTMLDivElement | null>(null);
    const obRef = useRef<IntersectionObserver | null>(null);
    const { data, run } = useRequest(getData, {
        throttleWait: 2000,
        manual: true
    });

    const itemHeight = 500;//渲染项的高度

    useEffect(() => {
        setVisibleItems(dataSource.slice(startIdx, endIdx));
    }, [startIdx, endIdx, dataSource]);

    useEffect(() => {
        if (loadMoreRef.current) {
            obRef.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    // getData();
                    run();
                }
            }, {
                rootMargin: '12px'
            });
            obRef.current?.observe(loadMoreRef.current);
        }
        () => {
            obRef.current?.disconnect();
        }
    }, []);


    async function getData() {
        setLoading(true);
        const params = new URLSearchParams();
        params.append('num', '10');
        params.append('page', String(page));
        params.append('key', 'ebf8c1d3b826f30868d21e99c0aaf403');
        console.log(">>>>page", page)
        try {
            const res = await fetch('/apisJuhe/fapigx/caijing/query', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: params
            });
            if (res.ok) {
                const data = await res.json();
                setDataSource((prevRenderData) => {
                    return [...prevRenderData, ...data.result.newslist];
                });
                setPage(prevPage => prevPage + 1);
            }

        } catch (error) {
            console.log(">>>>>VirtualList error", error);
        } finally {
            setLoading(false);
        }
    }




    // 滚动事件
    const scrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
        // 根据滚动距离计算开始项索引
        let start = Math.floor((e.target as HTMLDivElement).scrollTop / itemHeight);
        // 根据滚动距离计算结束项索引
        let end = Math.floor((e.target as HTMLDivElement).scrollTop / itemHeight + 4);
        setStartIdx(start);
        setEndIdx(end);
    }


    // 计算dom Y轴偏移量 用于让元素渲染到正确位置
    const transformY = useMemo(() => {
        return startIdx * itemHeight + 'px'
    }, [startIdx, itemHeight]);


    return (
        <div onScroll={scrollHandler} style={{ overflowY: 'auto', height: `100%`, backgroundColor: 'black', display: 'flex', justifyContent: 'center' }} >
            <div style={{
                height: `${dataSource.length * itemHeight + 30}px`,
            }}>
                {
                    visibleItems.length > 0 && visibleItems.map((item, index) => (
                        <Suspense key={item.id} fallback={
                            <Skeleton
                                active
                                style={{
                                    transform: `translateY(${transformY})`,
                                    width: 566,
                                    marginBottom: 16,
                                    height: itemHeight,
                                    transition: 'none',
                                }} />
                        }
                        >
                            <Card key={item.id}
                                style={{
                                    width: 566,
                                    marginBottom: 16,
                                    height: itemHeight,
                                    transform: `translateY(${transformY})`
                                }}
                                cover={
                                    <img
                                        alt="example"
                                        src={item.picUrl}
                                    />
                                }
                                actions={[
                                    <SettingOutlined key="setting" />,
                                    <EditOutlined key="edit" />,
                                    <EllipsisOutlined key="ellipsis" />,
                                ]}
                            >
                                <Card.Meta
                                    avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                                    title={item.source}
                                    description={item.title}
                                />
                            </Card>
                        </Suspense>

                    ))
                }
                <div ref={loadMoreRef}
                    style={{ height: 20, transform: `translateY(${transformY})` }}>
                </div>
                <Spin spinning={loading} style={{ height: 40, width: '100%', transform: `translateY(${transformY})`, transition: 'none' }} />
            </div>
        </div>
    )
}

export default VirtualList;