function Student(props){
    return(
        <div>
            <h1>Welcome to Fullstack Development - I</h1>
            <h2>React JS Programming Week09 Lab exercise</h2>
            <h3>{props.stdId}</h3>
            <h4>{props.stdName}</h4>
            <h5>{props.college}</h5>
        </div>
    )
}

export default Student