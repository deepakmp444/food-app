import Search from "@/component/Search/Search"
import CardImageText from "@/component/CardImageText/CardImageText"

function Page() {
  return (
    <div className="container-fluid">
      <div className="row p-3 border-bottom border bg-white sticky-top">
        <div className="col">
          <h6 className="text-muted mt-2">Kahalgaon!</h6>
        </div>
        <div className="col d-flex justify-content-end">
          <button className="btn text-primary me-1">Add business</button>
          <button className="btn btn-outline-primary me-1">Log in</button>
          <button className="btn btn-primary">Sign up</button>
        </div>
      </div>
      <div className="row mt-5">
        <div className="text-center" style={{ fontWeight: "800", fontSize: "50px" }}>Gullar</div>
        <div className="offset-sm-2 col-sm-8 offset-sm-2 mt-3">
          <div>
            <Search />
          </div>
        </div>
        <div className="text-center text-muted mt-4" style={{ fontWeight: "400", fontSize: "15px" }}>It is your data, search anything near by you</div>
      </div>
      <div className="text-center" style={{ fontWeight: "800", fontSize: "25px", marginTop: "200px" }}>Explore our categories</div>

      <div className="row">
        <div className="col-sm-2 mt-5">
          <CardImageText />
        </div>
        <div className="col-sm-2 mt-5">
          <CardImageText />
        </div>
        <div className="col-sm-2 mt-5">
          <CardImageText />
        </div>
        <div className="col-sm-2 mt-5">
          <CardImageText />
        </div>
        <div className="col-sm-2 mt-5">
          <CardImageText />
        </div>
        <div className="col-sm-2 mt-5">
          <CardImageText />
        </div>
        <div className="col-sm-2 mt-5">
          <CardImageText />
        </div>
        <div className="col-sm-2 mt-5">
          <CardImageText />
        </div>
      </div>
      <p className="text-center" style={{ marginTop: "100px", fontWeight: "800", fontSize: "15px" }}>Gullar.in</p>
    </div>
  )
}

export default Page