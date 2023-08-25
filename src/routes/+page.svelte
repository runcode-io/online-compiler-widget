<script>
    import Editor from "../Components/Editor.svelte";

</script>
<!-- <script>
  import Application from "../Components/Application.svelte";
  import Address from "../Components/Address.svelte";
  import Description from "../Components/Description.svelte";
  import Socials from "../Components/Socials.svelte";
  import Header from "../Components/Header.svelte";
  import Dashboard from "../Components/Dashboard.svelte";
  import Crmpage from "../Components/Crmpage.svelte";
 

  let applicationData = {
    salutation: "",
    name: "",
    secondary: "",
    department: "",
    first: "",
    text: "",
    title: "",
    secondary: "",
    number: " ",
    language: "",
  };


   let addressData ={
        address:"",
        street: "",
      
       pin:"",
      city:" ",
      state:"",
      country:"",
    }

    let descriptionData={
        description:"",
        }

    let SocialData ={
        linkdin:"",
        twitter: "",
        facebook:"",
      
    } -->


  <!-- const handleSubmit = async (event) =>{
    console.log("calling..")
    event.preventDefault()
    console.log(applicationData,addressData,descriptionData,SocialData)}

</script> -->

<!-- <main class="h-screen overflow-y-scroll">
   <div class="px-5" style="height: 5%;"><Crmpage /></div> -->

  <!-- <div class="flex" style="height: 95%;">
    <div class="border-4 border-b-slate-200" style="width:15%;height:80%">
      <Dashboard />
    </div>

    <div style="width: 85%;">
      <Header />
      
      <div class="pl-10 pr-4 py-2 space-y-2" style="width: 100%;">
        <Application bind:formValues={applicationData}/>
        <Address bind:formValues= {addressData}/>
        <Description bind:formValues={descriptionData} />
        <Socials bind:formValues={SocialData}/>
        
 <button class="bg-blue-700 hover:bg-blue-950 text-white font-semibold py-2 px-4 rounded w-20" on:click={handleSubmit} > Save</button >


      </div>
    </div>
  </div>
</main>  -->


<main>
<Editor/>


</main>


