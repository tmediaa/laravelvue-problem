<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Example Component</div>

                    <div class="panel-body">
                        <table class="table table-borderd table-striped table-condensed">
                            <thead>
                            <tr>
                                <th>Name:</th>
                                <th>E-mail:</th>
                            </tr>
                            </thead>
                            <tbody>
                                <!--<customer v-for="customer in customerAll" :product="customer"></customer>-->
                                <item :product="customers"></item>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Customer from './Customer.Vue';
    export default {
        data() {
            return {
                customerAll: []
            }
        },
        components:{
          "item":Customer,
        }
        ,
        methods:{
            fetchUser(){
                this.$http.get("customer").then(response => {this.customerAll = response.data.customers})

            }
        },
        created(){
            this.fetchUser()
        },
        mounted() {

            console.log('Component mounted.')
        }
    }
</script>
