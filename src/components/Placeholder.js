function HorizontalPlaceholder({width=1}){
    width=String(width)+'px'
    return (<div style={{ opacity: 0, width: width}}></div>)
}
function VerticalPlaceholder({height=3}){
    height=String(height)+'em'
    return(<div style={{ opacity: 0, height: height }}></div>)
}

export {HorizontalPlaceholder,VerticalPlaceholder}

