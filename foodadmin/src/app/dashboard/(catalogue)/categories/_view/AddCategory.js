import { LockIcon, Save, User } from "lucide-react";
import { Offcanvas } from "react-bootstrap";

function AddCategory({ show, handleClose }) {
  return (
    <div className="offcanvas-container">
      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add Category</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Choose Image
            </label>
            <input
              type="file"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Choose image"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter description"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Pirce
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter price"
            />
          </div>


          <div
            className="position-fixed bottom-0 end-0 p-3"
            style={{ marginBottom: "10px" }}
          >
            <button
              className="btn btn-outline-danger"
              type="button"
              id="button-addon2"
              onClick={handleClose}
            >
              Close
            </button>
            <button
              className="btn btn-success ms-3"
              type="button"
              id="button-addon2"
              onClick={handleClose}
            >
              Save
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default AddCategory;
