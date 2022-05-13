<script>
  import { url } from '@roxi/routify'
</script>

<slot>
  <!-- pages in this folder and subfolders will be rendered here -->
</slot>

<footer>
  <div class=" w-full mx-auto mt-5 text-center text-slate-500">
    Made with <span class="text-red-500">♥️</span> <a href={$url('/')}>YUMOO.DEV</a>
  </div>
</footer>
