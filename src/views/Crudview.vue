<script>
  export default{
    data(){
      return{
        Students: JSON.parse(localStorage.getItem('Students')),
      }
    },
    methods:{
      deleteStudent:function(index){
        var currentStudents = localStorage.getItem("Students");
        currentStudents = JSON.parse(currentStudents);
        currentStudents.splice(index, 1);
        console.log(currentStudents);

        localStorage.setItem('Students', JSON.stringify(currentStudents));

        this.$router.go(this.$router.currentRoute)
      },
      editStudent:function(index){
        this.$router.push(`/edit/${index}`);
      },
    }
  }
</script>
<template>
  <div class="crud">
  <div><p class="font-semibold mt-2 ml-2">CRUD operation using Vue3, Tailwind, LocalStorage</p></div>
    <div class="ml-auto mr-auto max-w-3xl mt-20 h-full">
      <div class="w-full flex justify-end">
        <RouterLink to="/new" class="flex text-sm bg-neutral-600 mb-1 hover:bg-neutral-500 font-bold items-center pb-2 pt-2 rounded-sm text-white pl-3 pr-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16"> <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/> <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/> </svg>Add Student</RouterLink>
      </div>
      <table class="text-left text-md font-light table-fixed shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <thead
          class="border-b bg-neutral-600 text-white font-medium dark:border-neutral-500 dark:bg-neutral-600"
        >
          <tr>
            <th scope="col" class="px-6 py-4">Id</th>
            <th scope="col" class="px-6 py-4">Fullname</th>
            <th scope="col" class="px-6 py-4">Email</th>
            <th scope="col" class="px-6 py-4">Course</th>
            <th scope="col" class="px-6 py-4">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, index) in Students" :value="student" :key="index"
            class="border-b hover:bg-neutral-100 bg-white dark:border-neutral-500 dark:bg-neutral-700 font-semibold text-sm"
          >
            <td class="whitespace-nowrap break-words px-6 py-4">{{ index }}</td>
            <td class="whitespace-nowrap break-words px-6 py-4">{{ student.firstname }} {{ student.lastname }}</td>
            <td class="whitespace-nowrap break-words px-6 py-4">{{ student.email }}</td>
            <td class="whitespace-nowrap break-words px-6 py-4">{{ student.course }}</td>
            <td class="w-full flex items-center mt-1">
              <button v-on:click="editStudent(index)" class="bg-green-300 flex justify-center w-full text-center hover:bg-neutral-300 text-green-800 pt-2 pb-2 pr-3 pl-3 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"> <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/> <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/> </svg></button>
              <button v-on:click="deleteStudent(index)" class="bg-red-300 flex justify-center w-full text-center hover:bg-neutral-300 text-red-800 pt-2 pb-2 pr-3 pl-3 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/> </svg></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

