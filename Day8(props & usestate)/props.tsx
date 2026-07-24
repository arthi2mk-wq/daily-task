function Person(props:any){
    return(
        <div>
            <h2>1kg of {props.product}  is {props.amount}Rupees </h2>

        </div>
    )
}
function Details(){
    return(
        <div>
            <Person product="Rice" amount="125" />
            <Person product="Ural Dhal" age="223" />
            <Person product="Tomato" age="80" />
        
          < Student name="Alice" Age={18} mark={98}/>
           < Student name="John" Age={18} mark={96}/>





        </div>
    )
}
export default Details;
function Student(props:any){
    return(
        <div>
        <h1>Students</h1>
        <h2>Name:{props.name} <br /> Age:{props.age} <br />Mark:{props.mark} <hr /></h2>
        </div>
    )

}
