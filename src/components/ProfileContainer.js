import React, {useState} from "react";
import Nav from "./Header";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Footer from "./pages/Footer";

export default function ProfileContainer() {
    const [currentPage, setCurrentPage] = useState("AboutMe");

    const renderPage = () => {
    if (currentPage === "AboutMe") {
        return <AboutMe />;
    }
    if (currentPage === "Contact") {
        return <Contact />;
    }
    if (currentPage === "Portfolio") {
        return <Portfolio />;
    }
    if (currentPage === "Resume") {
        return <Resume />;
    }
    }
    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <div>

            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}

            <Footer />
        </div>
        
    );
}
