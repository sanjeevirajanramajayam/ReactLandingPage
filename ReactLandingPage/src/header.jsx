function Header() {
    return (
        <>
            <section class="header">
                <nav>
                    <a href="index.html" class="logo">Royal Travels</a>
                    <div class="nav-links" id="navLinks">
                        <i class="fa fa-times" onclick="hideMenu()"></i>
                        <ul>
                            <li><a href="index.html">HOME</a></li>
                            <li><a href="about.html">ABOUT</a></li>
                            <li><a href="">BOOK VACATION</a></li>
                            <li><a href="">DREAM VACATIONS</a></li>
                            <li><a href="">CONTACT</a></li>
                        </ul>
                    </div>
                    <i class="fa fa-bars" onclick="showMenu()"></i>
                </nav>

                <div class="text-box">
                    <h1>World's Biggest Travel Site</h1>
                    <p>"Discover the world like never before with our handpicked destinations, tailored to satisfy every type of traveler. Whether you're seeking a tropical escape, a cultural adventure, or a scenic retreat, our travel guides offer insider tips, must-see landmarks, and local experiences to help you explore with ease."</p>
                    <a class="hero-btn" href="">Click To Know More!</a>
                </div>
            </section>
        </>
    )
}

export default Header