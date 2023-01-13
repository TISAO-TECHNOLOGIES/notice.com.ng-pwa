import React, { useEffect } from "react";

const Navigation = () => {
	useEffect(() => {
		 /* -----------------------------------
           dark-mode
    ----------------------------------- */
    const toggleSwitch: any = document.querySelector('.theme-switch input[type="checkbox"]');
    const logoDark: any = document.querySelector('.logo-dark');
    const logoWhite: any = document.querySelector('.logo-white');
    const currentTheme: any = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
            document.body.classList.toggle("dark");
            logoDark.classList.add('display-none');
            logoWhite.classList.add('display-block'); 
        }
    }

    function switchTheme(e: any) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            document.body.classList.add('dark');
            logoDark.classList.add('display-none');
            logoWhite.classList.add('display-block');  
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            document.body.classList.remove('dark');
            logoDark.classList.remove('display-none');
            logoWhite.classList.remove('display-block');
        }
    }

    toggleSwitch.addEventListener('change', switchTheme, false);
	}, [])
	
	return (
		<>
			<nav className="navbar navbar-expand-lg fixed-top navbar-scroll">
				<div className="container-fluid">
					{/* <!--logo--> */}
					<div className="logo">
						<a href="./index.html">
							<img src="./assets/img/logo-dark.png" alt="" className="logo-dark" />
							<img src="./assets/img/logo-white.png" alt="" className="logo-white" />
						</a>
					</div>
					{/* <!--/--> */}

					{/* <!--navbar-collapse--> */}
					<div className="collapse navbar-collapse" id="main_nav">
						<ul className="navbar-nav ml-auto mr-auto">
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle active" href="./index.html" data-toggle="dropdown">
									{" "}
									Home{" "}
								</a>
								<ul className="dropdown-menu fade-up">
									<li>
										<a className="dropdown-item active" href="./index.html">
											Demo 1
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="./index-2.html">
											Demo 2{" "}
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="./index-3.html">
											Demo 3{" "}
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="./index-4.html">
											Demo 4{" "}
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="./index-5.html">
											Demo 5
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="./index-6.html">
											Demo 6{" "}
										</a>
									</li>
								</ul>
							</li>

							<li className="nav-item dropdown">
								<a className="nav-link  dropdown-toggle" href="./blog-grid.html" data-toggle="dropdown">
									{" "}
									Blog{" "}
								</a>
								<ul className="dropdown-menu fade-up">
									<li>
										<a className="dropdown-item" href="./blog-grid.html">
											{" "}
											Blog grid
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="./blog-masonry.html">
											{" "}
											Blog masonry{" "}
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="./blog-list.html">
											{" "}
											Blog list{" "}
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link  dropdown-toggle" href="./post-default.html" data-toggle="dropdown">
									{" "}
									Posts Features{" "}
								</a>
								<ul className="dropdown-menu fade-up">
									<li>
										<a className="dropdown-item" href="./post-default.html">
											{" "}
											post default
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="./post-video.html">
											{" "}
											post video
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="./post-audio.html">
											{" "}
											post audio
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="./post-gallery.html">
											{" "}
											post gallery
										</a>{" "}
									</li>
									<li>
										<a className="dropdown-item" href="./post-no-sidebar.html">
											{" "}
											post no sidebar{" "}
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="./post-left-sidebar.html">
											{" "}
											post left sidebar{" "}
										</a>
									</li>
								</ul>
							</li>

							<li className="nav-item dropdown">
								<a className="nav-link  dropdown-toggle" href="./#" data-toggle="dropdown">
									Pages{" "}
								</a>
								<ul className="dropdown-menu fade-up">
									<li>
										<a className="dropdown-item" href="./author.html">
											{" "}
											author{" "}
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="./page404.html">
											{" "}
											Page 404{" "}
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="./contact.html">
									{" "}
									Contact{" "}
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="./about.html">
									{" "}
									About{" "}
								</a>
							</li>
						</ul>
					</div>
					{/* <!--/--> */}

					{/* <!--navbar-right--> */}
					<div className="navbar-right ml-auto">
						<div className="theme-switch-wrapper">
							<label className="theme-switch" htmlFor="checkbox">
								<input type="checkbox" id="checkbox" />
								<div className="slider round"></div>
							</label>
						</div>
						{/* <!--social-media--> */}
						<div className="social-icones">
							<ul className="list-inline">
								<li>
									<a href="./#">
										{" "}
										<i className="fab fa-facebook-f"></i>
									</a>
								</li>
								<li>
									<a href="./#">
										<i className="fab fa-instagram"></i>
									</a>{" "}
								</li>
								<li>
									<a href="./#">
										<i className="fab fa-twitter"></i>
									</a>
								</li>
								<li>
									<a href="./#">
										<i className="fab fa-youtube"></i>
									</a>
								</li>
							</ul>
						</div>
						{/* <!--search-icon--> */}
						<div className="search-icon">
							<i className="icon_search"></i>
						</div>

						{/* <!--login-block--> */}
						<div className="login-block">
							<a className="login-icon" href="./#">
								<i className="icon_profile"></i>
							</a>
							<ul className="login-menu fade-up">
								<li>
									{" "}
									<a href="./login.html">login </a>{" "}
								</li>
								<li>
									{" "}
									<a href="./signup.html">sign up</a>{" "}
								</li>
							</ul>
						</div>

						{/* <!--navbar-toggler--> */}
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#main_nav"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navigation;
