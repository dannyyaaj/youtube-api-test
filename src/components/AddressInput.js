import React, { Component } from 'react'

class AddressInput extends Component {
  state = {
    address: '',
    city: '',
    stateOfResidence: '',
    zipCode: ''
  }

  onInputChangeFor = propertyName => (event) => {
    this.setState({ [propertyName]: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    let userAddress = `${this.state.address} ${this.state.city}, ${this.state.stateOfResidence} ${this.state.zipCode}`;

    console.log(userAddress);
    this.props.onFormSubmit(userAddress);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Street Address</label>
            <input
              type="text"
              value={this.state.address}
              onChange={this.onInputChangeFor('address')}
            />
          </div>
          <div className="three fields">
            <div className="field">
              <label>City</label>
              <input
                type="text"
                value={this.state.city}
                onChange={this.onInputChangeFor('city')}
              />
            </div>
            <div className="field">
              <label>State</label>
              <select
                className="ui fluid dropdown"
                onChange={this.onInputChangeFor('stateOfResidence')}
                value={this.state.stateOfResidence}
              >
                <option value="">State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
            <div className="field">
              <label>Zip Code</label>
              <input
                type="number"
                value={this.state.zipCode}
                onChange={this.onInputChangeFor('zipCode')}
              />
            </div>
          </div>
          <button>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default AddressInput;
