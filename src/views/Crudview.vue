<template>
  <div class="crud">
    <div class="ml-auto mr-auto w-full h-full">
      <div class="flex justify-between pb-2 bg-green-400 items-center text-lg font-semibold pr-2 pl-2 pt-2">
        <h1 class="text-neutral-800">Manage Students</h1>
        <RouterLink to="/new" class="flex text-sm bg-neutral-700 hover:bg-neutral-600 font-bold items-center pb-2 pt-2 rounded-md text-white pl-3 pr-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16"> <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/> <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/> </svg></RouterLink>
      </div>
      <table class="text-left text-md font-light">
        <thead
          class="border-b bg-neutral-600 text-white font-medium dark:border-neutral-500 dark:bg-neutral-600"
        >
          <tr>
            <th scope="col" class="px-6 py-4">ID</th>
            <th scope="col" class="px-6 py-4">Fullname</th>
            <th scope="col" class="px-6 py-4">Email</th>
            <th scope="col" class="px-6 py-4">Course</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-b hover:bg-neutral-100 bg-white dark:border-neutral-500 dark:bg-neutral-700"
          >
            <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
            <td class="whitespace-nowrap px-6 py-4">{{ fullname }}</td>
            <td class="whitespace-nowrap px-6 py-4">aurieljames11@gmail.com</td>
            <td class="whitespace-nowrap px-6 py-4">Bachelor of Science in Information Technology</td>
          </tr>
          <tr
            class="border-b hover:bg-neutral-100 bg-white dark:border-neutral-500 dark:bg-neutral-700"
          >
            <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
            <td class="whitespace-nowrap px-6 py-4">Florencio De Vera</td>
            <td class="whitespace-nowrap px-6 py-4">florenciodevera@gmail.com</td>
            <td class="whitespace-nowrap px-6 py-4">Bachelor of Science in Computer Science</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
</script>