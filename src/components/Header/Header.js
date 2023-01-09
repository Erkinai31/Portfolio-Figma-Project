import './Header.css'

function Header(){
    return(
        <div className="header_wrapper">
            <div className="menu_wrapper">
                <p>Home</p>
                <p>About me</p>
                <p>Skills</p>
                <p>Portfolio</p>
                <p>Contacts</p>
            </div>
            <div class="hamburger-menu">
					<input id="menu__toggle" type="checkbox" />
					<label class="menu__btn" for="menu__toggle">
					  <span></span>
					</label>
            </div>
        </div>
    )
}

export default Header