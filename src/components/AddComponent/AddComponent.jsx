import React from 'react'

export default function AddComponent() {

    function onFormSubmit(event){
        event.preventDefault();
        let items=event.target.elements.title.value
        console.log(items)
        alert('kayıt başarı ile eklendi')
    }


    return (
<div className='m-5 py-4 my-4'>
      <form onSubmit={onFormSubmit}>
        <h3 className=''>Eklenecek ürün bilgisi</h3>
        <div>
          <label htmlFor="title" className="form-label">
            Ürün Başlıgı
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
          />

        </div>
        <div>
          <label htmlFor="title" className="form-label">
            Ürün Açıklaması
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
          />

        </div>
        <div>
          <label htmlFor="title" className="form-label">
            Ürün Markası
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
          />

        </div>
        <div>
          <label htmlFor="title" className="form-label">
            ürün Fiyatı
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
          />

        </div>

        <button type="submit" className="btn btn-primary">
          Ekle
        </button>
      </form>
    </div>
    )
}
