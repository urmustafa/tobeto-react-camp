import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProductsproductsDelete() {
    const { id } = useParams();
    const [productsDelete, setproductsDelete] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        axiosproductsDelete();
    }, []);

    const axiosproductsDelete = async () => {
        let response = await axios.delete(`https://dummyjson.com/products/${id}`);
        setproductsDelete(response.data);

        setTimeout(() => { // ürün silindikten sonra ürünler ekranına geri yönlediriyoruz..
            navigate('/products');
        }, 4000);
    };

    return (
        <div>
            {productsDelete ? (
                <>
                    <div className="d-flex align-items-center justify-content-center vh-80">
                        <div className="mt-5 card mb-3 mx-auto" style={{ maxWidth: "540px" }}>
                            <h2 className="text-danger">Ürün Silindi..</h2>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img
                                        src={productsDelete.thumbnail}
                                        className="img-fluid rounded-start"
                                        alt="Sample Image"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{productsDelete.title}</h5>
                                        <p className="card-text">
                                            {productsDelete.description}
                                        </p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">
                                                <span className="text-primary">Ürünler sayfasına yönlendiriliyorsunuz lütfen bekleyiniz</span>
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div>Bekleyiniz...</div>
                </>
            )}
        </div>
    );
}
