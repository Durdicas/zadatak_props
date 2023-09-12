import React from "react"
class ConditionalRendering extends React.Component {
  constructor (props) {
    super(props)
    this.veciBroj = <p>je veci od 5</p>
    this.manjiBroj = <p>je manji od 5</p>
    this.provjera = this.props.number > 5 ? this.veciBroj : this.manjiBroj
  }
 
  render() {
    return (
      <>
        <h1>
          ConditionalRendering {undefined} {this.props.number}
        </h1>
        {this.props.number}
        {this.props.number && this.provjera}
      </>
    )
  }
}
export default ConditionalRendering