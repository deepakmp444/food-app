"use client"

import OrderTable from "@/Component/Shared/Tables/Table"
import { Export, OrderStatus } from "@/constant/Constant";
import { CalendarDays, Download, FilePenLine, MoveRight, Search, SearchCheck } from "lucide-react";
import Link from 'next/link';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from "react";


function Orders() {

  return (
    <div className="container" style={{ marginTop: "80px" }}>
      <div className='row'>
        <div className="col-sm-3">
          <div className="input-group mb-2">
            <input type="text" className="form-control" placeholder="Order ID, User name" aria-label="orderid" aria-describedby="orderid" />
            <button className="btn btn-outline-primary" type="button" id="button-addon2"><Search /></button>
          </div>
        </div>
        <div className='col-sm-9'>
          <div className="row">
            <div className="col-sm-2">
            </div>
            <div className="col-sm-6">
            </div>
            <div className="col-sm-4">
            </div>
          </div>
        </div>
      </div>
      <OrderTable />
    </div>
  )
}

export default Orders