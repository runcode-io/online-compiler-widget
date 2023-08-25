<script>
    export let formValues ={
        address:"",
        street: "",
      
       pin:"",
      city:" ",
      state:"",
      country:"",
    }
  
   </script>
      
<main>

<div class="w-full  justify-center border-2 border-slate-100  drop-shadow   ">
<div class="flex  justify-between"> 
    <div class="  pl-2 ">Basic Information  </div>
    <iconify-icon icon= icon-park:down class="mt-1 mr-2" />
</div>
    <hr/>
        
    <form class="flex p-4" style="width: 75%">
        <div class="space-y-5 " style="width: 50%">
            <div class=" flex justify-around" style="width: 100%">
                <label for="address" class="text-end" style="width: 40%" > Address Lane
                </label>
                <input class="border-2 border-slate-100 "style="width: 50%" type ="text" id="address"  bind:value={formValues.address} />
            </div>
            
            <div class=" flex justify-around" style="width: 100%">
                <label for="street"class="text-end" style="width: 40%"  > Street
                </label>
                <input class="border-2 border-slate-100  "style="width: 50%" type ="text" id="street"  bind:value={formValues.street} />
            </div>
            
            <div class="  flex justify-around" style="width: 100%">
                <label for="pin"class="text-end"  style="width: 40%" > Pin Code 
                </label>
                <input class="border-2 border-slate-100  "style="width: 50%" type ="text" id="pin"  bind:value={formValues.pin} />
            </div>
        </div>

            <div class="space-y-5 " style="width: 50%">
                <div class=" flex justify-around" style="width: 100%">
                    <label for="city" class="text-end" style="width: 40%" > City 
                    </label>
                    <input class="border-2 border-slate-100 "style="width: 50%" type ="text" id="city"  bind:value={formValues.city} />
                </div>
                
                <div class=" flex justify-around" style="width: 100%">
                    <label for="state"class="text-end" style="width: 40%"  > State
                    </label>
                    <input class="border-2 border-slate-100  "style="width: 50%" type ="text" id="state" bind:value={formValues.state}  />
                </div>

                <div class=" flex justify-around" style="width: 100%">
                    <label for="country"class="text-end" style="width: 40%"  > Country
                    </label>
                    <input class="border-2 border-slate-100  "style="width: 50%" type ="text" id="country"  bind:value={formValues.country}  />
                </div>
            </div>
        

            </form>
        </div>

    </main>
    