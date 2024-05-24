import Search from "@/component/Search/Search";
import CardImageText from "@/component/CardImageText/CardImageText";

function Page() {
  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div
          className="text-center"
          style={{ fontWeight: "800", fontSize: "50px" }}
        >
          Gullar
        </div>
        <div className="offset-sm-2 col-sm-8 offset-sm-2 mt-3">
          <div>
            <Search />
          </div>
        </div>
        <div
          className="text-center text-muted mt-4"
          style={{ fontWeight: "400", fontSize: "15px" }}
        >
          It is your data, search anything near by you
        </div>
      </div>
      <div
        className="text-center"
        style={{ fontWeight: "800", fontSize: "25px", marginTop: "200px" }}
      >
        Explore our categories
      </div>

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
      <p
        className="text-center"
        style={{ marginTop: "100px", fontWeight: "800", fontSize: "15px" }}
      >
        Gullar.in
      </p>
    </div>
  );
}

export default Page;
