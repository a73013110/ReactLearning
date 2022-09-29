import { Button, Form, Input, PageHeader, Select, Steps } from 'antd'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NewsEditor from '../../../components/news/NewsEditor';
import { ICategory } from '../../../interface/news/ICategory';

import style from './News.module.css'

const { Step } = Steps;
const { Option } = Select;

export default function NewsAdd() {
    const [current, setCurrent] = useState(0);
    const [categoryList, setCategoryList] = useState<ICategory[]>([]);
    const [form] = Form.useForm();
    const [formInfo, setFormInfo] = useState({})
    const [content, setContent] = useState("");

    useEffect(() => {
        axios.get("/categories").then(res => {
            setCategoryList(res.data);
        })
    }, [])

    return (
        <div>
            <PageHeader
                className="site-page-header"
                title="撰寫新聞"
                subTitle="This is a subtitle"
            />
            <Steps current={current}>
                <Step title="基本訊息" description="新聞標題，新聞分類" />
                <Step title="新聞內容" description="新聞主體內容" />
                <Step title="新聞提交" description="保存草稿或提交審核" />
            </Steps>

            <div style={{ marginTop: "50px" }}>
                <div className={current === 0 ? "" : style.active}>
                    <Form
                        form={form}
                        name="basic"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 20 }}
                    >
                        <Form.Item
                            label="新聞標題"
                            name="title"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="新聞分類"
                            name="categoryId"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Select>
                                {
                                    categoryList.map(item => <Option key={item.id} value={item.value}>{item.title}</Option>)
                                }
                            </Select>
                        </Form.Item>
                    </Form>
                </div>
                <div className={current === 1 ? "" : style.active}>
                    <NewsEditor getContent={(value) => {
                        setContent(value);
                    }}></NewsEditor>
                </div>
                <div className={current === 2 ? "" : style.active}></div>
            </div>

            <div style={{ marginTop: "50px" }}>
                {
                    current === 2 && <span>
                        <Button type="primary">保存草稿</Button>
                        <Button danger>提交審核</Button>
                    </span>
                }
                {
                    current < 2 && <Button type="primary" onClick={() => {
                        if (current === 0) {
                            form.validateFields().then((values) => {
                                // console.log(values);
                                setFormInfo(values);
                                setCurrent(current + 1);
                            }).catch(error => {
                                console.log(error);
                            })
                        }
                        else {
                            console.log(formInfo, content)
                            setCurrent(current + 1);
                        }
                    }}>下一步</Button>
                }
                {
                    current > 0 && <Button onClick={() => setCurrent(current - 1)}>上一步</Button>
                }
            </div>
        </div>
    )
}
