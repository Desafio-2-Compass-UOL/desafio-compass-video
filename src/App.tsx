import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import MyListPage from "./pages/MyListPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import Footer from "./components/Foolter/Foolter";
import MoviesPage from "./pages/MoviesPage";
import TvShowsPage from "./pages/TvShowsCatalogPage";

import LoginPage from "./pages/LoginPage";
import ActorPage from "./pages/ActorPage";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="home"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="moviepage"
            element={
              <>
                <Header />
                <MoviesPage />
                <Footer />{" "}
              </>
            }
          />
          <Route
            path="series"
            element={
              <>
                <Header />
                <TvShowsPage />
                <Footer />{" "}
              </>
            }
          />
          <Route path='celebrities'
            element={
              <>
              <Header />
                <ActorPage />
              <Footer /> </>
            }/>
          <Route
            path="searchresultspage"
            element={
              <>
                <Header />
                <SearchResultsPage />
                <Footer />
              </>
            }
          />
          <Route
            path="mylistpage"
            element={
              <>
                <Header />
                <MyListPage />
                <Footer />
              </>
            }
          />
          {/* <Route
            path="collectionpage"
            element={
              <>
                <Header />
                <HalloweenCollectionPage />
                <Footer />
              </>
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
