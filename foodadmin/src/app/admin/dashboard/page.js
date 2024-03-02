"use client"
import dynamic from 'next/dynamic';
import Card from "@/Component/Admin/Dashboard/Card.Dashboard/Card.Dashboard"
import ChartsDashboard from "@/Component/Admin/Dashboard/Chart.Dashboard/Charts.Dashboard";
import { CalendarDays, FilePenLine, LayoutList, MonitorCheck, MoveRight, Package, XCircle } from "lucide-react"
import Dropdown from 'react-bootstrap/Dropdown';
import Link from 'next/link';

const DynamicChartsDashboard = dynamic(() => import('@/Component/Admin/Dashboard/Chart.Dashboard/Charts.Dashboard'), {
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
                    <h1>Charts</h1>
                </div>
                <div className='col-sm-6 bg-white rounded border'>
                    <div className='d-flex justify-content-between mt-3'>
                        <div>
                            <Link href={"/admin/dashboard/analytics"} className='icon-link icon-link-hover mt-2'>List of Orders <MoveRight size={20} strokeWidth={1} absoluteStrokeWidth /></Link>
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

                    <table className="table table-hover table-responsive mt-2">
                        <thead className='table-light'>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
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
    )
}

export default Page