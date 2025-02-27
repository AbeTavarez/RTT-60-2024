/* eslint-disable react/prop-types */


function Container({children}) {
    const style = {
        width: "90%",
        margin: "auto",
        border: "1px solid green"
      }

    return(
        <div style={style}>
            {children}
        </div>
    )
}

export default Container