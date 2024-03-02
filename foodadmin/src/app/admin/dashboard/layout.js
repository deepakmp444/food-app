import Sidebar from "@/Component/Admin/Dashboard/Sidebar/Sidebar";

export default function DashboardLayout({ children }) {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2 border-end position-fixed bg-white">
          <Sidebar />
        </div>
        <div className="col-sm-10" style={{marginLeft: "230px"}}>
          {children}
        </div>
      </div>
    </div>
  )
}