import {
    BookUser,
    ChevronsUpDown,
    IndianRupee,
    MapPin,
    Milk,
    PencilRuler,
  } from "lucide-react";
  import Image from "next/image";
  
  function ShopTable() {
    return (
      <div className="table-responsive hidescrollbar" style={{ height: "70vh" }}>
        <table className="table table-hover border mt-2">
          <thead className="sticky-top" style={{backgroundColor:"#E2E7EF"}}>
            <tr>
              <th scope="col">
                Name <ChevronsUpDown size={16} />
              </th>
              <th scope="col">
                Image <ChevronsUpDown size={16} />
              </th>
              <th scope="col">
                Description <ChevronsUpDown size={16} />
              </th>
              <th scope="col">
                Price <ChevronsUpDown size={16} />
              </th>
              <th scope="col">
                Action <PencilRuler size={16} />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pizza</td>
              <td>
                <Image
                  src={"https://picsum.photos/id/237/200/300"}
                  height={50}
                  width={50}
                  alt=""
                />
              </td>
              <td>Cheez and Panner</td>
              <td>
                <IndianRupee size={16} color="#48a91e" />
                123.00 - 200.00
              </td>
              <td>
                <Milk size={16} /> <MapPin size={16} color="#48a91e" />{" "}
                <BookUser size={16} />
              </td>
            </tr>
            <tr>
              <td>Pizza</td>
              <td>
                <Image
                  src={"https://picsum.photos/id/237/200/300"}
                  height={50}
                  width={50}
                  alt=""
                />
              </td>
              <td>Cheez and Panner</td>
              <td>
                <IndianRupee size={16} color="#48a91e" />
                123.00 - 200.00
              </td>
              <td>
                <Milk size={16} /> <MapPin size={16} color="#48a91e" />{" "}
                <BookUser size={16} />
              </td>
            </tr>
  
            <tr>
              <td>Pizza</td>
              <td>
                <Image
                  src={"https://picsum.photos/id/237/200/300"}
                  height={50}
                  width={50}
                  alt=""
                />
              </td>
              <td>Cheez and Panner</td>
              <td>
                <IndianRupee size={16} color="#48a91e" />
                123.00 - 200.00
              </td>
              <td>
                <Milk size={16} /> <MapPin size={16} color="#48a91e" />{" "}
                <BookUser size={16} />
              </td>
            </tr>
  
            <tr>
              <td>Pizza</td>
              <td>
                <Image
                  src={"https://picsum.photos/id/237/200/300"}
                  height={50}
                  width={50}
                  alt=""
                />
              </td>
              <td>Cheez and Panner</td>
              <td>
                <IndianRupee size={16} color="#48a91e" />
                123.00 - 200.00
              </td>
              <td>
                <Milk size={16} /> <MapPin size={16} color="#48a91e" />{" "}
                <BookUser size={16} />
              </td>
            </tr>
  
            <tr>
              <td>Pizza</td>
              <td>
                <Image
                  src={"https://picsum.photos/id/237/200/300"}
                  height={50}
                  width={50}
                  alt=""
                />
              </td>
              <td>Cheez and Panner</td>
              <td>
                <IndianRupee size={16} color="#48a91e" />
                123.00 - 200.00
              </td>
              <td>
                <Milk size={16} /> <MapPin size={16} color="#48a91e" />{" "}
                <BookUser size={16} />
              </td>
            </tr>

    
          </tbody>
        </table>
      </div>
    );
  }
  
  export default ShopTable;
  