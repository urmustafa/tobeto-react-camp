import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductDetail.css';
import axios from 'axios';


export default function ProductsDetail() {

    const { id } = useParams(); //bu hook ile id üzerinden hangi ürün oldugunu tespit ediyoruz
    const [productDetail, setProductDetail] = useState(null);

    useEffect(() => {
        getProductByName();
        console.log(id)
    }, [id]);

    //geleen id tespit edildikten sonra o id ye ait veri tabanına istek atıyoruz

    const getProductByName = async () => {
        try {
            let response = await axios.get(`https://dummyjson.com/products/${id}`);
            setProductDetail(response.data);
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    };


    return (
        <div>
            <div className="container bootdey">
                {productDetail ? (<div className="col-md-12">
                    <section className="panel">
                        <div className="panel-body">
                            <div className="col-md-6">
                                <div className="pro-img-details">
                                    <img src={productDetail.thumbnail} alt="" />
                                </div>
                                <div className="pro-img-list">
                                    <a href="#/">
                                        <img src="https://www.bootdey.com/image/115x100/87CEFA/000000" alt="" />
                                    </a>
                                    <a href="#/">
                                        <img src="https://www.bootdey.com/image/115x100/FF7F50/000000" alt="" />
                                    </a>
                                    <a href="#/">
                                        <img src="https://www.bootdey.com/image/115x100/20B2AA/000000" alt="" />
                                    </a>
                                    <a href="#/">
                                        <img src="https://www.bootdey.com/image/120x100/20B2AA/000000" alt="" />
                                    </a>
                                    <a href="#/">
                                        <img src="https://www.bootdey.com/image/120x100/20B2AA/000000" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h4 className="pro-d-title">
                                    <a href="#/" className="">
                                        {productDetail.title}
                                    </a>
                                </h4>
                                <p>
                                    {productDetail.description}
                                </p>
                                <div className="product_meta">
                                    <span className="posted_in"> <strong>Categories:</strong> {productDetail.category}.</span>
                                    <span className="tagged_as"><strong>Brand:</strong> {productDetail.brand}.</span>
                                </div>
                                <div className="m-bot15"> <strong>Price : </strong> <span className="amount-old">$<span>{productDetail.price + 100}</span> </span>  <span className="pro-price"> $<span>{productDetail.price}</span></span></div>
                                <div className="form-group">
                                    <label>Quantity</label>
                                    <input type="quantiy" placeholder="1" className="form-control quantity" />
                                </div>
                                <p>
                                    <button className="btn btn-round btn-danger" type="button"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
                                </p>
                            </div>
                        </div>
                    </section>
                </div>) : (<div>Bekleyiniz...</div>)}
                
            </div>
        </div>
    )
}
