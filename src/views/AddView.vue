<script>
export default{
    data(){
        return {
            newStudent: [],
            firstname: null,
            lastname: null,
            email: null,
            course: null,
        }
    },
    methods:{
        getData(){
            if (localStorage.getItem('Students') === null){

                this.newStudent.push({firstname: this.firstname, lastname: this.lastname, email: this.email, course: this.course});
                localStorage.setItem('Students', JSON.stringify(this.newStudent));

            }else{

                var localStudents = JSON.parse(localStorage.getItem('Students'));
                localStudents.push({firstname: this.firstname, lastname: this.lastname, email: this.email, course: this.course});
                console.log(localStudents);
                localStorage.setItem('Students', JSON.stringify(localStudents));
            }
            this.$router.push('/');
        }
    },
}
</script>

<template>
<div class="add">
<div class="flex items-center justify-center h-screen">
 <div
  class="block max-w-md rounded-l p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  <form>
      <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input v-model="firstname" name="firstname" class="appearance-none block w-full bg-slate-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Enter Firstname">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input v-model="lastname" name="lastname" class="appearance-none block w-full bg-slate-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Enter Lastname">
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Email
      </label>
      <input v-model="email" name="email" class="appearance-none block w-full bg-slate-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Enter email address">
      <p class="text-gray-600 text-xs italic">Make sure that the email exists</p>
    </div>
     <div class="w-full px-3 mb-6 md:mb-0 mt-5">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Course
      </label>
      <input v-model="course" name="course" class="appearance-none block w-full bg-slate-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Enter Course">
    </div>
    </div>

    <!--Subscribe newsletter checkbox-->
    <div
      class="mb-6 flex min-h-[1.5rem] items-center justify-center pl-[1.5rem]">
      <input
        class="relative float-left -ml-[1.5rem] mr-[6px] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary"
        type="checkbox"
        value=""
        id="exampleCheck25" />
      <label
        class="inline-block pl-[0.15rem] hover:cursor-pointer text-xs"
        for="exampleCheck25">
        Agree to terms and conditions
      </label>
    </div>

    <!--Submit button-->
    <button
      type="button"
      v-on:click="getData()"
      class="inline-block w-full rounded bg-green-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-green-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
      data-te-ripple-init
      data-te-ripple-color="light">
      Add Student
    </button>
  </form>
</div>
</div>
</div>
</template>

