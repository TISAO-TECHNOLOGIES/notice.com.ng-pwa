import Carousel from "../components/home/Carousel";
import GridLayout from "../components/home/GridLayout";
import React, { useState, useEffect } from 'react';
import {CarouselData} from "../data/carousel";
// import ScriptResource from "../hooks/scriptResource";

const HomeScreen = () => {
	// ScriptResource("/src/assets/js/owl.carousel.min.js");
	// ScriptResource("/src/assets/js/main.js");

	const [data, setData] = useState(CarouselData);

	useEffect(() => {
		const fetchData = async () => {
			try {
				console.log(data);
				const headers = new Headers();
				headers.set('Authorization', 'Basic c3RhZ2luZzpzdGFnaW5nQDBwYXNz');
				const response = await fetch('http://tisaoserver.question.ng:2345/post?page=0&size=20',{
					method: 'GET', // Or 'POST' if it's a POST request
					headers: headers
				});
				const result = await response.json();
				const addPrefixToFields = (arr: any, prefix: string) => {
					return arr.map((item: any) => {
						item.slug = `${prefix}${item.slug}`;
						item.thumbImg = `${prefix}${item.thumbImg}`;
						return item;
					});
				};

				const updatedData = addPrefixToFields(data, "https://example.com/");
				if(typeof result._embedded.post =="object") console.log(result._embedded.post);
				setData(result._embedded.post);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchData();
	}, []);

	return (
		<>
			<Carousel data={data} setData={setData} />
			{/* ads top */}
			<div className="ads-top">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="ads-block">
								<a href="./#">
									<img src="/assets/others/ads1.jpg" alt="" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<GridLayout />
		</>
	);
};

export default HomeScreen;
