// Write your code here
// Write your code here
import './index.css'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'

import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  state = {loading: true, matches: {}}

  componentDidMount() {
    this.getmatches()
  }

  formatdata = di => ({
    id: di.id,
    umpires: di.umpires,
    result: di.result,
    mom: di.man_of_the_match,
    date: di.date,
    venue: di.venue,
    ct: di.competing_team,
    ctl: di.competing_team_logo,
    fi: di.first_innings,
    si: di.second_innings,
    ms: di.match_status,
  })

  getmatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/ipl/${id}`
    const response = await fetch(url)
    const mi = await response.json()
    const fd = {
      tbu: mi.team_banner_url,
      lmd: this.formatdata(mi.latest_match_details),
      rmd: mi.recent_matches.map(di => this.formatdata(di)),
    }
    this.setState({loading: false, matches: fd})
  }

  renderMatches = () => {
    const {matches} = this.state
    const {tbu, lmd, rmd} = matches
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div className={`tc ${id}`}>
        <img className="tbi" src={tbu} alt="team banner" />
        <p className="lm">Latest Matches</p>
        <LatestMatch latest={lmd} />
        <ul className="mul">
          {rmd.map(mi => (
            <MatchCard key={mi.id} match={mi} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {loading} = this.state
    return loading ? (
      <div>
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      this.renderMatches()
    )
  }
}

export default TeamMatches
