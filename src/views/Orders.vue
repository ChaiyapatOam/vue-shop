<template>
    <div>
        <h1>รายการสั่งซื้อ</h1>
        <main>
            <div class="text-center">
                <table class="table" v-if="orders">
                    <thead>
                        <tr>
                            <th scope="col">ชื่อ</th>
                            <th scope="col">เบอร์โทรศัพท์</th>
                            <th scope="col">ที่อยู่</th>
                            <th scope="col">สินค้า</th>
                            <th scope="col">ราคารวม</th>
                        </tr>
                    </thead>

                    <tbody v-if="orders">
                        <tr v-for="(o, index) in orders" :key="index">
                            <td class="name" scope="row">{{ o.name }}</td>
                            <td class="price">{{ o.phone }}</td>
                            <td class="price">{{ o.address }}</td>

                            <!-- Product  -->
                            <td class="product">
                                <ul class="list-group">
                                    <li class="list-group-item" v-for="(item, index) in JSON.parse(o.cart)"
                                        :key="index">
                                        {{ item.product.name }} <br />
                                        {{ item.product.price }}
                                        {{ 'X' + item.quantity }} ชิ้น
                                    </li>
                                </ul>
                            </td>

                            <td class="total">{{ o.total }}</td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            orders: [],
        }
    },
    methods: {
        async getOrder() {
            const response = await axios.get(this.$store.state.apiUrl + "/order");
            // console.log(response);
            this.orders = response.data;
        },
    },
    mounted() {
        this.getOrder();
    },
}
</script>
  
