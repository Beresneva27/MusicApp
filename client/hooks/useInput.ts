import React, {useState} from "react";

export const useInput = () => {
    const [value, setValue] = useState()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(value)
    }

    return {
        value, onChange
    }
}