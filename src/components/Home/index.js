import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LocationList from '../LocationList'
import './index.css'

class Home extends Component {
  state = {locationsLists: [], isLoading: false}

  componentDidMount() {
    this.getLocationList()
  }

  getLocationList = async () => {
    this.setState({isLoading: true})
    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.packages.map(each => ({
        id: each.id,
        name: each.name,
        imageUrl: each.image_url,
        description: each.description,
      }))
      this.setState({locationsLists: updatedData, isLoading: false})
    }
  }

  renderLocationsView = () => {
    const {locationsLists} = this.state

    return (
      <ul className="list">
        {locationsLists.map(eachLocation => (
          <LocationList key={eachLocation.id} locationDetails={eachLocation} />
        ))}
      </ul>
    )
  }

  renderLoadingView = () => (
    <div data-testid="loader" className="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="home-container">
        <div className="app">
          <h1 className="travel-heading">Travel Guide</h1>
          <div className="location-list">
            {isLoading ? this.renderLoadingView() : this.renderLocationsView()}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
