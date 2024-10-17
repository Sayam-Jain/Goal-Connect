import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Home/Hero.js";
import MatchCenter from "./components/Home/MatchCenter.js";
import ClubDashboard from "./components/Clubs/ClubDashboard.js";
import ClubsMenu from './components/Clubs/ClubsMenu.js';
import Crowdfunding from "./components/Crowdfunding.js";
import Digitalfootballacademy from "./components/Digitalfootballacademy.js";
import RegistrationPage from "./components/registration.js";
import News from "./components/News.js";
import ProductList from './components/e-commerce/product-list.js';
import JobApplicationForm from './components/JobApplicationForm.js';
import SignUp from './components/SignUp/index.js';
import Login from './components/Login/index.js';
import MatchSummaryPage from "./components/Matches/MatchSummary.js";
import PostNews from "./components/Clubs/PostNews.js";
import CreateCampaign from "./components/Clubs/CreateCampaign.js";
import ClubPage from "./components/Clubs/ClubPage.js";
import Tournament from "./components/SearchTournament/Tournament.js";
import SponsorDashboard from "./SponsorDashboard.js";
import Sessions from "./components/Sessions.js";
import PlayerProfile from "./components/Player-Profile/profile.js"; 
import JobListingForm from "./components/Clubs/JobListingForm.js";
import PlayerDashboard from "./components/Clubs/PlayerDashboard.js"; // Ensure this is imported correctly
import ProtectedRoute from './components/ProtectedRoute.js'; 
import JobListings from './components/Clubs/JobListings.js'; // Make sure this import is correct

const App = () => {
  const matchCenterRef = useRef(null);

  const scrollToMatchCenter = () => {
    if (matchCenterRef.current) {
      matchCenterRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  let isLoggedIn = true;

  return (
    <>
      <Navbar scrollToMatchCenter={scrollToMatchCenter} loggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={
          <div>
            <Hero scrollToMatchCenter={scrollToMatchCenter} loggedIn={isLoggedIn} />
            <div ref={matchCenterRef}>
              <MatchCenter />
            </div>
          </div>
        } />
        <Route path="/club-dashboard" element={
          <ProtectedRoute loggedIn={isLoggedIn}>
            <ClubDashboard />
          </ProtectedRoute>
        } />
        <Route path="/crowdfunding" element={
          <ProtectedRoute loggedIn={isLoggedIn}>
            <Crowdfunding />
          </ProtectedRoute>
        } />
        <Route path="/digitalfootballacademy" element={
          <ProtectedRoute loggedIn={isLoggedIn}>
            <Digitalfootballacademy />
          </ProtectedRoute>
        } />
        <Route path="/registration" element={
          <ProtectedRoute loggedIn={isLoggedIn}>
            <RegistrationPage />
          </ProtectedRoute>
        } />
        <Route path="/news" element={<News />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/job-listings" element={<JobListings />} /> {/* Moved here */}
        <Route path="/apply" element={
          <ProtectedRoute loggedIn={isLoggedIn}>
            <JobApplicationForm />
          </ProtectedRoute>
        } />
        <Route path="/shop" element={
          <ProtectedRoute loggedIn={isLoggedIn}>
            <ProductList />
          </ProtectedRoute>
        } />
        <Route path="/clubs" element={<ClubsMenu />} />
        <Route path="/clubs/:clubName" element={<ClubPage />} />
        <Route path="/match-summary" element={<MatchSummaryPage />} />
        <Route path="/post-news" element={
          <ProtectedRoute loggedIn={isLoggedIn}>
            <PostNews />
          </ProtectedRoute>
        } />
        <Route path="/create-campaign" element={
          <ProtectedRoute loggedIn={isLoggedIn}>
            <CreateCampaign />
          </ProtectedRoute>
        } />
        <Route path="/player-dashboard" element={
          <ProtectedRoute loggedIn={isLoggedIn}>
            <PlayerDashboard />
          </ProtectedRoute>
        } />
        <Route path="/tournaments" element={
          <ProtectedRoute loggedIn={isLoggedIn}>
            <Tournament />
          </ProtectedRoute>
        } />
        <Route path="/sponsor-dashboard" element={
          <ProtectedRoute loggedIn={isLoggedIn}>
            <SponsorDashboard />
          </ProtectedRoute>
        } />
        <Route path="/sessions" element={
          <ProtectedRoute loggedIn={isLoggedIn}>
            <Sessions />
          </ProtectedRoute>
        } />
        <Route path="/player/:playerName" element={<PlayerProfile />} />
        <Route path="/form" element={
          <ProtectedRoute loggedIn={isLoggedIn}>
            <JobListingForm />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  );
};

export default App;
