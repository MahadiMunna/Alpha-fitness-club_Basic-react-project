import React from 'react';
import './Post.css'

const Post = (props) => {
    const {name,img,age,time} = props.post;
    return (
        <div className='post'>
            <img src={img} alt="" />
            <div className='post-info'>
                <h3 className='tool-name'>{name}</h3>
                <p><b>For Age :</b> up to {age}</p>
                <p><b>Time Required :</b> {time}s</p>
            </div>
            <button className='btn-add'>Add to list</button>
        </div>
    );
};

export default Post;