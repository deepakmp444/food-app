import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "@/component/Search/Search";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gullar",
  description: "Search...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}  bg-light`}>
        <div className="container-fluid">
          <div className="row p-2 border-bottom border bg-white sticky-top">
            <div className="col">
              <h6 className="text-muted mt-3">Kahalgaon!</h6>
            </div>
            <div className="col"> 
            {/* <Search /> */}
            </div>
            <div className="col d-flex justify-content-end">
              <button className="btn text-primary me-1">Add business</button>
              <button className="btn btn-outline-primary me-1">Log in</button>
              <button className="btn btn-primary">Sign up</button>
            </div>
          </div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
