<script>
  import { currentUser } from './../../../store/auth';

	let src = 'tutorial/image.gif';
	let name = 'Rick Astley';
</script>



<div class="max-w-sm rounded overflow-hidden shadow-lg">
    <div class="font-bold text-xl mb-2">My Profile</div>
  <div class="px-6 py-4">
    <div class="flex w-full h-48 items-center justify-center bg-grey-lighter">
    <img {src} alt="{name} dances.">

</div>
  <div class="flex w-full h-48 items-center justify-center bg-grey-lighter">
    <label class="w-60 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
        <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span class="mt-2 text-base leading-normal">Upload a Photo</span>
        <input type='file' class="hidden" />
    </label>
</div>
  
    <div>first and last name </div>
  <div class="border-solid border-2 m-4 border-gray-400"></div>
    <div>username</div>
    <div class="border-solid border-2 m-4 border-gray-400"></div>
        <div>email</div>
  <div class="border-solid border-2 m-4 border-gray-400"></div>

  </div>
</div>
  

 