


function PublishButtonComponent(props)
{

    return(
        <div className={`${props.display}`}>
            <button className={`btn  ${props.btnClass}`} onClick={props.clickFunc} disabled={props.disable}>{props.title}</button>
        </div>
    )
}
export default PublishButtonComponent