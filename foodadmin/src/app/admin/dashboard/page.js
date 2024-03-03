"use client"
import dynamic from 'next/dynamic';
import Card from "@/Component/Admin/Dashboard/Card.Dashboard/Card.Dashboard"
import ChartsDashboard from "@/Component/Admin/Dashboard/Chart.Dashboard/Charts.Dashboard";
import { CalendarDays, FilePenLine, LayoutList, MonitorCheck, MoveRight, Package, XCircle } from "lucide-react"
import Dropdown from 'react-bootstrap/Dropdown';
import Link from 'next/link';
import LineDashboard from '@/Component/Admin/Dashboard/Line.Dashboard/Line.Dashboard';

const DynamicLineChartsDashboard = dynamic(() => import('@/Component/Admin/Dashboard/Line.Dashboard/Line.Dashboard'), {
    ssr: false,
});
const DynamicPieChartsDashboard = dynamic(() => import('@/Component/Admin/Dashboard/Pie.Dashboard/Pie.Dashboard'), {
    ssr: false,
});


const dashboardHead = [
    {
        id: 1,
        icon: <LayoutList color="#0d6efd" size={60} strokeWidth={3} absoluteStrokeWidth />,
        title: "Total Order",
        total: 755
    },
    {
        id: 2,
        icon: <Package color="orange" size={60} strokeWidth={3} absoluteStrokeWidth />,
        title: "Total Delivery",
        total: 75
    },
    {
        id: 3,
        icon: <XCircle color="red" size={60} strokeWidth={3} absoluteStrokeWidth />,
        title: "Total Cancel",
        total: 755
    },
    {
        id: 4,
        icon: <MonitorCheck color="green" size={60} strokeWidth={3} absoluteStrokeWidth />,
        title: "Total Revenue",
        total: 755
    },
]

function Page() {
    return (
        <div className="container mb-5">
            <div className="row">
                <h5 className="mt-4 mb-4">Dashboard</h5>
                {dashboardHead.map((value) => {
                    return (
                        <div key={value.id} className="col-sm-3">
                            <Card value={value} />
                        </div>
                    )
                })}
            </div>

            <div className='row mt-5'>
                <div className='col-sm-6'>
                    <div className='bg-white rounded border p-3'>
                        <div className='d-flex justify-content-between mt-3'>
                            <div>
                                <Link href={"/admin/dashboard/analytics"} className='icon-link icon-link-hover mt-2'>Recent of Orders <MoveRight size={20} strokeWidth={1} absoluteStrokeWidth /></Link>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle variant="light">
                                    <CalendarDays size={20} strokeWidth={1} absoluteStrokeWidth /><span className='ms-1'>Today</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Action</Dropdown.Item>
                                    <Dropdown.Item>Another action</Dropdown.Item>
                                    <Dropdown.Item>Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <DynamicPieChartsDashboard />
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div className='bg-white rounded border p-3'>
                        <div className='d-flex justify-content-between mt-3'>
                            <div>
                                <Link href={"/admin/dashboard/analytics"} className='icon-link icon-link-hover mt-2'>Recent of Orders <MoveRight size={20} strokeWidth={1} absoluteStrokeWidth /></Link>
                            </div>
                            <div className='d-flex'>
                                <Dropdown className='me-2'>
                                    <Dropdown.Toggle variant="light">
                                        <FilePenLine size={20} strokeWidth={1} absoluteStrokeWidth /><span className='ms-1'>All Status</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>Action</Dropdown.Item>
                                        <Dropdown.Item>Another action</Dropdown.Item>
                                        <Dropdown.Item>Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown>
                                    <Dropdown.Toggle variant="light">
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

                        <table className="table table-hover table-responsive border mt-2">
                            <thead className='table-light'>
                                <tr>
                                    <th scope="col">Order ID</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className='text-primary'>#1212</th>
                                    <td>26 March 2024, 12:20 PM</td>
                                    <td>Deepak Kumar</td>
                                    <td><span className='badge text-bg-warning'>Pending</span></td>
                                </tr>
                                <tr>
                                    <th className='text-primary'>#1213</th>
                                    <td>26 March 2024, 12:21 PM</td>
                                    <td>Cache</td>
                                    <td><span className='badge text-bg-success'>Completed</span></td>
                                </tr>
                                <tr>
                                    <th className='text-primary'>#1214</th>
                                    <td>26 March 2024, 12:21 PM</td>
                                    <td>Ujjwal</td>
                                    <td><span className='badge text-bg-danger'>Cancel</span></td>
                                </tr>

                                <tr>
                                    <th className='text-primary'>#1212</th>
                                    <td>26 March 2024, 12:20 PM</td>
                                    <td>Deepak Kumar</td>
                                    <td><span className='badge text-bg-warning'>Pending</span></td>
                                </tr>
                                <tr>
                                    <th className='text-primary'>#1213</th>
                                    <td>26 March 2024, 12:21 PM</td>
                                    <td>Cache</td>
                                    <td><span className='badge text-bg-success'>Completed</span></td>
                                </tr>
                                <tr>
                                    <th className='text-primary'>#1214</th>
                                    <td>26 March 2024, 12:21 PM</td>
                                    <td>Ujjwal</td>
                                    <td><span className='badge text-bg-danger'>Cancel</span></td>
                                </tr>

                                <tr>
                                    <th className='text-primary'>#1212</th>
                                    <td>26 March 2024, 12:20 PM</td>
                                    <td>Deepak Kumar</td>
                                    <td><span className='badge text-bg-warning'>Pending</span></td>
                                </tr>
                                <tr>
                                    <th className='text-primary'>#1213</th>
                                    <td>26 March 2024, 12:21 PM</td>
                                    <td>Cache</td>
                                    <td><span className='badge text-bg-success'>Completed</span></td>
                                </tr>
                                <tr>
                                    <th className='text-primary'>#1214</th>
                                    <td>26 March 2024, 12:21 PM</td>
                                    <td>Ujjwal</td>
                                    <td><span className='badge text-bg-danger'>Cancel</span></td>
                                </tr>
                                <tr>
                                    <th className='text-primary'>#1214</th>
                                    <td>26 March 2024, 12:21 PM</td>
                                    <td>Ujjwal</td>
                                    <td><span className='badge text-bg-danger'>Cancel</span></td>
                                </tr>
                            </tbody>
                        </table>

                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-end">
                                <li className="page-item disabled">
                                    <a className="page-link">Previous</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-sm-8'>
                    <div className='bg-white border rounded'>
                        <div className='p-3'>
                            <p className='d-flex justify-content-end'><span className='text-dark-emphasis'>2023</span><span className='ms-1 text-primary'>2024</span></p>
                            <DynamicLineChartsDashboard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page