<template>
  <div id="id">
    <v-app>
      <div class="content" v-if="!loading">
        <div class="blogs">
          <section class="blogs-section section2">
            <div class="contents">
              <h3 class="subtit">Guides</h3>
              <ul class="list_news">
                <li v-for="blog in blogs" :key="blog.id" class="">
                  <div class="pointer" v-ripple @click="$router.push({name: 'guide', params: {slug: blog.slug}})">
                    <img
                      :src="blog.image"
                      :alt="blog.title"
                      class="news_bnn"/>
                    <div class="news_tit">
                      <strong class="type">{{ blog.category }}</strong>
                      <span class="tit">{{ blog.title }}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <infinite-loading v-if="!loading" spinner="waveDots" @infinite="loadmore">
          <div slot="no-more">End</div>          
      </infinite-loading>
    </v-app>
  </div>
</template>
<script>
import axios from "axios";
import { constant } from "../router/Constant";
import InfiniteLoading from "vue-infinite-loading";

export default {
  name: "Blogs",
  components: {
    InfiniteLoading
  },
  metaInfo() {
    return {
      title:
        "Ragnarok Guides, Quests, Events for Ragnarok Mobile: Eternal Love",
      htmlAttrs: {
        lang: "en",
        amp: true
      },
      meta: [
        { property: "og:description", content: "Wow", vmid: "og:description" }
      ]
    };
  },
  data() {
    return {
      fullPage: true,
      url: constant.url,
      loading: true,
      blogs: [],
      page: 2
    };
  },
  methods: {
    getBlogs() {
      axios
        .get(constant.getBlogs)
        .then(response => (
          this.blogs = response.data.data
        ))
        .catch(error => {})
        .finally(() => {this.loading = false})
    },
    loadmore($state) {
      let vm = this;
      axios
        .get(constant.getBlogs + "?page=" + vm.page)
        .then(response => {
          response.data.data.map(function(value) {
            vm.blogs.push(value);
          });
          vm.page += 1;
          $state.loaded();
        })
        .catch(error => console.log(error))
        .finally(() => console.log());
    },
  },
  mounted() {
    this.getBlogs();
  }
};
</script>
<style lang="scss">
@import '../assets/scss/mixins.scss';
.section2 {
  padding: 0 10px;
  margin-top: 15px;
  .more-news {
    color: $white;
    background-color: $primary !important;
    padding: 0 40px !important;
  }
  .see-more {
    cursor: pointer;
  }
}
.blogs-section {
  .contents {
    margin: 0 auto;
  }
  ul {
    padding-left: 0 !important;
    &.list_news {
      flex-wrap: wrap;
      display: flex;
      margin: 14px auto 0;
      justify-content: center;
      place-content: space-between;
      .news_bnn {
        width: 290px;
        object-fit: cover;
        height: 150px;
        box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);

        @media only screen and (max-width: 768px) {
          width: 100%;
        }
      }
      li {
        width: 290px;
        margin-bottom: 20px;
        
        @media only screen and (max-width: 768px) {
          width: 100%;
        }
      }
      .news_tit {
        display: table;
        padding: 8px 4px 0;
        .type {
          display: table-cell;
          width: 1%;
          padding-right: 4px;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.05em;
          color: $primary;
          &:before {
            content: "#";
          }
        }
        .tit {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          height: 30px;
          color: #0c0c0c;
          font-size: 13px;
          line-height: 15px;
        }
      }
    }
  }
}
</style>