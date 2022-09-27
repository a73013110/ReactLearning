import { Dispatch, SetStateAction, useState } from "react"

type SetValue<T> = Dispatch<SetStateAction<T>>

/**
 * 從localStorage導入狀態
 * @param keyName localStorage key
 * @param defaultValue 預設值
 * @returns [getvalue: T, setValue(value: T)]
 */
export function useLocalStorage<T>(keyName: string, defaultValue?: any): [T, SetValue<T>] {
    const [storedValue, setStoredValue] = useState(() => {
        // 給定預設值
        if (defaultValue === undefined) defaultValue = {};
        try {
            // 取得指定的localStorage資料
            const value = localStorage.getItem(keyName);
            // 若存在資料：回傳
            if (value) {
                return JSON.parse(value) as T;
            }
            // 若不存在資料：設定預設資料並回傳
            else {
                localStorage.setItem(keyName, JSON.stringify(defaultValue));
                return defaultValue;
            }
        } catch (exception) {
            return defaultValue;
        }
    });

    // 設定資料方法
    const setValue = (newValue: any) => {
        try {
            localStorage.setItem(keyName, JSON.stringify(newValue));
        } catch (exception) {
            setStoredValue(newValue);
        }
    }

    return [storedValue, setValue];
}