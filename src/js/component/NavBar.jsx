import React from "react";

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-secondary bg-gradient">
			<div className="container-fluid">
				<a
					className="navbar-brand d-flex flex-row-reverse bd-highlight"
					href="#">
					Navbar
				</a>

				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Service
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
