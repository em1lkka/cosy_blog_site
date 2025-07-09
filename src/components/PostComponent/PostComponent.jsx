import React from "react";
import './PostComponent.css'


function PostComponent({username, title, post_desc, img, pic_desc, categories}) {

    const categoryList = categories?.map((category) =>
        <a className="category-item">{category}</a>
    );

    return(
        <fieldset className="post-container">
            <legend>
                <a href="#profile">@{username}</a>
            </legend>
            
            <div className="post-content">
                {img ? <img src={img} alt={pic_desc}/> : null}
                <div className="description-container">
                    <h3 className="post-title">{title}</h3>
                    <p className="desc-title">Description</p>
                    <p className="post-description">{post_desc}</p>
                </div>
                
            </div>
            <div className="post-categories">
                <p className="categ-title">Categories</p>
                <div className="category-list">{categoryList}</div>
            </div>
        </fieldset>
    );
}

export default PostComponent