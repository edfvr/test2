// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Post from './components/Post';
import PopularTags from './components/PopularTags'
import SignInPage from './components/SignInForm';

export default function App(): JSX.Element {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <div className="container page">
              <div className="row">
                <div className="col-md-9">
                  <div className="feed-toggle">
                    <section className="global-feed">
                      <h2>Global Feed</h2>
                      <Post
                        name="John Doe"
                        profilePic="https://randomuser.me/api/portraits/men/1.jpg"
                        date="July 5, 2024"
                        content="This is the first post content. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        likes={15}
                      />
                      <Post
                        name="Jane Smith"
                        profilePic="https://randomuser.me/api/portraits/women/2.jpg"
                        date="July 6, 2024"
                        content="This is the second post content. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
                        likes={20}
                      />
                    </section>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="sidebar">
                    <PopularTags />
                  </div>
                </div>
              </div>
            </div>
          </Route>
          <Route path="/signin">
            <div className="container page">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <SignInPage />
                </div>
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
