import React from 'react';

import {useEffect} from "react";
import PostElement from "../components/PostElement";


const CreatePostPage = ({setPost, getPost, setPage, getPage, cities}) => {

    useEffect(() => {
        setPage("createPost")
    }, [])

    return (
        <div className="d-flex j-center">
            <div className="p">
                <h1>Create Post</h1>
                <PostElement getPage={getPage} setPage={setPage} setPost={setPost} getPost={getPost} cities={cities}/>
            </div>
        </div>
    );
};

export default CreatePostPage;