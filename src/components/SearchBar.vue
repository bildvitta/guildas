<template>
  <div class='search_wrapper row q-mb-xl'>
    <q-input class='col-9' borderless v-model='search' @keyup.enter='searchEvents()'>
      <template v-slot:prepend>
        <q-icon name='search' />
      </template>
    </q-input>
    <q-btn class='col-3' label='Procurar' flat @click='searchEvents()'/>
  </div>
</template>

<script>
export default {
    name: 'search-bar',

    data: () => ({
        search: ''
    }),

    methods: {
        //TODO: search method
        searchEvents(){
            alert(this.search)
        }
    }
};
</script>

<style>
</style>