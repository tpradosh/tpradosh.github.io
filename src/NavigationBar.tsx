import { useEffect, useState } from 'react';



function NavigationBar(){


    /*
        Nav bar with top, expier, projs, contacts etc

        appears when not at the top of the page
    */
    const [show, setShow] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const currentY = window.scrollY;
        setShow(currentY > 200); // show earlier on mobile
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); 


    return (
        <div className = {`fixed top-0 w-full z-50 transition-transform duration 300 bg-green text-black shadow-md ${
            show ? 'translate-y-0' : 'md:-translate-y-full'}`}>
            
            
            <div className = "px-4 py-3 flex items-center justify-between w-full">
                <div className = "text-xl font-bold">Pradosh T</div>
                
                {/* Desktop Navigation */}
                <nav className = "hidden md:flex space-x-4 font-bold">
                    <a href = "#Home" className = "hover-box_black">Home</a>
                    <a href = "#Experience" className = "hover-box_black">Experience</a>
                    <a href = "#Projects" className = "hover-box_black">Projects</a>
                    <a href = "#Contact" className = "hover-box_black">Contact</a>
                </nav>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden p-2 rounded hover:bg-black/10 transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-green border-t border-black/20 w-full">
                    <nav className="flex flex-col space-y-2 p-4">
                        <a href="#Home" className="hover-box_black py-2" onClick={() => setMobileMenuOpen(false)}>Home</a>
                        <a href="#Experience" className="hover-box_black py-2" onClick={() => setMobileMenuOpen(false)}>Experience</a>
                        <a href="#Projects" className="hover-box_black py-2" onClick={() => setMobileMenuOpen(false)}>Projects</a>
                        <a href="#Contact" className="hover-box_black py-2" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                    </nav>
                </div>
            )}
        </div>
    );
}

export default NavigationBar