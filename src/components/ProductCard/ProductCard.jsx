
import { Link } from "react-router-dom";
import React from "react";

function ProductCard(props) {
	//console.log(props);
	let producProps = props.id;
	console.log(props, "productprops");

	return (
		<div class="card">
			<img
				src={props.product.thumbnail}
				class="card-img-top img-fluid"
				alt="..."
			/>
			<div class="card-body">
				<h5 class="card-title">{props.product.title}</h5>
				<p class="card-text">{props.product.description}</p>
				<Link to={`/products/${props.product.id}`} className="btn btn-primary">
					Detail
				</Link>
					<Link to={`/products/delete/${props.product.id}`} className="btn btn-danger">
						sil
					</Link>
			</div>
		</div>
	);
}

export default ProductCard;
