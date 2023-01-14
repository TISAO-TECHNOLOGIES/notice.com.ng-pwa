import { CarouselData } from "../../data/carousel";
import OwlItem from "./OwlItem";

const Carousel = () => {
	return (
		<>
			<section className="section carousel-hero">
				<div className="owl-carousel owl-loaded owl-drag">
					<div className="owl-stage-outer">
						<div
							className="owl-stage"
							style={{
								transform: "translate3d(-2698px, 0px, 0px)",
								transition: "all 1s ease 0s",
								width: "9443px",
							}}>
							{/* carousel */}
							{CarouselData.map((owl) => (
								<div key={owl.id} className="owl-item cloned" style={{ width: "1349px" }}>
									<OwlItem
										bgImage={owl.bgImage}
										category={owl.category}
										title={owl.title}
										author={{
											authorImage: owl.author.authorImage,
											authorName: owl.author.authorName,
										}}
										day={owl.day}
										time={owl.time}
									/>
								</div>
							))}
						</div>
					</div>

					{/* carousel nav */}
					<div className="owl-nav">
						<button type="button" role="presentation" className="owl-prev">
							<span aria-label="Previous">‹</span>
						</button>
						<button type="button" role="presentation" className="owl-next">
							<span aria-label="Next">›</span>
						</button>
					</div>
					<div className="owl-dots disabled"></div>
				</div>
			</section>
		</>
	);
};

export default Carousel;
