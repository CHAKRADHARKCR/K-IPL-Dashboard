// Write your code here
import './index.css'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {loading: true, teams: []}

  componentDidMount() {
    this.getteams()
  }

  getteams = async () => {
    const url = 'https://apis.ccbp.in/ipl'
    const response = await fetch(url)
    const data = await response.json()
    const {teams} = data
    const fd = teams.map(team => ({
      name: team.name,
      id: team.id,
      imgUrl: team.team_image_url,
    }))
    this.setState({loading: false, teams: fd})
  }

  renderTeams = () => {
    const {teams} = this.state
    return (
      <div className="rc">
        <div className="ipd">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="mh">IPL Dashboard</h1>
        </div>
        <ul className="ul">
          {teams.map(team => (
            <TeamCard key={team.id} team={team} />
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
      this.renderTeams()
    )
  }
}

export default Home
