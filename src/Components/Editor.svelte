<script></script>

<main>
    <div class="w-screen h-screen flex flex-col items-center">
  <div class="flex flex-row gap-1 mt-4 mb-1 " style=" width:80%" >
 <button class=" bg-blue-500 text-white font-semibold px-4 py-1 rounded w-30"> CODE EDITOR </button>
 <button class=" bg-white text-blue-500 border border-blue-500   font-semibold px-2 rounded w-16"> INPUT </button> 
 <button class=" bg-white text-blue-500 border border-blue-500   font-semibold px-4 rounded py-1"> OUTPUT </button>  
 <div class="mt-2"> <iconify-icon icon= octicon:question-24  style="font-size: 24px;"  /> </div>
 
  <span class="flex grow "></span>
  <div class="relative">
    <select  id="fontsize " class=" border-gray-400 border py-2 px-8 -mb-2 rounded-md bg-white" >
    
  <option value=" 11px">11px</option>
  <option value=" 12px">12px</option>
  <option value=" 13px">13px</option>
  <option value=" 14px">14px</option>
  <option value=" 15px">15px</option>
  <option value=" 16px">16px</option>
</select>
<span class="absolute -top-2 left-1/3 transform -translate-x-1/2 bg-white px-2 text-sm text-gray-400">
    FontSize
  </span>
</div>

</div>
<div class=" bg-zinc-800  flex justify-center text-white mb-1" style=" width:80% ; height:80%;">
   
 <div class="w-[0.1px] bg-slate-600"  style=" height:100%;"></div>
    </div>
<div class=" flex justify-between" style=" width:80% ;">
 
<select id="language" class="w-80 border-2 border-blue-500 rounded-md " >
    
<option value=" language Compiler">language Compiler</option>
<option value= "Python3 (python-3.9.7) ">Python3 (python-3.9.7)</option>
<option value=" c(gcc4.9)"> c(gcc4.9)</option>
<option value=" c++ (g++-4.9)">c++ (g++-4.9)</option>
<option value=" Java (openjdk-11)">Java (openjdk-11)</option>
<option value=" c# (donet-5)">c# (donet-5)</option>
<option value=" Python2 (python-2.7.18)">Python2 (python-2.7.18)</option>
<option value="php8 (php-8.1)">php8 (php-8.1)</option>
<option value=" F# (fsharp-5)">F# (fsharp-5)</option>
<option value=" ruby3 (ruby-3.0.2)">ruby3 (ruby-3.0.2)</option>
<option value="go ">go(coming soon)</option>
<option value=" php7 ">php7(coming soon) </option>
<option value=" ruby2 ">ruby2(coming soon) </option>
<option value=" rust">rust(coming soon)</option>
<option value="perl6">perl6(coming soon)</option>


</select>

<div> 
     
    <button  class=" w-36 bg-orange-600 py-2 text-white"><iconify-icon icon= clarity:play-solid class=" mr-2" style="color: white"/>RUNCODE</button>
</div>


</div>
</div>
</main>