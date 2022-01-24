import React from 'react';
import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

const PostElement = ({setPost, getPost, cities}) => {

    const nav = useNavigate()

    const title = useRef()
    const description = useRef()
    const image = useRef()
    const username = useRef()
    const location = useRef()

    const [getError, setError] = useState(null)

    function submit() {

        if (title.current.value.length < 1 || title.current.value.length > 100) return setError("wrong title")
        if (description.current.value.length < 2 || description.current.value.length > 200) return setError("wrong description")
        if (!image.current.value.includes("http")) return setError("image is wrong")
        if (username.current.value.length < 1 || username.current.value.length > 100) return ("username is wrong")
        if (!cities.includes(location.current.value)) return setError('location is wrong')
        setError(null)

        const post = {
            title: title.current.value,
            description: description.current.value,
            image: image.current.value,
            username: username.current.value,
            location: location.current.value
        }

        setPost([...getPost, post])
        nav("/posts")
    }

    return (
        <div className="d-flex column">
            <input ref={title} type="text" placeholder="title"/>
            <input ref={description} type="text" placeholder="description"/>
            <input ref={image} type="text" placeholder="image"/>
            <input ref={username} type="text" placeholder="username"/>
            <select ref={location}>{cities.map((x, i) => <option key={i} value={x}>{x}</option>)} </select>
            {getError && <div>{getError}</div>}
            <button onClick={submit}>Submit</button>

        </div>
    );
};

export default PostElement;
