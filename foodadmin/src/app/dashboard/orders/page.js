"use client"

import OrderTable from "@/Component/Shared/Tables/Table"
import { Export, OrderStatus } from "@/constant/Constant";
import { CalendarDays, Download, FilePenLine, MoveRight, Search } from "lucide-react";
import Link from 'next/link';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from "react";
import { DatePicker, Select, Space, Form, Input, Table } from 'antd';
import { LockOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;
import dayjs from 'dayjs';
const onChange = (date) => {
  if (date) {
    console.log('Date: ', date);
  } else {
    console.log('Clear');
  }
};
const onRangeChange = (dates, dateStrings) => {
  if (dates) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  } else {
    console.log('Clear');
  }
};
const rangePresets = [
  {
    label: 'Last 7 Days',
    value: [dayjs().add(-7, 'd'), dayjs()],
  },
  {
    label: 'Last 14 Days',
    value: [dayjs().add(-14, 'd'), dayjs()],
  },
  {
    label: 'Last 30 Days',
    value: [dayjs().add(-30, 'd'), dayjs()],
  },
  {
    label: 'Last 90 Days',
    value: [dayjs().add(-90, 'd'), dayjs()],
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a>Delete</a>,
  },
];
const data = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Not Expandable',
    age: 29,
    address: 'Jiangsu No. 1 Lake Park',
    description: 'This not expandable',
  },
  {
    key: 4,
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    description: 'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
  },
  
];

function Orders() {
  const [value, onChange] = useState([new Date(), new Date()]);

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className='row mt-4'>
        <div className="col-sm-3">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
          >
            <Form.Item
              name="OrderIDUsername"
            >
              <Input prefix={<SearchOutlined />} placeholder="Order ID, User name" />
            </Form.Item>
          </Form>
        </div>
        <div className='col-sm-9'>
          <div className="row">
            <div className="col-sm-2">
              <Select style={{ width: "100%" }} placeholder="Select export" options={Export} name="export" />
            </div>
            <div className="col-sm-6">
              <Select style={{ width: "100%" }} placeholder="Select status" mode="multiple" options={OrderStatus} />
            </div>
            <div className="col-sm-4">
              <RangePicker presets={rangePresets} onChange={onRangeChange} />
            </div>
          </div>
        </div>
      </div>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <p
              style={{
                margin: 0,
              }}
            >
              {record.description}
            </p>
          ),
          rowExpandable: (record) => record.name !== 'Not Expandable',
        }}
        dataSource={data}
      />
    </div>
  )
}

export default Orders