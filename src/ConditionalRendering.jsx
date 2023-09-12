
/*function ConditionalRendering(props) {
    //console.log(props)
    //const number = props.number;
    return (
        <>
        <h1>Ovo je vježba s propsima</h1>
        <h2>Danas je prekrasan dan. </h2>
        <h3>Kad će taj {props.number}. dan u tjednu, petak</h3>
        
    

        /*{!isNan(props.number) && (props.number>5) ? "Broj je manji od 7" : "Broj je jednak ili manji od 5"}*/


        /*{
            props.number === undefined ? (<p>Nedefiniran broj. Ništa se ne ispisuje.</p>) : props.number > 5 ? (<p>Broj je veći od 5.</p>) : (<p>Broj je manji ili jednak 5.</p>)
        }
    
      </>
    )
    }

    export default ConditionalRendering();
    */

const ConditionalRendering = (props) => {
  const veciBroj = <p>je veci od 5</p>
  const manjiBroj = <p>je manji od 5</p>
  const provjera = props.number > 5 ? veciBroj : manjiBroj
  return (
    <>
      <h1>
        ConditionalRendering {undefined} {props.number}
      </h1>
      {props.number}
      {props.number && provjera}
    </>
  )
}
export default ConditionalRendering