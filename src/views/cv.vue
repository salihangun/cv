<template>
  <div class="main-wrapper">
    <div class="container resume-container px-3 px-lg-5">
      <article
        class="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg"
      >
        <user :data="cv.user" />
        <hr />
        <div class="resume-body">
          <div class="row">
            <div class="resume-main col-12 col-lg-8 col-xl-9 pe-0 pe-lg-5">
              <work-experiences :data="cv.workExperiences" />
              <projects :data="cv.projects" />
            </div>
            <aside
              class="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4"
            >
              <skills :data="cv.skills" />
              <education :data="cv.education" />
              <awards :data="cv.awards" />
              <languages :data="cv.languages" />
              <interests :data="cv.interests" />
            </aside>
          </div>
        </div>
        <hr />
        <social-networks :data="cv.socialNetworks" />
      </article>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import user from "./../components/user.vue";
import workExperiences from "./../components/workExperiences.vue";
import projects from "./../components/projects.vue";
import skills from "./../components/skills.vue";
import education from "./../components/education.vue";
import awards from "./../components/awards.vue";
import languages from "./../components/languages.vue";
import interests from "./../components/interests.vue";
import socialNetworks from "./../components/socialNetworks.vue";
export default {
  name: "cv",
  components: {
    user,
    workExperiences,
    projects,
    skills,
    education,
    awards,
    languages,
    interests,
    socialNetworks,
  },
  data() {
    return {
      cv: {
        user: {
          title: "Senior Frontend Developer",
          name: "Salih Angün",
          tel: "+90 553 533 2209",
          email: "salihangun@gmail.com",
          website: "salihangun.com",
          location: "Ankara / Türkiye",
          imagePath:
            "https://avatars.githubusercontent.com/u/9803257?s=400&u=36b207d442972a72914fe3d915fa30dd6f405e0a&v=4",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        workExperiences: [
          {
            companyName: "Comodo",
            title: "Senior Frontend Developer",
            startDate: "15/02/2021",
            endDate: "Present",
            description:
              "Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.",
            skills: [
              "Lorem ipsum dolor sit amet, consectetuer.",
              "Aenean commodo ligula eget dolor.",
              "Etiam ultricies nisi vel augue.",
            ],
          },
          {
            companyName: "Comodo",
            title: "Frontend Developer",
            startDate: "26/11/2018",
            endDate: "15/02/2021",
            description:
              "Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.",
            skills: [
              "Lorem ipsum dolor sit amet, consectetuer.",
              "Aenean commodo ligula eget dolor.",
              "Etiam ultricies nisi vel augue.",
            ],
          },
          {
            companyName: "Odc Business Solutions",
            title: "Frontend Developer",
            startDate: "01/02/2016",
            endDate: "24/11/2018",
            description:
              "Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.",
            skills: [
              "Lorem ipsum dolor sit amet, consectetuer.",
              "Aenean commodo ligula eget dolor.",
              "Etiam ultricies nisi vel augue.",
            ],
          },
          {
            companyName: "Argeset Yazılım",
            title: "Frontend Developer",
            startDate: "01/11/2014",
            endDate: "01/02/2016",
            description:
              "Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.",
            skills: [
              "Lorem ipsum dolor sit amet, consectetuer.",
              "Aenean commodo ligula eget dolor.",
              "Etiam ultricies nisi vel augue.",
            ],
          },
          {
            companyName: "Bosphorus Media",
            title: "Frontend Developer",
            startDate: "01/12/2012",
            endDate: "01/11/2014",
            description:
              "Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.",
            skills: [
              "Lorem ipsum dolor sit amet, consectetuer.",
              "Aenean commodo ligula eget dolor.",
              "Etiam ultricies nisi vel augue.",
            ],
          },
        ],
        projects: [
          {
            projectName: "Project Lorem Ipsum",
            description:
              "You can use this section for your side projects. You can provide a project link here as well. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            projectType: "Open Source",
          },
          {
            projectName: "Project Lorem Ipsum",
            description:
              "You can use this section for your side projects. You can provide a project link here as well. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            projectType: "Open Source",
          },
          {
            projectName: "Project Lorem Ipsum",
            description:
              "You can use this section for your side projects. You can provide a project link here as well. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            projectType: "Open Source",
          },
        ],
        skills: {
          technical: [
            "JavaScript/Vue",
            "Angular/React/Vue",
            "Less/Sass/React/Vue",
            "JavaScript/React/Vue",
            "JavaScript/Angular/React",
            "Html/Html5/Css/Css3",
            "Html/Html5/Css/Css3",
          ],
          professional: [
            "Effective communication",
            "Team player",
            "Strong problem solver",
            "Good time management",
          ],
        },
        education: [
          {
            department: "MSc in Computer Science",
            schoolName: "University College London",
            startDate: "2020",
            endDate: "2022",
          },
          {
            department: "BSc Maths and Physics",
            schoolName: "Imperial College London",
            startDate: "2007",
            endDate: "2010",
          },
        ],
        awards: [
          {
            name: "Award Lorem Ipsum",
            organisation: "Microsoft lorem ipsum",
            year: "2019",
          },
          {
            name: "Award Donec Sodales",
            organisation: "Oracle Aenean",
            year: "2017",
          },
        ],
        languages: [
          { language: "English", level: "A2" },
          { language: "German ", level: "A2" },
        ],
        interests: ["Climbing", "Snowboarding", "Photography", "Travelling"],
        socialNetworks: [
          { socialNetwork: "github", url: "https://github.com/salihangun" },
          {
            socialNetwork: "linkedin ",
            url: "https://www.linkedin.com/in/salih-a-526087b2/",
          },
          {
            socialNetwork: "xing ",
            url: "https://www.xing.com/profile/Salih_Anguen/cv",
          },
        ],
      },
    };
  },
  computed: {
    ...mapState(["selectedLanguage"]),
  },
  created() {
      console.log(this.$store.state.selectedLanguage)
  },
  methods: {
  },
   watch: {
    selectedLanguage: function () {
      this.$i18n.locale = this.selectedLanguage
    }
  },
};
</script>

<style scoped>
</style>
