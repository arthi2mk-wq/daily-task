function B(){
    const Myage=23;
    if(Myage>=18){
        return(
            <div style={{margin:"20px"}}>
                <hr />
                <p>find eligible for voting</p>
                <h1>"eligible for vote"</h1>
                <hr />
            </div>
        )
         
    }else{
        return <h1>"not eligible for vote"</h1>
    }
}export default B;