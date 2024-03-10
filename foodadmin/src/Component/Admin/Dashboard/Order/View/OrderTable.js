import { BookUser, ChevronsUpDown, IndianRupee, MapPin, Milk, PackagePlus, PencilRuler } from "lucide-react"

function OrderTable() {
    return (
        <div>
            <table className="table table-hover table-responsive border rounded-lg mt-2">
                <thead className='table-primary'>
                    <tr>
                        <th scope="col">Order ID <ChevronsUpDown size={16} strokeWidth={2} /></th>
                        <th scope="col">Date <ChevronsUpDown size={16} strokeWidth={2} /></th>
                        <th scope="col">Name <ChevronsUpDown size={16} strokeWidth={2} /></th>
                        <th scope="col">Amount <ChevronsUpDown size={16} strokeWidth={2} /></th>
                        <th scope="col">Status <ChevronsUpDown size={16} strokeWidth={2} /></th>
                        <th scope="col">Action <PencilRuler size={16} strokeWidth={2} /></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className='text-muted'>#1212</th>
                        <td>26 March 2024, 12:20 PM</td>
                        <td>Deepak Kumar</td>
                        <td><IndianRupee size={16} color="#48a91e" strokeWidth={1} />123.00</td>
                        <td><span className='badge text-bg-warning'>Pending</span></td>
                        <td><Milk size={18} strokeWidth={2} /> <MapPin size={18} color="#48a91e" strokeWidth={2} />  <BookUser size={18} strokeWidth={2} /></td>
                    </tr>
                    <tr>
                        <th className='text-muted'>#1213</th>
                        <td>26 March 2024, 12:21 PM</td>
                        <td>Cache</td>
                        <td><IndianRupee size={16} color="#48a91e" strokeWidth={1} />123.00</td>
                        <td><span className='badge text-bg-warning'>Pending</span></td>
                        <td><Milk size={18} strokeWidth={2} /> <MapPin size={18} color="#48a91e" strokeWidth={2} />  <BookUser size={18} strokeWidth={2} /></td>
                    </tr>
                    <tr>
                        <th className='text-muted'>#1214</th>
                        <td>26 March 2024, 12:21 PM</td>
                        <td>Ujjwal</td>
                        <td><IndianRupee size={16} color="#48a91e" strokeWidth={1} />123.00</td>
                        <td><span className='badge text-bg-warning'>Pending</span></td>
                        <td><Milk size={18} strokeWidth={2} /> <MapPin size={18} color="#48a91e" strokeWidth={2} />  <BookUser size={18} strokeWidth={2} /></td>
                    </tr>

                    <tr>
                        <th className='text-muted'>#1212</th>
                        <td>26 March 2024, 12:20 PM</td>
                        <td>Deepak Kumar</td>
                        
                        <td><IndianRupee size={16} color="#48a91e" strokeWidth={1} />123.00</td>
                        <td><span className='badge text-bg-warning'>Pending</span></td>
                        <td><Milk size={18} strokeWidth={2} /> <MapPin size={18} color="#48a91e" strokeWidth={2} />  <BookUser size={18} strokeWidth={2} /></td>
                    </tr>
                    <tr>
                        <th className='text-muted'>#1213</th>
                        <td>26 March 2024, 12:21 PM</td>
                        <td>Cache</td>
                        <td><IndianRupee size={16} color="#48a91e" strokeWidth={1} />123.00</td>
                        <td><span className='badge text-bg-warning'>Pending</span></td>
                        <td><Milk size={18} strokeWidth={2} /> <MapPin size={18} color="#48a91e" strokeWidth={2} />  <BookUser size={18} strokeWidth={2} /></td>
                    </tr>
                    <tr>
                        <th className='text-muted'>#1214</th>
                        <td>26 March 2024, 12:21 PM</td>
                        <td>Ujjwal</td>
                        <td><IndianRupee size={16} color="#48a91e" strokeWidth={1} />123.00</td>
                        <td><span className='badge text-bg-warning'>Pending</span></td>
                        <td><Milk size={18} strokeWidth={2} /> <MapPin size={18} color="#48a91e" strokeWidth={2} />  <BookUser size={18} strokeWidth={2} /></td>
                    </tr>

                    <tr>
                        <th className='text-muted'>#1212</th>
                        <td>26 March 2024, 12:20 PM</td>
                        <td>Deepak Kumar</td>
                        <td><IndianRupee size={16} color="#48a91e" strokeWidth={1} />123.00</td>
                        <td><span className='badge text-bg-warning'>Pending</span></td>
                        <td><Milk size={18} strokeWidth={2} /> <MapPin size={18} color="#48a91e" strokeWidth={2} />  <BookUser size={18} strokeWidth={2} /></td>
                    </tr>
                    <tr>
                        <th className='text-muted'>#1213</th>
                        <td>26 March 2024, 12:21 PM</td>
                        <td>Cache</td>
                        <td><IndianRupee size={16} color="#48a91e" strokeWidth={1} />123.00</td>
                        <td><span className='badge text-bg-warning'>Pending</span></td>
                        <td><Milk size={18} strokeWidth={2} /> <MapPin size={18} color="#48a91e" strokeWidth={2} />  <BookUser size={18} strokeWidth={2} /></td>
                    </tr>
                    <tr>
                        <th className='text-muted'>#1214</th>
                        <td>26 March 2024, 12:21 PM</td>
                        <td>Ujjwal</td>
                        <td><IndianRupee size={16} color="#48a91e" strokeWidth={1} />123.00</td>
                        <td><span className='badge text-bg-warning'>Pending</span></td>
                        <td><Milk size={18} strokeWidth={2} /> <MapPin size={18} color="#48a91e" strokeWidth={2} />  <BookUser size={18} strokeWidth={2} /></td>
                    </tr>
                    <tr>
                        <th className='text-muted'>#1214</th>
                        <td>26 March 2024, 12:21 PM</td>
                        <td>Ujjwal</td>
                        <td><IndianRupee size={16} color="#48a91e" strokeWidth={1} />123.00</td>
                        <td><span className='badge text-bg-warning'>Pending</span></td>
                        <td><Milk size={18} strokeWidth={2} /> <MapPin size={18} color="#48a91e" strokeWidth={2} />  <BookUser size={18} strokeWidth={2} /></td>
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