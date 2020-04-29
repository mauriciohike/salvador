import React from 'react'
import { Table as DMTable } from 'antd'

const rowSelection = {
  onChange: (selectedRowKeys: any, selectedRows: any) => {
    // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
  },
  getCheckboxProps: (record: any) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
}

const columns = [
  {
    title: 'Column 1',
    dataIndex: 'name',
  },
  {
    title: 'Column 2',
    dataIndex: 'age',
  },
  {
    title: 'Column 3',
    dataIndex: 'other',
  },
  {
    title: 'Column 4',
    dataIndex: 'example',
  },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
  },
]

function Table() {
  return <DMTable rowSelection={rowSelection} columns={columns} dataSource={data} />
}

export default Table
