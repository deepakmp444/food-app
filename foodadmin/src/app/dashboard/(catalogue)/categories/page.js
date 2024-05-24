"use client";
import { Download, FileDown, FileUp, Import, ListPlus, Search } from "lucide-react";
import CategoryTable from "./_view/CategoryTable";
import AddCategory from "./_view/AddCategory";
import { useState } from "react";

function Category() {
  const [isOpenAdd, setIsOpenAdd] = useState(false);

  const handleClose = () => {
    setIsOpenAdd(false);
  };
  return (
    <div className="container mb-5 p-3">
      <div className="d-flex justify-content-between mt-3">
        <div>
          <div className="input-group mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Search Category..."
              aria-label="orderid"
              aria-describedby="orderid"
            />
            <button
              className="btn btn-outline-primary"
              type="button"
              id="button-addon2"
            >
              <Search />
            </button>
          </div>
        </div>
        <div>
          <button className="btn btn-light" type="button" id="button-addon2">
          <FileUp color="#0d6efd"/>
          </button>

          <button className="btn btn-light" type="button" id="button-addon2">
          <FileDown color="#0d6efd"/>
          </button>
          <button
            className="btn btn-light"
            type="button"
            id="button-addon2"
            onClick={() => setIsOpenAdd(!isOpenAdd)}
          >
            <ListPlus color="#0d6efd" />
          </button>
        </div>
      </div>
      <div>
        <CategoryTable />
        <div className="d-flex justify-content-between mt-3">
          <div>
            <select className="form-select" aria-label="Default select example">
              <option value="Shopname1">10</option>
              <option value="1">20</option>
              <option value="2">30</option>
              <option value="3">40</option>
            </select>
          </div>

          <div>
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

      {isOpenAdd ? (
        <AddCategory show={isOpenAdd} handleClose={handleClose} />
      ) : null}
    </div>
  );
}

export default Category;
