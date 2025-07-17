interface Props{
    fullName:string,
    email:string,
    message:string
}

const Display = (props:Props)=>{
    return(
        <>
            <div className="display">
                <h1>Submitted Data</h1>
                <p>Full Name: {props.fullName}</p>
                <p>Email:{props.email}</p>
                <p>Message:{props.message}</p>
            </div>
        </>
    )
}

export default Display;