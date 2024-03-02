"use client"
import { LogOut, Settings } from 'lucide-react';
import Dropdown from 'react-bootstrap/Dropdown';

function Navbar() {
    return (
        <div className="p-3 sticky-top bg-white border-bottom d-flex justify-content-between">
            <div>
                Shop Name 1
            </div>
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Deepak
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item><Settings size={20} strokeWidth={1} absoluteStrokeWidth /> Setting</Dropdown.Item>
                        <Dropdown.Item><LogOut size={20} strokeWidth={1} absoluteStrokeWidth /> Log out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

        </div>
    )
}

export default Navbar