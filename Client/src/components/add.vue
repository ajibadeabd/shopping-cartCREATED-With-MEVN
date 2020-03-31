<template>
    <div class="container">
    <div class="row">
        <div class="col-md-6 mx-auto">
            <!-- <form @submit.prevent="addItem">
<h1 class="h3 mb-3 font-weight-normal">please sign in</h1>
<div  class=form-group>
    <label for="Name">Name</label>
<input type="Name" v-model="name" placeholder="Name of Goods" class="form-control"></div>
<div  class=form-group>
    <label for="name">categories</label>
<select v-model="category"  id="">
    <option value="kids">kids</option>
    <option value="Baby">Baby</option>
    <option value="books">books</option>
    <option value="computers">computers</option>
    <option value="shoes">shoes</option>
    <option value="wea">wear</option>
    <option value="Electronics">Electronics</option>
    
</select>
</div>


  <div  class=form-group>
    <label for="Description">Description</label><br>


    <textarea name=""  v-model="description" placeholder="Decribtion of goods" id="" cols="40" rows="5"></textarea>
</div>
  <div  class=form-group>
    <label for="amount">amount</label>
<input type="number" v-model="amount" class="form-control"></div>
  
  
  <input type="submit" value="Add" class="btn btn-primary">
 
            </form> -->
        </div>
    </div>
    <!-- <form  content-Type="multipart/form-data" > -->
    
    
    <!-- <div class="field"> -->
        <!-- <label for="file"  class="label">
            upload filee
        </label> -->
         <!-- <input type="file"  @change="selectfile" ref="file"> -->
    <!-- </div> -->
    <!-- </form> -->
    <div @click='showfile'>fgr</div>
    <!-- <form  content-Type="multipart/form-data" >
      <input type="file"  @change="selectfile" ref="file">
  </form> -->{{message}}
   <form  form @submit.prevent="put" enctype="multipart/form-data" >
     <div class="field">
         <label for="file">
             uploads
         </label>
          <input type="file"  @change="selectfile" ref="file">
     </div>
     <button class='btn grey waves-effect'>send</button>
  </form>
</div>

</template>
<style scoped>

</style> 
<script>
import axios from 'axios'
import {mapActions} from 'vuex'

export default {
    data(){
        return{
            name:'',
            description:'',
            category:'Electronics',
            amount:'',
            file:"",
            message:'',
            error:false

        }
       
    },
     methods:{
     async    put(){
const formData =new FormData()
formData.append('file',this.file)
        try{
 await  axios.post('http://localhost:3000/api/upload',formData)
            //  .then(res=>{
                this.file=''
                this.error=false
                this.message='file has been uploaded'
            //  console.log(res.data)
            //  })
        } catch(err){
                this.message=err.res.data
                this.error=true

        }  
         },
//            
selectfile(){
this.file=this.$refs.file.files[0];
// this.file

},


showfile(){
this.file
console.log(this.$refs.file.files[0])
},
 ...mapActions(['add']),
       addItem(){
            let product={
                name:this.name,
                description:this.description,
                category:this.category,
                price:this.amount
            };
            this.add(product)
            .then(res=>{
 if(res.data.success){
   this.$router.push({ name: 'home' });

            }
            })
        }
}}
</script>