var InstallationItem = React.createClass({

  handleClick: function(){
    this.props.addToTourGuide({installation_name: this.props.installation_name, photo_url: this.props.photo_url})
  },

  render: function(){
    return (
      <div className="installation_wrapper">
        <h4>{this.props.installation_name}</h4>
        <img src={this.props.photo_url} className="installation_img"></img>
        <h5>{this.props.installation_description}</h5>
        <p>{this.props.artist_name}</p>
        <p>{this.props.artist_location}</p>
        <p>{this.props.email}</p>
        <a href={this.props.url}> Website </a>
        -
        <a href={this.props.donate_link}> Donate </a>
        <br/>



        <button type="button" className="add_tour_button btn btn-info" onClick={this.handleClick} disabled={!this.props.createdTour} >
          Add To Tour Guide
        </button>


      </div>
      )
  }
})