import DisplayData from './DisplayData';

function Graph(props){
    let zip = props.zip;
    return(
        <div>
            <DisplayData zip={zip}/>
        </div>
    )

}

export default Graph;