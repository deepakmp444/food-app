import GoogleIcon from "@/icon/GoogleIcon";
import LockIcon from "@/icon/LockIcon";
import { User } from "lucide-react";
import Link from "next/link";

function SignUp() {
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
            <h5>New Account</h5>
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
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <LockIcon />
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="password"
                aria-label="password"
                aria-describedby="password"
              />
            </div>
            <div className="d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Remember
                </label>
              </div>
            </div>
            <div className="d-grid mt-3">
              <button className="btn btn-primary" type="button">
                Create new account
              </button>
              <p className="text-center mt-3">
                <u>OR</u>
              </p>
              <button className="btn btn-light" type="button">
                <span className="me-2">
                  <GoogleIcon />
                </span>
                Continue with Google
              </button>
            </div>
            <div className="text-center mt-3">
              <Link href="/tab?name=shop" className="ms-2">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;