<template>
  <div class="container" style="min-height: 400px !important; max-height: 400px; min-width: 700px;">
    <div class="row">
        <div class="col-10 text-center"><h3>Product List</h3></div>
        <div class="col-2"><button class="btn-primary btn"><i class="fa fa-plus"></i></button></div>
    </div>
    <div class="row table-responsive">
      <table class="table table-primary table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">UPC</th>
            <th scope="col">Status</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr  v-for="item in allproducts" v-bind:key="item.id" v-bind:item="item">
            <th scope="row">{{item.id}}</th>
            <td>{{item.name}}</td>
            <td>{{item.price}}</td>
            <td>{{item.upc}}</td>
            <td>
              <div v-if="item.status==1">Active</div>
              <div v-if="item.status==0">InActive</div>
              </td>
            <td>{{item.image}}</td>
            <td>
              <a class="btn btn-primary" href="javascript:void(0);"><i class="fa fa-edit"></i></a>
              <a class="btn btn-danger" href="javascript:void(0);"><i class="fa fa-times"></i></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default{
  data(){
    return {
      allproducts:[]
    }
  },
  methods: {
    
  },
  mounted: function() {
    let tmpToken=localStorage.getItem('token');
    console.log(tmpToken);
    axios.get('get-all-product',{
      headers:{
        'Authorization' : 'Bearer '+localStorage.getItem('token')
      }
    })
    .then( result => {
      console.log( result );
      this.allproducts = result.data;
    })
  },
}
</script>