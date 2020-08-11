import React from 'react';
import EditForm from './EditForm';

const PostEntry = (props) => {
  const { id, title, body } = props.postDetails;
  let edit = false;
  if (!edit) {
    return (
      <div>
        <h3 className="title">{id}. {title}</h3>
        <p className="body">
          {body}
        </p>
        {/* <button onClick={() => edit = true}>Edit</button> */}
      </div>
    )
  } else {
    return (
      <div>
        <EditForm title={title} body={body} />
        {/* <button>Save</button> */}
      </div>
    )
  }
}

export default PostEntry