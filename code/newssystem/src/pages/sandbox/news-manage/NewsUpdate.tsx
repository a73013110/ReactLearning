import { Button, Form, Input, message, notification, PageHeader, Select, Steps } from 'antd'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import NewsEditor from '../../../components/news/NewsEditor';
import { EAuditState } from '../../../enum/news/EAuditState';
import { ICategory } from '../../../interface/news/ICategory';
import { INews } from '../../../interface/news/INews';

import style from './News.module.css'

const { Step } = Steps;
const { Option } = Select;

interface IParams {
    id: string,
    [key: string]: string
}

export default function NewsUpdate() {
    const [current, setCurrent] = useState(0);
    const [categoryList, setCategoryList] = useState<ICategory[]>([]);
    const [form] = Form.useForm();
    const [formInfo, setFormInfo] = useState({})
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    const params = useParams<IParams>();

    useEffect(() => {
        axios.get("/categories").then(res => {
            setCategoryList(res.data);
        })
    }, [])

    useEffect(() => {
        axios.get(`/news/${params.id}?_expand=category&_expand=role`).then(res => {
            // console.log(res.data);
            const { title, categoryId, content } = res.data as INews;
            form.setFieldsValue({
                title,
                categoryId
            });
            setContent(content);
        })
    }, [params.id, form])


    const handleSave = (auditState: EAuditState) => {
        // console.log(userInfo)
        axios.patch(`/news/${params.id}`, {
            ...formInfo,
            "content": content,
            "auditState": auditState
        }).then(res => {
            navigate(auditState === 0 ? "/news-manage/draft" : "/audit-manage/list");
            notification.info({
                message: "通知",
                description: `您可以到${auditState === 0 ? "草稿箱" : "審核列表"}中查看您的新聞`,
                placement: "bottomRight",
            });
        })
    }

    return (
        <div>
            <PageHeader
                className="site-page-header"
                title="更新新聞"
                onBack={() => window.history.back()}
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
                                    categoryList.map(item => <Option key={item.id} value={item.id}>{item.title}</Option>)
                                }
                            </Select>
                        </Form.Item>
                    </Form>
                </div>
                <div className={current === 1 ? "" : style.active}>
                    <NewsEditor getContent={(value) => {
                        setContent(value);
                    }} content={content}></NewsEditor>
                </div>
                <div className={current === 2 ? "" : style.active}></div>
            </div>

            <div style={{ marginTop: "50px" }}>
                {
                    current === 2 && <span>
                        <Button type="primary" onClick={() => handleSave(0)}>保存草稿</Button>
                        <Button danger onClick={() => handleSave(1)}>提交審核</Button>
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
                            // console.log(formInfo, content)
                            if (content === "" || content.trim() === "<p></p>") {
                                message.error("新聞內容不可為空");
                            }
                            else {
                                setCurrent(current + 1);
                            }
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
