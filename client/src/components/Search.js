import React from 'react';
import { connect } from 'redux';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      value: value
    })
  }

  render() {
    return (
      <div>
        <form>
          <span>
            <input placeholder="Enter Title Here" value={this.state.value} onChange={(e) => this.handleChange(e.target.value)} />
            <button>Search</button>
          </span>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

}

export default Search;