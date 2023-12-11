<template>
  <div
    class="bg-amber-500 rounded-lg shadow-2xl h-56 grid place-content-center"
  >
    <h2>
      Username: <span class="text-xl text-slate-700">{{ username }}</span>
    </h2>
    <h3>
      Age: <span class="text-xl text-slate-700">{{ age }}</span>
    </h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "Daniel Souchar",
      age: "25",
    };
  },
  props: {
    username: String,
    age: Number,
  },
};
</script>
