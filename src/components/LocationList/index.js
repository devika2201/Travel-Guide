import './index.css'

const LocationList = props => {
  const {locationDetails} = props
  const {imageUrl, name, description} = locationDetails

  return (
    <li className="list-item">
      <img src={imageUrl} alt={name} className="image-size" />
      <h1 className="heading">{name}</h1>
      <p className="para">{description}</p>
    </li>
  )
}

export default LocationList
