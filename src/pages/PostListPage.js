import React from 'react';
import {useEffect, useRef} from "react";

const PostListPage = ({getPost, setPage, setPost, cities, city, titles}) => {

    const select = useRef()
    const input = useRef()

    useEffect(() => {
        setPage("posts")
    }, [])

    function removePost(post, index) {
        const result = getPost.filter((x, i) => i !== index)
        setPost(result)
    }

    function filter() {
        city.setCityFilter(select.current.value)
        titles.setTitleFilter(input.current.value)
        console.log("filtruoja")
    }

    const filtered = getPost.filter(x => {
        if (city.getCityFilter === "" && titles.getTitleFilter === "") {
            return x
        }
        if (city.getCityFilter.length > 0 && titles.getTitleFilter === "") {
            return x.location === city.getCityFilter
        }
        if (city.getCityFilter === "" && titles.getTitleFilter.length > 0) {
            return x.title.includes(titles.getTitleFilter)
        }
        if (city.getCityFilter.length > 0 && titles.getTitleFilter.length > 0) {
            return x.location === city.getCityFilter && x.title.includes(titles.getTitleFilter)
        }
    })


    return (
        <div>
            <div className='d-flex j-center'>
                <select ref={select}>
                    <option value="">All cities</option>
                    {cities.map((x, i) => <option key={i} value={x}>{x}</option>)}
                </select>
                <input ref={input} type="text" placeholder="title"/>
                <button onClick={filter}>Search</button>

            </div>
            <div className="d-flex">
                {filtered.map((x, i) =>
                    <div className="card" key={i}>
                        <h3>{x.title}</h3>
                        <p>{x.description}</p>
                        <img src={x.image} alt=""/>
                        <h3>{x.username}</h3>
                        <h3>{x.location}</h3>
                        <button onClick={() => removePost(x, i)}>Delete</button>
                    </div>)}
            </div>
        </div>

    );
};

export default PostListPage;

