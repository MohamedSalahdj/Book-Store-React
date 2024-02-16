


function MyProgressBar(props){
    const per_width=props.percentage
    return(
    <div className="progress">
    <div className="progress-bar" role="progressbar" style={{width:per_width+"%",background:"yellow"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  )
}

export default MyProgressBar;