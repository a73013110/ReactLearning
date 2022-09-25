import { Form, FormInstance, Input, Select } from 'antd'
import { useCallback, useEffect, useState } from 'react';
import { IRegion } from '../../interface/region/IRegion';
import { IRole } from '../../interface/role/IRole';
import { ERole } from '../../enum/role/ERole'
import useAuth from '../hook/useAuth';

const { Option } = Select;

interface IProps {
    form: FormInstance,
    regionList: IRegion[],
    roleList: IRole[],
    isFormRegionDisable: boolean,
    isAddModal: boolean,
    setFormRegionDisable: (isRegionDisable: boolean) => void
}

export default function UserForm(props: IProps) {
    const { form, regionList, roleList, isFormRegionDisable, isAddModal, setFormRegionDisable } = props;
    const [isRegionDisable, setIsRegionDisable] = useState(false);
    const { userInfo } = useAuth();

    useEffect(() => {
        console.log(userInfo)
        setIsRegionDisable(isFormRegionDisable);
    }, [isFormRegionDisable])

    const getRegionOption = useCallback((item: IRegion) => {
        let isDisable = false;
        // 新增
        if (isAddModal) {
            if (userInfo.roleId === ERole.SuperAdmin) {
                isDisable = false;
            }
            else {
                isDisable = item.value !== userInfo.region;
            }
        }
        // 修改
        else {
            if (userInfo.roleId === ERole.SuperAdmin) {
                isDisable = false;
            }
            else {
                isDisable = true;
            }
        }
        return <Option key={item.id} value={item.value} disabled={isDisable}>{item.title}</Option>;
    }, [userInfo, isAddModal])

    const getRoleOption = useCallback((item: IRole) => {
        let isDisable = false;
        // 新增
        if (isAddModal) {
            if (userInfo.roleId === ERole.SuperAdmin) {
                isDisable = false;
            }
            else {
                isDisable = item.id !== ERole.Editor;
            }
        }
        // 修改
        else {
            if (userInfo.roleId === ERole.SuperAdmin) {
                isDisable = false;
            }
            else {
                isDisable = true;
            }
        }
        return <Option key={item.id} value={item.id} disabled={isDisable}>{item.roleName}</Option>;
    }, [userInfo, isAddModal])

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
                        regionList.map((item: IRegion) => getRegionOption(item))
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
                        roleList.map((item: IRole) => getRoleOption(item))
                    }
                </Select>
            </Form.Item>
        </Form>
    )
}
