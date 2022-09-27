import { useState } from "react"

export const useLocalStorage = (keyName: string, defaultValue?: any) => {
    const [storedValue, setStoredValue] = useState(() => {
        // 給定預設值
        if (defaultValue) defaultValue = {};
        try {
            // 取得指定的localStorage資料
            const value = localStorage.getItem(keyName);
            // 若存在資料：回傳
            if (value) {
                return JSON.parse(value);
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