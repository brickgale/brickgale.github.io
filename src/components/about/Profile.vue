<template>
  <div class="about-profile np">
    <div class="row">
      <div class="col-xs-12 col-md-6">
        <div class="box-con">
          <h3><i class="fa fa-graduation-cap"></i>Eduation</h3>
          <ul class="timeline">
            <li>
              <span></span>
              <div class="content">
                <p class="main">
                  Holy Name University <span>- BSIT</span>
                  </p>
                <p class="sub">Tagbilaran City, Bohol</p>
              </div>
              <span class="timestamp">
                <span>20013</span>
                <span>2009</span>
              </span>
            </li>
            <li>
              <span></span>
              <div class="content">
                <p class="main">
                  CIC Mandaue <span>- Highschool</span>
                </p>
                <p class="sub">Tipolo, Mandaue City, Cebu</p>
              </div>
              <span class="timestamp">
                <span>2009</span>
                <span>2005</span>
              </span>
            </li>
            <li>
              <span></span>
              <div class="content">
                <p class="main">
                  Bankal <span>- Elementary</span>
                </p>
                <p class="sub">Bankal, Lapu-Lapu City, Cebu</p>
              </div>
              <span class="timestamp">
                <span>2009</span>
                <span>2005</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-xs-12 col-md-6">
        <div class="box-con">
          <h3><i class="fa fa-briefcase"></i>Work History</h3>
          <ul class="timeline">
            <li>
              <span></span>
              <div class="content">
                <p class="main">
                  Freemight Philippines Inc
                </p>
                <p class="sub">Full Stack Web Developer</p>
              </div>
              <span class="timestamp">
                <span>Now</span>
                <span>Jan 2017</span>
              </span>
            </li>
            <li>
              <span></span>
              <div class="content">
                <p class="main">
                  Sliding Monkey Web Development
                </p>
                <p class="sub">Full Stack Web Developer</p>
              </div>
              <span class="timestamp">
                <span>Nov 2016</span>
                <span>Aug 2016</span>
              </span>
            </li>
            <li>
              <span></span>
              <div class="content">
                <p class="main">
                  Nerubia Web Solutions Inc
                </p>
                <p class="sub">Full Stack Web Developer</p>
              </div>
              <span class="timestamp">
                <span>Aug 2016</span>
                <span>Mar 2015</span>
              </span>
            </li>
            <li>
              <span></span>
              <div class="content">
                <p class="main">
                  NextIx Inc
                </p>
                <p class="sub">Senior Software Engineer</p>
              </div>
              <span class="timestamp">
                <span>Feb 2015</span>
                <span>MAr 2014</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about-profile',
  data () {
    return {
      
    }
  },
  methods: {
  
  },
  created() {

  },
  mounted() {

  },
  components: {

  }
}
</script>

<style lang="scss">
  .about-profile {
    padding-top: 20px;
    .box-con {
      padding: 20px;
      margin-bottom: 20px;
      h3 {
        font-family: 'CircularStdBold';
        font-size: 16px;
        padding-bottom: 20px;
        i {
          margin-right: 8px;
        }
      }
      .timeline {
        .content {
          p {
            margin: 0;
            line-height: 1.6em;
            &.main {
              font-family: 'CircularStdBold';
              
            }
            &.sub {
              color: #adadad;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
</style>
