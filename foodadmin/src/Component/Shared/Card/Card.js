import Image from "next/image"

function Card() {
    return (
        <div className="card">
            {/* <Image src={"https://picsum.photos/id/1/100/100"} layout="responsive" width={100} height={100} alt=""/> */}
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the  content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Card