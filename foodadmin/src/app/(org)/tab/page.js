"use client";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Header from "../_view/Header";
import ShopTable from "../_view/ShopTable";
import { FileDown, FileUp, ListPlus } from "lucide-react";
import Add from "../_view/Add";

function Shop() {
  const getParams = useSearchParams();
  const router = useRouter();
  const tabName = getParams.get("name");
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [activeTab, setActiveTab] = useState("Shop");

  const handleClose = () => {
    setIsOpenAdd(false);
  };

  return (
    <div className="container-fluid">
      <Header />
      <div className="container">
        <div className="d-flex justify-content-between mt-3">
          <ul className="nav nav-underline">
            <li className="nav-item">
              <a
                className={`nav-link ${tabName === "Shop" ? "active" : ""}`}
                aria-current="page"
                onClick={() => router.push("/tab?name=Shop")}
              >
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  tabName === "Organization" ? "active" : ""
                }`}
                onClick={() => router.push("/tab?name=Organization")}
              >
                Organization
              </a>
            </li>
          </ul>
          <div>
            <button className="btn btn-light" type="button" id="button-addon2">
              <FileUp color="#0d6efd" />
            </button>

            <button className="btn btn-light" type="button" id="button-addon2">
              <FileDown color="#0d6efd" />
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
        <div className="mt-3">
          <ShopTable />
        </div>
      </div>
      {isOpenAdd && <Add show={isOpenAdd} handleClose={handleClose} title={tabName}/>}
    </div>
  );
}

export default Shop;
