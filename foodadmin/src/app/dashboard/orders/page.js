"use client"

import OrderTable from "@/Component/Shared/Tables/Table"
import { CalendarDays, FilePenLine, MoveRight } from "lucide-react";
import Link from 'next/link';
import Dropdown from 'react-bootstrap/Dropdown';

function Orders() {
  return (
    <div className="container" style={{marginTop:"100px"}}>
      <div className='d-flex justify-content-between mt-4'>
        <div>
          <h4 className="text-muted">Orders</h4>
        </div>
        <div className='d-flex'>
          <Dropdown className='me-2'>
            <Dropdown.Toggle variant="primary">
              <FilePenLine size={20} strokeWidth={1} absoluteStrokeWidth /><span className='ms-1'>All Status</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Action</Dropdown.Item>
              <Dropdown.Item>Another action</Dropdown.Item>
              <Dropdown.Item>Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="primary">
              <CalendarDays size={20} strokeWidth={1} absoluteStrokeWidth /><span className='ms-1'>Today</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Action</Dropdown.Item>
              <Dropdown.Item>Another action</Dropdown.Item>
              <Dropdown.Item>Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <OrderTable />
    </div>
  )
}

export default Orders