import Navbar from "@/Component/Admin/Navbar/Navbar";

export default function AdminLayout({ children }) {

  return (
    <section>
      <Navbar />
      {children}
    </section>
  )
}