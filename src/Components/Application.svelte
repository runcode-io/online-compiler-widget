 <script>
//       import Icon from 'svelte-icons-pack/Icon.svelte';
//   import DiCss3 from 'svelte-icons-pack/di/DiCss3';
//  import DiCss3 from 'svelte-icons/di/DiCss3.svelte';

  export let formValues ={
    salutation:"",
    last:"",
    name: "",
    secondarynumber : "",
    department:"",
    first :"",
    text:"",
    title:"",
    secondary:"",
    number:" ",
    language:"",
  dob :"",
  }

 </script>
    
   
    <main>
   <div class="w-full  justify-center border-2 border-slate-100 drop-shadow  ">
  <div class="flex  justify-between">
     <div class=" pl-4 ">Basic Information  </div>  
    <iconify-icon icon= icon-park:down class="mt-1 mr-2" />
</div>
    <hr/>   
<form class="flex  p-4" style="width:75%;height:25%"  >
   <div class="space-y-3 " style="width: 50%">
<div class=" flex justify-around" style="width: 100%">
    <label for="salutation" class="text-end" style="width: 40%" > Salutation 
    </label>
    <input class="border-2 border-slate-100 "style="width: 50%" type ="text" id="salutation" bind:value={formValues.salutation} />
</div>

<div class=" flex justify-around" style="width: 100%">
    <label for="last"class="text-end" style="width: 40%"  > Last Name
    </label>
    <input class="border-2 border-slate-100  "style="width: 50%" type ="text" id="last" bind:value={formValues.last}  />
</div>

<div class="  flex justify-around" style="width: 100%">
    <label for="organise"class="text-end"  style="width: 40%" > Organisation 
    </label>
    <input class="border-2 border-slate-100  "style="width: 50%" type ="text" id="organise"  bind:value={formValues.organise} />
    <iconify-icon icon= mdi:add class="-ml-10 mt-2"/>
</div>

<div class="  flex justify-around " style="width: 100%">
    <label for="primary"class="text-end"  style="width: 40%" > Primary Email 
    </label>
    <input class="border-2 border-slate-100  "style="width: 50%" type ="text" id="primary"  bind:value={formValues.primary}   />
</div>

<div class="  flex justify-around" style="width: 100%">
    <label for="secondarynumber " class="text-end" style="width: 40%" > Secondary Number   </label>
    <input class="border-2 border-slate-100  "style="width: 50%" type ="text" id="secondarynumber"  bind:value={formValues.secondarynumber}  />
</div>

<div class=" flex justify-around" style="width: 100%">
    <label for="department" class="text-end " style="width: 40%"> Department
    </label>
    
    <select class="border-2 border-slate-100 "  style="width: 50%" type ="text" id="department"  bind:value={formValues.department}   >
        <option value=""></option>
       </select> 
</div>  

<div class="ml-36">
    <iconify-icon icon=fa-solid:toggle-on style="color:blue" />  Do Not Call 
</div>

</div> 

<div class="space-y-3 " style="width: 50%">
    <div class=" flex justify-around" style="width: 100%">
        <label for="first" class="text-end" style="width: 40%" > First Name 
        </label>
        <input class="border-2 border-slate-100 "style="width: 50%" type ="text" id="first"  bind:value={formValues.first}  />
    </div>
    
    <div class=" flex justify-around" style="width: 100%">
        <label for="dob"class="text-end" style="width: 40%"  > Date of Birth
        </label>
        <input class="border-2 border-slate-100  "style="width: 50%" type ="text" id="dob"   bind:value={formValues.dob}   />
        <iconify-icon icon=fontisto:date class="-ml-12 mt-2"/>
    </div>
    
    <div class="  flex justify-around" style="width: 100%">
        <label for="title"class="text-end"  style="width: 40%" > Title
        </label>
        <input class="border-2 border-slate-100  "style="width: 50%" type ="text" id="title"  bind:value={formValues.title}  />
    </div>
    
    <div class="  flex justify-around" style="width: 100%">
        <label for="secondary"class="text-end"  style="width: 40%" > Secondary Email
        </label>
        <input class="border-2 border-slate-100  "style="width: 50%" type ="text" id="secondary"  bind:value={formValues.secondary}   />
    </div>
    
    <div class="  flex justify-around" style="width: 100%">
        <label for="number " class="text-end" style="width: 40%" > Mobile Number  </label>
        <input class="border-2 border-slate-100  "style="width: 50%" type ="text" id="number"  bind:value={formValues.number}  />
    </div>
    
    <div class=" flex justify-around" style="width: 100%">
        <label for="language" class="text-end " style="width: 40%"> Language
        </label>
        <input class="border-2 border-slate-100 "  style="width: 50%" type ="text" id="language"  bind:value={formValues.language}  />
    </div>  
    </div> 

</form>

</div>
</main>


 




