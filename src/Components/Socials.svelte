<script>
    export let formValues ={
        linkdin:"",
        twitter: "",
        facebook:"",
      
    }
  
   </script>

   <main>

<div class="w-full  justify-center border-2 border-slate-100  drop-shadow-sm my-5  ">
    <div class="flex  justify-between">
    <div class="  pl-2 ">Basic Information  </div>
    <iconify-icon icon= icon-park:down class="mt-1 mr-2" />
</div>
    <hr/>
    
    <form class="flex  p-4" style="width: 75%">
        <div class="space-y-5 " style="width: 50%">
            <div class=" flex justify-around" style="width: 100%">
                <label for="linkdin" class="text-end" style="width: 40%" >Linkedin Url
                </label>
                <input class="border-2 border-slate-100 "style="width: 50%" type ="text" id="linkdin"  bind:value={formValues.linkdin} />
            </div>
            
            <div class=" flex justify-around" style="width: 100%">
                <label for="twitter"class="text-end" style="width: 40%"  > Twitter Username
                </label>
                <input class="border-2 border-slate-100  "style="width: 50%" type ="text" id="twitter"  bind:value={formValues.twitter} />
            </div>

        </div>

        <div class="space-y-5 " style="width: 50%">
            <div class=" flex justify-around" style="width: 100%">
                <label for="facebook" class="text-end" style="width: 40%" > Facebook Url 
                </label>
                <input class="border-2 border-slate-100 "style="width: 50%" type ="text" id="facebook"  bind:value={formValues.facebook} />
            </div>
        </div>
         </form>
    </div>
            
</main>