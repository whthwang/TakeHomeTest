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
      </div>
    )
  } else {
    return (
      <div>
        <EditForm title={title} body={body} />
      </div>
    )
  }
}

export default PostEntry