import React from "react";

const SearchForm = () => {
	return (
		<>
			<div className="search">
				<div className="container-fluid">
					<div className="search-width  text-center">
						<button type="button" className="close">
							<i className="icon_close"></i>
						</button>
						<form className="search-form" action="./#">
							<input type="search" value="" placeholder="What are you looking for?" />
							<button type="submit" className="search-btn">
								search
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default SearchForm;
