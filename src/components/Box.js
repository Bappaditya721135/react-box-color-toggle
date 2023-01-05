// import '../App.css';


export default function Box(props) {
    const style = {
        backgroundColor: props.on ? "black" : "white",
        color: props.on ? "white" : "black"
    }
    
    return (
        <div className="box" onClick={() => props.toggle(props.id)} style={style}>{props.content}</div>
    );
}