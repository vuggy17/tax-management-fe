import { Select } from 'antd'
import React from 'react'

const createSelectOptions = (categories) => {
    return categories.map((category) => ({ value: category.id, label: category.name }))
}


export default function CategorySelect({ options, currentCategory, placeholder, onChange }) {
    return (
        <Select
            size='large'
            showSearch
            style={{ width: 300 }}
            placeholder={placeholder}
            optionFilterProp="children"
            filterOption={(input, option) => (option?.label.toLowerCase() ?? '').includes(input)}
            filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            onChange={onChange}
            options={[{ value: -1, label: 'All' }, ...createSelectOptions(options)]}
        />
    )
}
