import React from "react";

interface IProps {
	children: JSX.Element;
	title: string;
	className?: string;
}

const Widget = ({ children, title, className }: IProps) => {
	return (
		<div className={`widget ${className}`}>
			<div className="section-title">
				<h5>{title}</h5>
			</div>
			{children}
		</div>
	);
};

export default Widget;
