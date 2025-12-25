// Write your code here
import './index.css'

const MatchCard = props => {
  const {match} = props
  const {ms, ct, ctl, result} = match
  return (
    <li className="lic">
      <img className="rml" src={ctl} alt={`competing team ${ct}`} />
      <p className="rmco">{ct}</p>
      <p className="status">{result}</p>
      <p className={ms}>{ms}</p>
    </li>
  )
}

export default MatchCard
