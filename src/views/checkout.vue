<template>
    <div class="row">
        <div class="col-12">
            <div class="form-group m-2">
                <label for="">Name</label>
                <input type="text" class="form-control" v-model="order.name" />

            </div>

            <div class="form-group m-2">
                <label for="">Phone</label>
                <input type="text" class="form-control" v-model="order.phone" />

            </div>

            <div class="form-group m-2">
                <label for="">Address</label>
                <input type="text" class="form-control" v-model="order.address" />

            </div>
        </div>
        <div class="col-12 text-center">
            <router-link class="btn btn-secondary m-1" to="/">Back</router-link>
            <button class="btn btn-primary m-1" @click="submitOrder">
                สั่งซื้อ
            </button>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import { mapActions, mapGetters, mapState } from "vuex";
export default {
    data() {
        return {
            order: {
                name: "Kabigon",
                phone: "0617932",
                address: "123434"
            }
        }
    },
    computed: {
        ...mapState({
            cart: (state) => state.cart.cart,
        }),
        ...mapGetters({
            total: "cart/totalPrice",
        }),
    },
    methods: {
        ...mapActions({
            storeOrder: "orders/storeOrderAction",
            clearCartData: "cart/clearCartData",
        }),
        async submitOrder() {
            const body = {
                name: this.order.name,
                phone: this.order.phone,
                address: this.order.address,
                cart: JSON.stringify(this.cart),
                total: this.total
            }
            await axios.post("https://v-shop-backend.herokuapp.com/order", body)
            this.$router.push("/")
            this.clearCartData()
        }
    }
}
</script>
