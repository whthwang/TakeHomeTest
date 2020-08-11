import React from 'react';
import { connect } from 'react-redux';

import { FETCH_POSTS, EDIT_POST } from './redux/constants';
import PostEntry from './components/PostEntry'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'all',
      searchValue: '',
      editPost: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.changeView = this.changeView.bind(this);
    this.editPost = this.editPost.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  handleChange(e) {
    this.setState({
      searchValue: e.target.value
    })
  }

  changeView(e) {
    if (e.target.textContent === 'Edit View') {
      this.setState({ view: 'edit', editPost: {} });
    } else if (e.target.textContent === 'Home View') {
      this.setState({ view: 'all' });
    }
    e.preventDefault();
  }

  editPost(e) {
    if (e.target.className === 'title') {
      this.setState({
        editPost: { ...this.state.editPost, title: e.target.value }
      })
    } else if (e.target.className === 'body') {
      this.setState({
        editPost: { ...this.state.editPost, body: e.target.value }
      })
    }
  }

  render() {
    return (
      <div className="component-app">
        <div>
          <form>
            <input placeholder="Enter Title Here" value={this.state.value} onChange={this.handleChange} />
            <button onClick={(e) => {
              e.preventDefault();
              for (let i = 0; i < this.props.allPosts.length; i++) {
                if (this.props.allPosts[i].title === this.state.searchValue) {
                  this.setState({
                    editPost: this.props.allPosts[i]
                  })
                }
              }
            }}>Search</button>
            <button onClick={this.changeView}>Edit View</button>
            <button onClick={this.changeView}>Home View</button>
          </form>
        </div>
        {this.state.view === 'all' ?
          !this.state.searchValue ?
            this.props.allPosts.map((post) => {
              return (
                <div>
                  <PostEntry postDetails={post} />
                  <button onClick={() => this.setState({ view: "edit", editPost: post })}>Edit</button>
                </div>
              )
            })
            :
            this.props.allPosts.map((post) => (
              post.title.includes(this.state.searchValue) ?
                <div>
                  <PostEntry postDetails={post} />
                  <button onClick={() => this.setState({ view: "edit", editPost: post })}>Edit</button>
                </div>
                :
                null
            ))
          : //edit form
          (<div>
            <div>
              <input className="title" placeholder="Title" value={this.state.editPost.title} onChange={this.editPost} />
            </div>
            <div>
              <textarea className="body" value={this.state.editPost.body} onChange={this.editPost} />
            </div>
            <button onClick={() => {
              this.props.editPost(this.state.editPost);
              this.setState({ view: 'all', searchValue: '', editPost: {} });
            }}>Save</button>
          </div>)
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
    allPosts: state.allPosts
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    fetchPosts: () => dispatch({ type: FETCH_POSTS }),
    editPost: (post) => dispatch({ type: EDIT_POST, payload: post })
  }

)

export default connect(mapStateToProps, mapDispatchToProps)(App);