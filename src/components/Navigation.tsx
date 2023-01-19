import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { linkData, socialLinks } from "../data/nav";

const Navigation = () => {
	useEffect(() => {
		/* -----------------------------------
           dark-mode
    ----------------------------------- */
		const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]') as HTMLInputElement;
		const logoDark = document.querySelector(".logo-dark") as HTMLImageElement;
		const logoWhite = document.querySelector(".logo-white") as HTMLImageElement;
		const currentTheme: any = localStorage.getItem("theme");

		if (currentTheme) {
			document.documentElement.setAttribute("data-theme", currentTheme);

			if (currentTheme === "dark") {
				toggleSwitch.checked = true;
				document.body.classList.toggle("dark");
				logoDark.classList.add("display-none");
				logoWhite.classList.add("display-block");
			}
		}

		function switchTheme(e: any) {
			if (e.target.checked) {
				document.documentElement.setAttribute("data-theme", "dark");
				localStorage.setItem("theme", "dark");
				document.body.classList.add("dark");
				logoDark.classList.add("display-none");
				logoWhite.classList.add("display-block");
			} else {
				document.documentElement.setAttribute("data-theme", "light");
				localStorage.setItem("theme", "light");
				document.body.classList.remove("dark");
				logoDark.classList.remove("display-none");
				logoWhite.classList.remove("display-block");
			}
		}

		toggleSwitch.addEventListener("change", switchTheme, false);
	}, []);

	return (
		<>
			<nav className="navbar navbar-expand-lg fixed-top navbar-scroll">
				<div className="container-fluid">
					{/* LOGO*/}
					<div className="logo">
						<NavLink to="/">
							<img src="/src/assets/img/logo-dark.png" alt="" className="logo-dark" />
							<img src="/src/assets/img/logo-white.png" alt="" className="logo-white" />
						</NavLink>
					</div>

					{/* NAVBAR-COLLAPSE */}
					<div className="collapse navbar-collapse" id="main_nav">
						<ul className="navbar-nav ml-auto mr-auto">
							{linkData.map(({ id, path, linkTag }) => (
								<li key={id} className="nav-item">
									<NavLink className={"nav-link"} to={path}>
										{linkTag}
									</NavLink>
								</li>
							))}
						</ul>
					</div>

					{/* NAVBAR RIGHT */}
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
								{socialLinks.map(({ socialName, iconTag, path }) => (
									<li key={socialName}>
										<NavLink to={path}>
											<i className={iconTag} />
										</NavLink>
									</li>
								))}
							</ul>
						</div>
						{/* SEARCH ICON */}
						<div className="search-icon">
							<i className="icon_search"></i>
						</div>

						{/* LOGIN BLOCK */}
						<div className="login-block">
							<span className="login-icon">
								<i className="icon_profile"></i>
							</span>
							<ul className="login-menu fade-up">
								<li>
									<NavLink to="login">login</NavLink>
								</li>
								<li>
									<NavLink to="signup">sign up</NavLink>
								</li>
							</ul>
						</div>

						{/* NAVBAR TOGGLER */}
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
