function Myevent(){
    const eventHandle=(event:React.MouseEvent<HTMLButtonElement>) =>{
        console.log("success")
    };
    return (
        <div style={{margin:"20px"}}>
            <p>Mouse event handling</p>
    <button onClick={eventHandle}>Click</button>
    <hr />
    </div>
    

    );
}
export default Myevent;