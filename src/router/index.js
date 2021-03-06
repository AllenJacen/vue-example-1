import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie/Movie'
import MovieList from '@/components/movie/MovieList'
import MovieDetail from '@/components/movie/MovieDetail'
import Music from '@/components/music/Music'
import MusicList from '@/components/music/MusicList'
import MusicAlbums from '@/components/music/MusicAlbums'
import Book from '@/components/book/Book'
import Photo from '@/components/photo/Photo'
import PhotoList from '@/components/photo/PhotoList'
import PhotoDetail from '@/components/photo/PhotoDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/movie/movieList'
    }, {
      path: '/movie',
      name:'movie',
      component:Movie,
      children:[
        {
          path:'movieList',
          component:MovieList
        },{
          path:'movieDetail/:movieId',
          component:MovieDetail
        }
    ]
    },{
        path: '/music',
        name:'music',
        redirect: '/music/musicList',
        component:Music,
        children:[
          {
            path:'musicList',
            component:MusicList
          },{
            path:'musicAlbums/:musicId',
            component:MusicAlbums
          }
      ]
    },{
        path: '/book',
        name:'book',
        component:Book
    },{
        path: '/photo',
        name:'photo',
        component:Photo,
        children:[{
          path:'photoList',
          component:PhotoList
        },{
          path:'photoDetail/:index',
          component:PhotoDetail
        }]
    }
  ]
})
