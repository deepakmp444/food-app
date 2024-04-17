import { BookUser, ChevronsUpDown, IndianRupee, MapPin, Milk, PackagePlus, PencilRuler } from "lucide-react"

function OrderTable() {
    return (
        <div className="table-responsive">
            <table className="table table-hover border mt-2">
                <thead className='table-secondary'>
                    <tr>
                        <th scope="col">Order ID <ChevronsUpDown size={16} /></th>
                        <th scope="col">Date <ChevronsUpDown size={16} /></th>
                        <th scope="col">Name <ChevronsUpDown size={16} /></th>
                        <th scope="col">Amount <ChevronsUpDown size={16} /></th>
                        <th scope="col">Status <ChevronsUpDown size={16} /></th>
                        <th scope="col">Action <PencilRuler size={16} /></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='text-muted'>#1212</td>
                        <td>26 March 2024, 12:20 PM</td>
                        <td>Deepak Kumar</td>
                        <td><IndianRupee size={16} color="#48a91e" />123.00</td>
                        <td><span className='badge text-bg-warning'>Pending</span></td>
                        <td><Milk size={16} /> <MapPin size={16} color="#48a91e" />  <BookUser size={16} /></td>
                    </tr>
                    <tr>
                        <td className='text-muted'>#1213</td>
                        <td>26 March 2024, 12:21 PM</td>
                        <td>Cache</td>
                        <td><IndianRupee size={16} color="#48a91e" />123.00</td>
                        <td><span className='badge text-bg-warning'>Pending</span></td>
                        <td><Milk size={16} /> <MapPin size={16} color="#48a91e" />  <BookUser size={16} /></td>
                    </tr>
                    <tr>
                        <td className='text-muted'>#1214</td>
                        <td>26 March 2024, 12:21 PM</td>
                        <td>Ujjwal</td>
                        <td><IndianRupee size={16} color="#48a91e" />123.00</td>
                        <td><span className='badge text-bg-warning'>Pending</span></td>
                        <td><Milk size={16} /> <MapPin size={16} color="#48a91e" />  <BookUser size={16} /></td>
                    </tr>

                    <tr>
                        <td className='text-muted'>#1212</td>
                        <td>26 March 2024, 12:20 PM</td>
                        <td>Deepak Kumar</td>

                        <td><IndianRupee size={16} color="#48a91e" />123.00</td>
                        <td><span className='badge text-bg-warning'>Pending</span></td>
                        <td><Milk size={16} /> <MapPin size={16} color="#48a91e" />  <BookUser size={16} /></td>
                    </tr>
                    <tr>
                        <th className='text-muted'>#1213</th>
                        <td>26 March 2024, 12:21 PM</td>
                        <td>Cache</td>
                        <td><IndianRupee size={16} color="#48a91e" />123.00</td>
                        <td><span className='badge text-bg-warning'>Pending</span></td>
                        <td><Milk size={16} /> <MapPin size={16} color="#48a91e" />  <BookUser size={16} /></td>
                    </tr>
                    <tr>
                        <td className='text-muted'>#1214</td>
                        <td>26 March 2024, 12:21 PM</td>
                        <td>Ujjwal</td>
                        <td><IndianRupee size={16} color="#48a91e" />123.00</td>
                        <td><span className='badge text-bg-warning'>Pending</span></td>
                        <td><Milk size={16} /> <MapPin size={16} color="#48a91e" />  <BookUser size={16} /></td>
                    </tr>

                    <tr>
                        <td className='text-muted'>#1212</td>
                        <td>26 March 2024, 12:20 PM</td>
                        <td>Deepak Kumar</td>
                        <td><IndianRupee size={16} color="#48a91e" />123.00</td>
                        <td><span className='badge text-bg-warning'>Pending</span></td>
                        <td><Milk size={16} /> <MapPin size={16} color="#48a91e" />  <BookUser size={16} /></td>
                    </tr>
                    <tr>
                        <th className='text-muted'>#1213</th>
                        <td>26 March 2024, 12:21 PM</td>
                        <td>Cache</td>
                        <td><IndianRupee size={16} color="#48a91e" />123.00</td>
                        <td><span className='badge text-bg-warning'>Pending</span></td>
                        <td><Milk size={16} /> <MapPin size={16} color="#48a91e" />  <BookUser size={16} /></td>
                    </tr>
                    <tr>
                        <td className='text-muted'>#1214</td>
                        <td>26 March 2024, 12:21 PM</td>
                        <td>Ujjwal</td>
                        <td><IndianRupee size={16} color="#48a91e" />123.00</td>
                        <td><span className='badge text-bg-warning'>Pending</span></td>
                        <td><Milk size={16} /> <MapPin size={16} color="#48a91e" />  <BookUser size={16} /></td>
                    </tr>
                    <tr>
                        <td className='text-dark'>#1214</td>
                        <td>26 March 2024, 12:21 PM</td>
                        <td>Ujjwal</td>
                        <td><IndianRupee size={16} color="#48a91e" />123.00</td>
                        <td><span className='badge text-bg-warning'>Pending</span></td>
                        <td><Milk size={16} /> <MapPin size={16} color="#48a91e" />  <BookUser size={16} /></td>
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
    )
}

export default OrderTable