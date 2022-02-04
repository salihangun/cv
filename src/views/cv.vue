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
      cv_en: {
        user: {
          title: "Senior Frontend Developer",
          name: "Salih Angün",
          tel: "+90 553 533 2209",
          email: "salihangun@gmail.com",
          website: "salihangun.com",
          location: "Ankara / Turkey",
          imagePath:
            "https://avatars.githubusercontent.com/u/9803257?s=400&u=36b207d442972a72914fe3d915fa30dd6f405e0a&v=4",
          description:
            "I am a Senior Frontend Developer who developed the most featured security tools of Comodo Cyber Security. I always follow the best practices. I believe that proactivity and being ahead of time is the key to success.",
        },
        workExperiences: [
          {
            companyName: "Comodo Cyber Security",
            title: "Senior Frontend Developer",
            startDate: "26/11/2018",
            endDate: "Present",
            description:
              "<b>Technologies:</b> VueJS, AngularJs, Vuetify, HTML, CSS3, LESS, SASS, Git, jQuery, AWS",
            skills: [
              "I developed the UI of the Dragon Enterprise project, which allows five different Comodo projects to be gathered on a single platform.",
              "Developed MDR tools to detect anomalies on the customer's network and respond to them immediately.",
              "Built a SOC (security operation center) portal UI.",
              "Built a SIEM portal (security information and event management) UI.",
              "Developed a customer portal UI which utilizes data from SOC and SIEM portals and presents it with analytics, graphics and reporting features.",
              "Built Comodo SOCaaP UI, which is a web project providing all-in-one platform solutions from endpoint protection, incident and response management to network security monitoring, IDS and vulnerability scanners for customers.",
              "Developed Comodo MarketPlace UI, which is a web-based platform where external and internal products are sold.",
              "Developed NuInsight project UI, which is a web interface for NuMSP users for managing the hardware and software components of their customers.",
            ],
          },
          {
            companyName: "Odc Business Solutions",
            title: "Frontend Developer",
            startDate: "01/02/2016",
            endDate: "24/11/2018",
            description:
              "<b>Technologies:</b> AngularJs, jQuery, Android Studio, HTML, CSS3, LESS, SASS, Git",
            skills: [
              "Built a SmartMessage Marketing Platform that allows customers to send various forms of notification like email, push notification, sms to their own customers.",
              "Built Android mobile application UI of Şekerbank which is a significant bank instution in Turkey.",
              "Built a yatsan.com.tr project UI",
            ],
          },
          {
            companyName: "Argeset Yazılım",
            title: "Frontend Developer",
            startDate: "01/11/2014",
            endDate: "01/02/2016",
            description:
              "<b>Technologies:</b> jQuery, HTML, CSS3, LESS, Git, Selenium",
            skills: [
              "Built a Customer Relation Management as a service UI which enables clients to utilize the CRM services provided by this project.",
              "Developed the Emission Measurement Program Ui, in which emission, noise and vibration measurements of authorized laboratories of the Turkish Ministry of Environment are recorded and shown.",
              "Mobiltel B2B software used by Türk Telekom dealers to place orders",
            ],
          },
          {
            companyName: "Bosphorus Media",
            title: "Frontend Developer",
            startDate: "01/12/2012",
            endDate: "01/11/2014",
            description:
              "<b>Technologies:</b> jQuery, HTML, CSS3, Asp.net, Mssql",
            skills: [
              "Designed and built tailored web services and UIs according to special needs of customers functioning in different industries as a Full Stack Engineer.",
            ],
          },
        ],
        projects: [
          {
            projectName: "Enerjisa",
            description:
              "Built the UI of Turkey's National Electricity Supply and Distribution Instution(Enerjisa) which includes the several components of main web site and customer portal where users can manage their bills and tickets."+
              "<br><a href='http://ayedas.com.tr' target='_blank' style='margin-right: 15px;'>ayedas.com.tr</a><a href='http://baskentedas.com.tr' target='_blank' style='margin-right: 15px;'>baskentedas.com.tr</a><a href='https://toroslaredas.com.tr' target='_blank'>toroslaredas.com.tr</a><br><b class='mt-2 d-block'>Technologies:</b> jQuery, HTML, CSS3",
            projectType: "Freelance",
          },
          {
            projectName: "Securitas",
            description:
              "Securitas developed a survey module inside the security company's process management portal"+
              "<br><b>Technologies:</b> React",
            projectType: "Freelance",
          }
        ],
        skills: {
          technical: [
            "Vue/AngularJs",
            "JavaScript/Jquery",
            "TypeScript/ECMAScript",
            "Vuetify/Bootstrap",
            "Html5/Css3/BEM",
            "Less/Sass",
            "Vite/pnpm/npm",
            "Git/Jira/Confluence",
            "SCRUM/Agile" 
          ],
          professional: [
            "Team player",
            "Good time management",
          ],
        },
        education: [
          {
            department: "Web Design and Coding",
            schoolName: "Anadolu University",
            startDate: "2016",
            endDate: "Present",
          }
        ],
        awards: [
        ],
        languages: [
          { language: "English", level: "Intermediate" },
          { language: "German ", level: "Intermediate" },
        ],
        interests: ["Paragliding", "Travelling", "RC Car"],
        socialNetworks: {
          github:{username:'salihangun', url: "https://github.com/salihangun" },
          linkedin:{username:'salihangun',
            url: "https://www.linkedin.com/in/salih-a-526087b2/",
          },
          xing:{
            username:'salihangun',
            url: "https://www.xing.com/profile/Salih_Anguen/cv",
          },
        },
      },
      cv_de: {
        user: {
          title: "Senior Frontend Entwickler",
          name: "Salih Angün",
          tel: "+90 553 533 2209",
          email: "salihangun@gmail.com",
          website: "salihangun.com",
          location: "Ankara / Türkei",
          imagePath:
            "https://avatars.githubusercontent.com/u/9803257?s=400&u=36b207d442972a72914fe3d915fa30dd6f405e0a&v=4",
          description:
            "Ich bin ein Senior Frontend Developer, der die am besten ausgestatteten Sicherheitstools von Comodo Cyber Security entwickelt hat. Ich folge immer den besten Praktiken. Ich glaube, dass Proaktivität und der Zeit voraus zu sein der Schlüssel zum Erfolg ist.",
        },
        workExperiences: [
          {
            companyName: "Comodo Cyber Security",
            title: "Senior Frontend Entwickler",
            startDate: "26/11/2018",
            endDate: "Bis heute",
            description:
              "<b>Technologien:</b> VueJS, AngularJs, Vuetify, HTML, CSS3, LESS, SASS, Git, jQuery, AWS",
            skills: [
              "Ich habe die Benutzeroberfläche des Dragon Enterprise-Projekts entwickelt, die es ermöglicht, fünf verschiedene Comodo-Projekte auf einer einzigen Plattform zu sammeln.",
              "MDR-Tools entwickelt, um Anomalien im Netzwerk des Kunden zu erkennen und sofort darauf zu reagieren.",
              "Eine SOC (Security Operation Center)-Portal-Benutzeroberfläche erstellt.",
              "Eine Benutzeroberfläche für das SIEM-Portal (Sicherheitsinformations- und Ereignisverwaltung) erstellt.",
              "Entwicklung einer Kundenportal-Benutzeroberfläche, die Daten aus SOC- und SIEM-Portalen nutzt und sie mit Analyse-, Grafik- und Berichtsfunktionen präsentiert.",
              "Erstellte Comodo SOCaaP UI, ein Webprojekt, das All-in-one-Plattformlösungen von Endgeräteschutz, Incident- und Response-Management bis hin zu Netzwerksicherheitsüberwachung, IDS und Schwachstellen-Scannern für Kunden bietet.",
              "Entwickelte Comodo MarketPlace UI, eine webbasierte Plattform, auf der externe und interne Produkte verkauft werden.",
              "Entwicklung der Benutzeroberfläche des NuInsight-Projekts, einer Webschnittstelle für NuMSP-Benutzer zur Verwaltung der Hardware- und Softwarekomponenten ihrer Kunden.",
            ],
          },
          {
            companyName: "Odc Business Solutions",
            title: "Frontend Entwickler",
            startDate: "01/02/2016",
            endDate: "24/11/2018",
            description:
              "<b>Technologien:</b> AngularJs, jQuery, Android Studio, HTML, CSS3, LESS, SASS, Git",
            skills: [
              "Baute eine SmartMessage-Marketingplattform auf, die es Kunden ermöglicht, verschiedene Arten von Benachrichtigungen wie E-Mail, Push-Benachrichtigungen und SMS an ihre eigenen Kunden zu senden.",
              "Erstellte Benutzeroberfläche für mobile Android-Anwendungen der Şekerbank, einer bedeutenden Bankinstitution in der Türkei.",
              "Eine Benutzeroberfläche für das Projekt yatsan.com.tr erstellt",
            ],
          },
          {
            companyName: "Argeset Yazılım",
            title: "Frontend Entwickler",
            startDate: "01/11/2014",
            endDate: "01/02/2016",
            description:
              "<b>Technologien:</b> jQuery, HTML, CSS3, LESS, Git, Selenium",
            skills: [
              "Eine Customer-Relation-Management-as-a-Service-Benutzeroberfläche erstellt, die es Kunden ermöglicht, die von diesem Projekt bereitgestellten CRM-Services zu nutzen.",
              "Entwicklung des Emissionsmessprogramms Ui, in dem Emissions-, Lärm- und Vibrationsmessungen autorisierter Labore des türkischen Umweltministeriums aufgezeichnet und dargestellt werden.",
              "Mobiltel B2B-Software, die von Türk Telekom-Händlern zum Aufgeben von Bestellungen verwendet wird",
            ],
          },
          {
            companyName: "Bosphorus Media",
            title: "Frontend Entwickler",
            startDate: "01/12/2012",
            endDate: "01/11/2014",
            description:
              "<b>Technologien:</b> jQuery, HTML, CSS3, Asp.net, Mssql",
            skills: [
              "Designte und baute maßgeschneiderte Webservices und UIs gemäß den speziellen Bedürfnissen von Kunden, die in verschiedenen Branchen als Full Stack Engineer tätig sind.",
            ],
          },
        ],
        projects: [
          {
            projectName: "Enerjisa",
            description:
              "Erstellte die Benutzeroberfläche der nationalen Elektrizitätsversorgungs- und -verteilungsinstitution (Enerjisa) der Türkei, die die verschiedenen Komponenten der Hauptwebsite und des Kundenportals umfasst, wo Benutzer ihre Rechnungen und Tickets verwalten können."+
              "<br><a href='http://ayedas.com.tr' target='_blank' style='margin-right: 15px;'>ayedas.com.tr</a><a href='http://baskentedas.com.tr' target='_blank' style='margin-right: 15px;'>baskentedas.com.tr</a><a href='https://toroslaredas.com.tr' target='_blank'>toroslaredas.com.tr</a><br><b class='mt-2 d-block'>Technologies:</b> jQuery, HTML, CSS3",
            projectType: "Freiberuflich",
          },
          {
            projectName: "Securitas",
            description:
              "Securitas hat ein Umfragemodul im Prozessmanagementportal des Sicherheitsunternehmens entwickelt"+
              "<br><b>Technologien:</b> React",
            projectType: "Freiberuflich",
          }
        ],
        skills: {
          technical: [
            "Vue/AngularJs",
            "JavaScript/Jquery",
            "TypeScript/ECMAScript",
            "Vuetify/Bootstrap",
            "Html5/Css3/BEM",
            "Less/Sass",
            "Vite/pnpm/npm",
            "Git/Jira/Confluence",
            "SCRUM/Agile" 
          ],
          professional: [
            "Teamspieler",
            "Gutes Zeitmanagement",
          ],
        },
        education: [
          {
            department: "Webdesign und Programmierung",
            schoolName: "Anadolu University",
            startDate: "2016",
            endDate: "Bis heute",
          }
        ],
        awards: [
        ],
        languages: [
          { language: "Englisch", level: "Mittelstufe" },
          { language: "Deutsch ", level: "Mittelstufe" },
        ],
        interests: ["Gleitschirmfliegen", "Reisen", "RC-Car"],
        socialNetworks: {
          github:{username:'salihangun', url: "https://github.com/salihangun" },
          linkedin:{username:'salihangun',
            url: "https://www.linkedin.com/in/salih-a-526087b2/",
          },
          xing:{
            username:'salihangun',
            url: "https://www.xing.com/profile/Salih_Anguen/cv",
          },
        },
      },
      cv_tr: {
        user: {
          title: "Kıdemli Ön Uç Geliştiricisi",
          name: "Salih Angün",
          tel: "+90 553 533 2209",
          email: "salihangun@gmail.com",
          website: "salihangun.com",
          location: "Ankara / Türkiye",
          imagePath:
            "https://avatars.githubusercontent.com/u/9803257?s=400&u=36b207d442972a72914fe3d915fa30dd6f405e0a&v=4",
          description:
            "Comodo Cyber Security'nin güvenlik araçlarını geliştiren Kıdemli Ön Uç Geliştiricisiyim. Her zaman en iyi uygulamaları takip ederim. Başarının anahtarının proaktiflik ve zamanın ötesinde olma olduğuna inanıyorum.",
        },
        workExperiences: [
          {
            companyName: "Comodo Cyber Security",
            title: "Kıdemli Ön Uç Geliştiricisi",
            startDate: "26/11/2018",
            endDate: "Halen",
            description:
              "<b>Teknoloji:</b> VueJS, AngularJs, Vuetify, HTML, CSS3, LESS, SASS, Git, jQuery, AWS",
            skills: ["Beş farklı Comodo projesinin tek bir platformda toplanmasını sağlayan Dragon Enterprise projesinin kullanıcı arayüzünü geliştirdim.",
              "Müşterinin ağındaki anormallikleri tespit etmek ve bunlara anında yanıt vermek için MDR araçları geliştirildi.",
              "Bir SOC (güvenlik operasyon merkezi) portalı kullanıcı arayüzü oluşturuldu.",
              "Bir SIEM portalı (güvenlik bilgileri ve olay yönetimi) kullanıcı arayüzü oluşturdu.",
              "SOC ve SIEM portallarından gelen verileri kullanan ve bunu analitik, grafik ve raporlama özellikleriyle sunan bir müşteri portalı kullanıcı arayüzü geliştirdi.",
              "Müşteriler için uç nokta koruması, olay ve yanıt yönetiminden ağ güvenliği izleme, IDS ve güvenlik açığı tarayıcılarına kadar hepsi bir arada platform çözümleri sunan bir web projesi olan Comodo SOCaaP UI'yi oluşturdu.",
              "Harici ve dahili ürünlerin satıldığı web tabanlı bir platform olan Comodo MarketPlace UI geliştirildi.",
              "NuMSP kullanıcıları için müşterilerinin donanım ve yazılım bileşenlerini yönetmeleri için bir web arayüzü olan NuInsight proje kullanıcı arayüzü geliştirildi.",],
          },
          {
            companyName: "Odc Business Solutions",
            title: "Ön Uç Geliştiricisi",
            startDate: "01/02/2016",
            endDate: "24/11/2018",
            description:
              "<b>Teknoloji:</b> AngularJs, jQuery, Android Studio, HTML, CSS3, LESS, SASS, Git",
            skills: [
              "Müşterilerin e-posta, anında iletme bildirimi, sms gibi çeşitli bildirim biçimlerini kendi müşterilerine göndermelerine olanak tanıyan bir Akıllı Mesaj Pazarlama Platformu oluşturdu.",
               "Türkiye'de önemli bir banka kuruluşu olan Şekerbank'ın Android mobil uygulama arayüzünü oluşturduk.",
               "yatsan.com.tr projesi kullanıcı arayüzü oluşturuldu",
            ],
          },
          {
            companyName: "Argeset Yazılım",
            title: "Ön Uç Geliştiricisi",
            startDate: "01/11/2014",
            endDate: "01/02/2016",
            description:
              "<b>Teknoloji:</b> jQuery, HTML, CSS3, LESS, Git, Selenium",
            skills: [
              "Müşterilerin bu proje tarafından sağlanan CRM hizmetlerinden yararlanmalarını sağlayan bir hizmet kullanıcı arayüzü olarak bir Müşteri İlişkileri Yönetimi oluşturdu.",
              "Türkiye Çevre Bakanlığı yetkili laboratuvarlarının emisyon, gürültü ve titreşim ölçümlerinin kaydedildiği ve gösterildiği Emisyon Ölçüm Programı Ui'yi geliştirdi.",
              "Türk Telekom bayilerinin sipariş vermek için kullandığı Mobiltel B2B yazılımı",
            ],
          },
          {
            companyName: "Bosphorus Media",
            title: "Ön Uç Geliştiricisi",
            startDate: "01/12/2012",
            endDate: "01/11/2014",
            description:
              "<b>Teknoloji:</b> jQuery, HTML, CSS3, Asp.net, Mssql",
            skills: [
              "Full Stack Developer olarak farklı sektörlerde faaliyet gösteren müşterilerin özel ihtiyaçlarına göre özel web servisleri ve kullanıcı arayüzleri tasarladı ve oluşturdu.",
            ],
          },
        ],
        projects: [
          {
            projectName: "Enerjisa",
            description:
              "Kullanıcıların faturalarını ve biletlerini yönetebilecekleri ana web sitesi ve müşteri portalının çeşitli bileşenlerini içeren Türkiye Ulusal Elektrik Dağıtım ve Dağıtım Kurumu'nun (Enerjisa) UI'sini oluşturdu."+
              "<br><a href='http://ayedas.com.tr' target='_blank' style='margin-right: 15px;'>ayedas.com.tr</a><a href='http://baskentedas.com.tr' target='_blank' style='margin-right: 15px;'>baskentedas.com.tr</a><a href='https://toroslaredas.com.tr' target='_blank'>toroslaredas.com.tr</a><br><b class='mt-2 d-block'>Technologies:</b> jQuery, HTML, CSS3",
            projectType: "Freelance",
          },
          {
            projectName: "Securitas",
            description:
              "Securitas, güvenlik şirketinin süreç yönetimi portalında anket modülü geliştirdi."+
              "<br><b>Teknoloji:</b> React",
            projectType: "Freelance",
          }
        ],
        skills: {
          technical: [
            "Vue/AngularJs",
            "JavaScript/Jquery",
            "TypeScript/ECMAScript",
            "Vuetify/Bootstrap",
            "Html5/Css3/BEM",
            "Less/Sass",
            "Vite/pnpm/npm",
            "Git/Jira/Confluence",
            "SCRUM/Agile" 
          ],
          professional: [
            "Takım oyuncusu",
            "İyi zaman yönetimi",
          ],
        },
        education: [
          {
            department: "Web Tasarım ve Kodlama",
            schoolName: "Anadolu Üniversitesi",
            startDate: "2016",
            endDate: "Halen",
          }
        ],
        awards: [
        ],
        languages: [
          { language: "İngilizce", level: "Orta" },
          { language: "Almanca ", level: "Orta" },
        ],
        interests: ["Yamaç Paraşütü", "Seyahat", "RC Araba"],
        socialNetworks: {
          github:{username:'salihangun', url: "https://github.com/salihangun" },
          linkedin:{username:'salihangun',
            url: "https://www.linkedin.com/in/salih-a-526087b2/",
          },
          xing:{
            username:'salihangun',
            url: "https://www.xing.com/profile/Salih_Anguen/cv",
          },
        },
      },
      cv: {

      }
    };
  },
  computed: {
    ...mapState(["selectedLanguage"]),
  },
  created() {
      this.cv = this.cv_en
  },
  methods: {
  },
   watch: {
    selectedLanguage: function () {
      this.$i18n.locale = this.selectedLanguage
      if(this.selectedLanguage == 'en'){
            this.cv = this.cv_en
      }else if(this.selectedLanguage == 'de'){
            this.cv = this.cv_de
      }else{
            this.cv = this.cv_tr
      }
    
    }
  },
};
</script>

<style scoped>
</style>
+