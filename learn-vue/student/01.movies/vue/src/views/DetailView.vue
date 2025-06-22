<script setup>
import DetailInfo from '@/components/detail/DetailInfo.vue'
import DetailTrailer from '@/components/detail/DetailTrailer.vue'
import MainMovie from '@/components/main/MainMovie.vue'
import { useMovieStore } from '@/stores/movie'
import { storeToRefs } from 'pinia'
import { computed, onBeforeMount, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const movieStore = useMovieStore()
const {
  movieDetail,
  movieDetailLoading,
  moviePlayList,
  moviePlayingListLoading,
  movieTrailerList,
  movieTrailerListLoading,
  movieCreditList,
  movieCreditListLoading,
  movieDiscoverList,
  movieDiscoverListLoading,
} = storeToRefs(movieStore)

onMounted(() => {
  const id = route.params.id
  movieStore.getMovieDetail(id)
  movieStore.getMovieTrailer(id)
  movieStore.getMovieCredit(id)
})

const genre = computed(() => {
  return movieDetail.value.genres?.map((v) => v.id !== Number(route.params.id))
})

watch(genre, (newValue) => {
  movieStore.getMovieDiscover(newValue)
})

const detailList = computed(() => {
  return movieDiscoverList.value?.filter((v) => v.id !== Number(route.params.id))
})

onBeforeMount(() => {
  movieDetail.value = []
  movieDetailLoading.value = true
  movieDiscoverListLoading.value = true
})
</script>
<template>
  <DetailTrailer :trailer="movieTrailerList" :loading="movieTrailerListLoading" />
  <DetailInfo
    :movie="movieDetail"
    :loading="movieDetailLoading"
    :credit="movieCreditList"
    :credit-loading="movieCreditListLoading"
  />
  <MainMovie
    v-if="detailList && detailList.length > 0"
    title="비슷한 장르의 영화"
    sub-title="Relative Movies"
    type="relative"
    :movies="moviePlayList"
    :loading="moviePlayingListLoading"
  />
</template>
<style scoped></style>
