<script>
    export let formValues ={
        description:"",
        
      
    }
  
   </script>
<main>

<div class="border-2 border-slate-100 w-full h-80  drop-shadow" >
    <div class="flex  justify-between">
    <div for="description" class="  pl-8  ">Description  </div> 
    <iconify-icon icon= icon-park:down class="mt-1 mr-2" />
</div>
    <hr/>
<div class="flex pt-5 pl-20 space-x-2" style="width: 100% "> 
   <div for="description" class="pl-20  " > Description </div>
  <input class="border-2 border-slate-100 h-60"  style="width:75% "type ="text" id="description" bind:value={formValues.description} />
</div>
</div>

</main>