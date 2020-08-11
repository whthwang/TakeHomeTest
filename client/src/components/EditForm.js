import React from 'react';

const EditForm = (props) => {
  const { title, body } = props.post;
  return (
    <div>
      <form>
        <input id="title" placeholder="Title" onChange={props.editPost} />
      </form>
      <textarea id="body" onChange={props.editPost} />
    </div>
  )
}

export default EditForm;