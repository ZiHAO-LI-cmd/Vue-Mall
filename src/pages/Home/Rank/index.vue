<!--  -->
<template>
  <!-- 商品排行 -->
  <div class="rank">
    <div class="tab">
      <div class="tab-tit clearfix">
        <a href="javascript:;" class="on">
          <p class="img">
            <i></i>
          </p>
          <p class="text">热卖排行</p>
        </a>
        <a href="javascript:;">
          <p class="img">
            <i></i>
          </p>
          <p class="text">特价排行</p>
        </a>
        <a href="javascript:;">
          <p class="img">
            <i></i>
          </p>
          <p class="text">新品排行</p>
        </a>
      </div>
    </div>
    <div class="content">
      <ul>
        <li>
          <div class="img-item">
            <p class="tab-pic">
              <a href="#">
                <img src="./images/1.jpg" />
              </a>
            </p>
            <div class="tab-info">
              <div class="info-title">
                <a href="#"
                  >【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                  移动联通电信4G手机</a
                >
              </div>
              <p class="info-price">定金：¥100.00</p>
            </div>
          </div>
          <div class="img-item">
            <p class="tab-pic">
              <a href="#">
                <img src="./images/1.jpg" />
              </a>
            </p>
            <div class="tab-info">
              <div class="info-title">
                <a href="#"
                  >【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                  移动联通电信4G手机</a
                >
              </div>
              <p class="info-price">定金：¥100.00</p>
            </div>
          </div>
          <div class="img-item">
            <p class="tab-pic">
              <a href="#">
                <img src="./images/1.jpg" />
              </a>
            </p>
            <div class="tab-info">
              <div class="info-title">
                <a href="#"
                  >【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                  移动联通电信4G手机</a
                >
              </div>
              <p class="info-price">定金：¥100.00</p>
            </div>
          </div>
          <div class="img-item">
            <p class="tab-pic">
              <a href="#">
                <img src="./images/1.jpg" />
              </a>
            </p>
            <div class="tab-info">
              <div class="info-title">
                <a href="#"
                  >【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                  移动联通电信4G手机</a
                >
              </div>
              <p class="info-price">定金：¥100.00</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less' scoped>
.rank {
  width: 1200px;
  margin: 0 auto;

  .tab {
    margin: 0 auto;
    overflow: hidden;
    width: 312px;

    .tab-tit {
      text-align: center;

      a {
        display: block;
        padding: 0 18px;
        float: left;
        text-decoration: none;
        font-size: 16px;
        color: #999;

        p {
          margin: 5px 0;
        }

        .img {
          i {
            width: 35px;
            height: 35px;
            display: block;
            background: url(./images/bg0.png);
            margin-left: 10px;
          }
        }

        .text {
          line-height: 28px;
        }
      }

      .on {
        color: #e60012;

        .img {
          i {
            background-position: -35px 0;
          }
        }
      }
    }
  }

  .content {
    overflow: hidden;
    padding: 10px;

    ul {
      li {
        overflow: hidden;
        list-style: none;
        line-height: 18px;

        .img-item {
          border: 1px solid #e1251b;
          width: 269px;
          float: left;
          overflow: hidden;
          margin: 0 12px 10px;
          background: #fff;

          .tab-pic {
            width: 230px;
            height: 210px;
            overflow: hidden;
            text-align: center;
            margin: 5px auto 18px;

            a {
              img {
                width: 200px;
                height: 200px;
              }
            }
          }

          .tab-info {
            background: #fafafa;

            .info-title {
              height: 50px;
              line-height: 28px;
              overflow: hidden;
              margin: 0 auto;
              padding-left: 10px;

              a {
                color: #333;
                text-decoration: none;
              }
            }

            .info-price {
              font-size: 20px;
              color: #e1251b;
              height: 35px;
              padding-left: 10px;
              display: block;
              line-height: 24px;
              margin: 10px auto 0;
            }
          }
        }
      }
    }
  }
}
</style>