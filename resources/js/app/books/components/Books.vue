<template>
    <div>
        <h2>Bookables </h2>
        <book-list />
    </div>
</template>


<script>
import BookList from './BookList.vue'

export default {
  components: { BookList },
    name: 'bookables'
}
