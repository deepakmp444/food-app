import Sidebar from "@/Component/Admin/Dashboard/Sidebar/Sidebar";

export default function DashboardLayout({ children }) {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2 border-end">
          <Sidebar />
        </div>
        <div className="col-sm-10">
          {children}
        </div>
      </div>
    </div>
  )
}