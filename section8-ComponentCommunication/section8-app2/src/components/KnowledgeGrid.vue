<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  //solo se puede inject lo que ha sido provide por un componente de nivel superior
  //provide and inject necesitan una relacion ancestro-hijo o padre-hijo
  inject: ['topics'],
};
</script>
