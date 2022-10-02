<template>
  <div class="projects">
    <Navbar />
    <h1 class="subtitle-1">Projects</h1>
    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.id">
          <v-expansion-panel-header>{{
            project.title
          }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card flat>
              <v-card-text class="px-4 py-0 grey--text">
                <div class="font-weight-bold">due by {{ project.due }}</div>
                <div>{{ project.content }}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
export default {
  name: "projects",
  components: { Navbar },
  data: () => ({
    projects: [
      {
        title: "Design a new website",
        person: "The Net Ninja",
        due: "1st Jan 2019",
        status: "ongoing",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
      },
      {
        title: "Code up the homepage",
        person: "Chun Li",
        due: "10th Jan 2019",
        status: "complete",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
      },
      {
        title: "Design video thumbnails",
        person: "Ryu",
        due: "20th Dec 2018",
        status: "complete",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
      },
      {
        title: "Create a community forum",
        person: "Gouken",
        due: "20th Oct 2018",
        status: "overdue",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
      },
    ],
  }),
  computed: {
    myProjects() {
      return this.projects.filter((project) => {
        return project.person === project.person;
      });
    },
  },
  methods: {},
};
</script>
<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.complete {
  background: #3cd1c2 !important;
}
.v-chip.ongoing {
  background: orange !important;
}
.v-chip.overdue {
  background: tomato !important;
}
</style>
