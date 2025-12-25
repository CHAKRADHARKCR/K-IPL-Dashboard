// Write your code here
import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {team} = props
  const {name, id, imgUrl} = team

  return (
    <Link to={`/team-matches/${id}`} className="link">
      <li className="li">
        <img className="tb" src={imgUrl} alt={name} />
        <p className="mp">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
