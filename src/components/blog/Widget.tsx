import React from "react";

interface IProps {
	children: JSX.Element;
	title: string;
}

const Widget = ({ children, title }: IProps) => {
	return (
		<div className="widget">
			<div className="section-title">
				<h5>{title}</h5>
			</div>
			{children}
		</div>
	);
};

export default Widget;
