function Student(){
    const fees=true
    return(
        <div style={{margin:"20px"}}>
            <hr />
        <h2>Exam Portal</h2>
        {fees && <button>Download Hall Ticket</button>}
        {!fees && <button>can't get the hall ticket</button>}
        </div>
    )
}export default Student;