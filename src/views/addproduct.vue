<template>
    <div>
        <div class="jumbotron">
            <div class="row">
                <div class="col-sm-8 offset-sm-2">
                    <div>
                        <h2 class="text-center text-bg-primary">เพิ่มสินค้า</h2>
                        <form @submit.prevent="handleAddProduct">
                            <div class="form-group">
                                <label for="store">เพิ่มสินค้า</label>
                                <input type="text" placeholder="ชื่อสินค้า" class="form-control"
                                    v-model="product.name" />
                            </div>

                            <div class="form-group">
                                <label for="address">ราคา</label>
                                <input type="text" placeholder="ราคา" class="form-control" v-model="product.price" />
                            </div>

                            <div class="form-group">
                                <label for="">Image</label>
                                <input type="file" class="form-control" @change="onFileSelected" />
                            </div>
                            <button class="btn btn-primary m-1" @click="handleAddProduct"> 
                                เพิ่ม
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    components: {},
    data() {
        return {
            product: {
                name: null,
                detail: null,
                image: null,
                price: null,
            },
        };
    },
    methods: {
        onFileSelected(e) {
            this.product.image = e.target.files[0];
            console.log(e.target.files[0]);
        },
        async handleAddProduct() {
            {
                const product = new FormData();

                product.append("name", this.product.name);
                product.append("detail", this.product.detail);
                product.append("imageUpload", this.product.image);
                product.append("price", this.product.price);
                await axios.post("https://v-shop-backend.herokuapp.com/product", product)
            }
        },
    },
};
</script>
