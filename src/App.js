import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CreatePostPage from "./pages/CreatePostPage";
import Toolbar from "./components/Toolbar";
import PostListPage from "./pages/PostListPage";
import {useState} from "react";

const cities = [
    "Vinlius",
    "Kaunas",
    "Klaipeda",
    "Trakai",
    "Ukmerge",
    "Silute",
    "Panevezys",
    "Utena",
    "Birzai"
]

function App() {

    const [getPage, setPage] = useState("/")
    const [getPost, setPost] = useState([])

    const [getCityFilter, setCityFilter] = useState("")
    const [getTitleFilter, setTitleFilter] = useState("")

    return (
        <div className="App">
            <BrowserRouter>
                <Toolbar getPage={getPage} setPage={setPage}/>
                <Routes>
                    <Route path="/createPost" element={<CreatePostPage getPage={getPage}
                                                                       setPage={setPage}
                                                                       setPost={setPost}
                                                                       getPost={getPost}
                                                                       cities={cities}/>}/>}

                    <Route path="/posts" element={<PostListPage getPost={getPost}
                                                                setPost={setPost}
                                                                setPage={setPage}
                                                                getPage={getPage}
                                                                cities={cities}
                                                                city={{getCityFilter, setCityFilter}}
                                                                titles={{getTitleFilter, setTitleFilter}}
                                                                        />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
