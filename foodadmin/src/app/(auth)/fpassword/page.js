import { User } from "lucide-react";
import Link from "next/link";

function page() {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "100px" }}>
        <div className="col-sm-12 col-md-12 col-lg-4 offset-lg-4">
          <div className={`p-4`}>
            <div
              className="text-center mb-4"
              style={{ fontSize: "20px", fontWeight: "600" }}
            >
              Brand Name
            </div>
            <h5>Forgot password</h5>
            <div className="input-group mb-3 mt-3">
              <span className="input-group-text" id="basic-addon1">
                <User />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="email"
                aria-label="email"
                aria-describedby="email"
              />
            </div>

            <div className="d-grid mt-3">
              <button className="btn btn-primary" type="button">
                Submit
              </button>
            </div>
            <div className="text-center mt-3">
              <Link href="/" className="ms-2">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;