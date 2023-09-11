import React from 'react';
import  RightSidebar from '../../components/Right Sidebar/RightSidebar'
import MainContent from '../../components/Main Content/MainContent';
import Navigation from '../../components/Navigation/NavigationList/NavigationList'
import './MainLayout.css'

function MainLayout() {
  return (
    <div className="main-layout">
      <Navigation />
      <MainContent />
      <RightSidebar/>
    </div>
  );
}

export default MainLayout;
