// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latest} = props
  const {date, venue, umpires, result, ct, ctl, fi, si, mom} = latest
  return (
    <div className="lmc">
      <div className="sc">
        <div className="summary">
          <p className="ct">{ct}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img className="ctl" src={ctl} alt={`latest match ${ct}`} />
      </div>
      <div className="lbc">
        <p className="lmh">First Innings</p>
        <p className="lmp">{fi}</p>
        <p className="lmh">Second Innings</p>
        <p className="lmp">{si}</p>
        <p className="lmh">Man of the Match</p>
        <p className="lmp">{mom}</p>
        <p className="lmh">Umpires</p>
        <p className="lmp">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
