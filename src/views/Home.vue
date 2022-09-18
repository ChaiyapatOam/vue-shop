<template>
  <div>
    <body>
      <header>
        <div class="collapse bg-dark" id="navbarHeader">
          <div class="container">
            <div class="row">
              <div class="col-sm-8 col-md-7 py-4"></div>
              <div class="col-sm-4 offset-md-1 py-4">
                <h4 class="text-white">Contact</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="navbar navbar-dark bg-dark box-shadow">
          <div class="container d-flex justify-content-between">
            <a href="#" class="navbar-brand d-flex align-items-center">
              <strong>Kabigon</strong>
            </a>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader"
              aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </header>

      <main role="main">
        <section class="jumbotron text-center">
          <div class="container">
            <h1 class="jumbotron-heading">Kabigon Shop</h1>
          </div>
        </section>

        <div class="album py-5 bg-light">
          <div class="container">
            <div class="row">
              <div class="col-md-4" v-for="product in products" :key="product._id">
                <div class="card mb-4 box-shadow">
                  <img class="card-img-top" :src="product.image" />
                  <div class="card-body">
                    <h3 class="card-text">{{ product.name }}</h3>
                    <p class="card-text">
                      {{ product.detail }} <br />
                      <span class="text-danger">{{ product.price }} บาท</span>
                    </p>
                    <div class="">
                      <div class="btn-group text-center">
                        <button type="button" class="btn btn-outline-success">
                          Buy now
                        </button>
                        <!-- <button
                          type="button"
                          class="btn  btn-outline-secondary"
                        >
                          Edit
                        </button> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer class="text-muted">
        <div class="container">
          <p class="float-right">
            <a href="#">Back to top</a>
          </p>
          <p>
            Album example is &copy; Bootstrap, but please download and customize
            it for yourself!
          </p>
          <p>
            New to Bootstrap? <a href="../../">Visit the homepage</a> or read
            our <a href="../../getting-started/">getting started guide</a>.
          </p>
        </div>
      </footer>

    </body>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      products: "",
    };
  },
  methods: {
    async getProduct() {
      const response = await axios.get("https://v-shop-backend.herokuapp.com/product");
      console.log(response);
      this.products = response.data;
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
