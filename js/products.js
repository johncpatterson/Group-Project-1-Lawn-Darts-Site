jQuery(function() {


    getProducts();



    function getProducts() {
        $.ajax({
            url: `https://json-data.herokuapp.com/darts/info`,
            method: 'GET',
            success: function successHandler(Products) {
                console.log(Products);
                    $("#putProductsHere").append(`
                       <div class="row">
                            <div class="col-md-4">
                                   <div class="product-info">${Products.data.product.title}</div>
                                   <div class="product-image"><img src="https://i.kinja-img.com/gawker-media/image/upload/s---ejNL-Rr--/c_fit,fl_progressive,q_80,w_636/18ml0r9bbvce9jpg.jpg"></div>
                                   <div class="product-info">${Products.data.product.description}</div>
                            </div>
                            <div class="col-md-4">
                                   <div class="product-info">${Products.data.product.title}</div>
                                   <div class="product-image"><img src="https://i.kinja-img.com/gawker-media/image/upload/s---ejNL-Rr--/c_fit,fl_progressive,q_80,w_636/18ml0r9bbvce9jpg.jpg"></div>
                                   <div class="product-info">${Products.data.product.description}</div>
                            </div>
                            <div class="col-md-4">
                                   <div class="product-info">${Products.data.product.title}</div>
                                   <div class="product-image"><img src="https://i.kinja-img.com/gawker-media/image/upload/s---ejNL-Rr--/c_fit,fl_progressive,q_80,w_636/18ml0r9bbvce9jpg.jpg"></div>
                                   <div class="product-info">${Products.data.product.description}</div>
                            </div>
                        </div>
                        `);
            },
        });
    }









    // end of jQuery function tag:
});
