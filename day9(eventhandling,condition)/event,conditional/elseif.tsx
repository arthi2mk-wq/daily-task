function Grade(){
    const mark=90;
    
    if(mark>=80){
        
        return (
        <div style={{padding:"50px"}}>
            <p>Find the grade of the student</p>
            <h1  className="grade-a">Grade A</h1>
            <hr /></div>

        )
    }
    else if(mark>=60){
        return(
            <div>
                <p>Find the grade of the student</p>
                <h1 className="grade-b">Grade B</h1>
                </div>)
    }
            
        
        
    else if(mark>=50){
        return (<div>
            <p>Find the grade of the student</p>
            <h1 className="grade-c">Grade C</h1></div>
        )
    }
    
    else{
        return <h1 className="fail">Fail</h1>
    }
}export default Grade;