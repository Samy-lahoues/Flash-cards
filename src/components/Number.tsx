interface numberProps {
    value: number,
    className : string
}
const Number = ({value, className} : numberProps) => {
    return (
        <div className={className} >
            <p>{value}</p>
        </div>
        );
}
export default Number;