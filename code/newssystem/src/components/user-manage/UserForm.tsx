import { Form, FormInstance, Input, Select } from 'antd'
import { useEffect, useState } from 'react';
import { IRegion } from '../../interface/region/IRegion';
import { IRole } from '../../interface/role/IRole';

const { Option } = Select;

interface IProps {
    form: FormInstance,
    regionList: IRegion[],
    roleList: IRole[],
    isFormRegionDisable: boolean,
    setFormRegionDisable: (isRegionDisable: boolean) => void
}

export default function UserForm(props: IProps) {
    const { form, regionList, roleList, isFormRegionDisable, setFormRegionDisable } = props;
    const [isRegionDisable, setIsRegionDisable] = useState(false);

    useEffect(() => {
        setIsRegionDisable(isFormRegionDisable);
    }, [isFormRegionDisable])


    return (

        <Form form={form} layout="vertical">
            <Form.Item name="id" hidden={true}>
                <Input type="hidden" />
            </Form.Item>
            <Form.Item
                name="username"
                label="用戶名稱"
                rules={[{ required: true, message: 'Please input the title of collection!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="password"
                label="密碼"
                rules={[{ required: true, message: 'Please input the title of collection!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="region"
                label="區域"
                rules={[{ required: !isRegionDisable, message: 'Please input the title of collection!' }]}
            >
                <Select disabled={isRegionDisable}>
                    {
                        regionList.map((item: IRegion) => <Option key={item.id} value={item.value}>
                            {item.title}
                        </Option>)
                    }
                </Select>
            </Form.Item>
            <Form.Item
                name="roleId"
                label="角色"
                rules={[{ required: true, message: 'Please input the title of collection!' }]}
            >
                <Select onChange={(value) => {
                    setIsRegionDisable(value === 1);
                    setFormRegionDisable(value === 1);
                    value === 1 && form.setFieldValue("region", "");
                }}>
                    {
                        roleList.map((item: IRole) => <Option key={item.id} value={item.id}>
                            {item.roleName}
                        </Option>)
                    }
                </Select>
            </Form.Item>
        </Form>
    )
}
