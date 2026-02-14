import { Fragment } from 'react';
import './App.css';
import {
  HashRouter,
  NavLink,
  Routes,
  Route,
  Outlet,
  useNavigate,
  useParams,
} from 'react-router-dom';

const Todo = () => {
  return <Fragment>
    <p>這是 Todo 頁面</p>
    <LogOut />
  </Fragment>
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};
const Home = () => {
  return <p>這是首頁</p>;
}

const Post = () => {
  const navigate = useNavigate(); 
  return (
    <div>
      <h3>Post 頁面
             <button type='button' onClick={() => navigate("/post/123")}>
          前往 Post ID: 123 詳細頁面
        </button>{" "}  
      </h3>
      <Outlet />
    </div>
  ); 
}

const PostId = () => {
  const { postId } = useParams();
  return <p>Post ID: {postId}</p>;
};

const LogOut = () => {
  const navigate = useNavigate();
  return <button onClick={() => { navigate('/login') }}>登出</button>
}

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to='/post'>
            <p>Post 頁面</p>
          </NavLink>
          {/* <NavLink to="/post/post123">
          <p>Post 詳細頁面</p>
          </NavLink>           */}
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
          <Route path="/post" element={<Post />}>
            <Route path=':postId' element={<PostId />} />
          </Route>
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
