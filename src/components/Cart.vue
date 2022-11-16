<template>
    <div class="float-right text-white">
        <span v-if="itemCount > 0">
            {{ itemCount }} item(s) {{ totalPrice }}
        </span>
        <span v-else>
            Your Cart is Empty.
        </span>
        <router-link v-if="itemCount > 0" to="/checkout" class="text-white">
            <i class='bx bx-cart' style="font-size: 24px;"></i>
        </router-link>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            itemCount: "cart/itemCount",
            totalPrice: "cart/totalPrice",
        }),
    }
}
</script>