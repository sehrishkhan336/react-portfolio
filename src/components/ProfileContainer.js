import React, { useState } from 'react';
import { CssBaseline, Container } from '@mui/material';
import Header from './Header';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Footer from './pages/Footer';

export default function ProfileContainer() {
  const [currentPage, setCurrentPage] = useState('About Me');

  const renderPage = () => {
    if (currentPage === 'About Me') {
      return <AboutMe />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  const renderPageKey = currentPage;

  const handlePageChange = (page) => {
    console.log('handlePageChange', page);
    setCurrentPage(page);
  };

  return (
    <div>
      <CssBaseline />
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <Container sx={{ marginTop: 3, marginBottom: 3 }} key={`${currentPage}-${renderPageKey}`}>
        {renderPage()}
      </Container>
      <Footer />
    </div>
  );
}
