<template>
    <div>
        <div class="jumbotron">
            <div class="row">
                <div class="col-sm-8 offset-sm-2">
                    <div>
                        <h2 class="text-center text-bg-primary">เพิ่มสินค้า</h2>

                        <div class="form-group">
                            <label for="store">เพิ่มสินค้า</label>
                            <input type="text" placeholder="ชื่อสินค้า" class="form-control" v-model="product.name" />
                        </div>

                        <div class="form-group">
                            <label for="address">ราคา</label>
                            <input type="text" placeholder="ราคา" class="form-control" v-model="product.price" />
                        </div>
                        <div class="form-group">
                            <label for="address">รายละเอียด</label>
                            <input type="text" placeholder="รายละเอียด" class="form-control" v-model="product.detail" />
                        </div>

                        <div class="form-group">
                            <label for="">Image Link</label>
                            <input type="text" placeholder="link" class="form-control" v-model="product.image" />

                        </div>
                        <!-- Button -->
                        <button class="btn btn-primary m-1" @click="handleAddProduct">
                            เพิ่ม
                        </button>

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
        async handleAddProduct() {
            {
                const body = {
                    name: this.product.name,
                    price: this.product.price,
                    image: this.product.image,
                    detail: this.product.detail,
                }

                const res = await axios.post("https://v-shop-backend.herokuapp.com/product", body)
                console.log(res);
                this.$router.push("/")  // เปลี่ยนหน้า
            }
        },
    },
};
</script>
