
function Card({ value }) {
    return (
        <div className="border bg-white p-3">
            <div className="d-flex">
                <div className="me-5 mt-2">
                    {value.icon}
                </div>
                <div className="">
                    <h1>{value.total}</h1>
                    <div>{value.title}</div>
                </div>
            </div>
        </div>
    )
}

export default Card