<template>
  <v-dialog width="500" v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn color="teal lighten-1" dark v-on="on">Create New Project</v-btn>
    </template>

    <v-card>
      <v-card-title>
        <h2>Create New Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            v-model="title"
            label="title"
            prepend-icon="folder"
            :rules="titleRules"
            required
          ></v-text-field>
          <v-textarea
            v-model="content"
            label="Content"
            prepend-icon="edit"
            :rules="contentRules"
            required
          ></v-textarea>
          <v-menu
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                :value="formattedDate"
                label="Date"
                prepend-icon="event"
                v-on="on"
                class="mb-3"
              ></v-text-field>
            </template>
            <v-date-picker v-model="due" @change="menu = false"></v-date-picker>
          </v-menu>
          <v-btn text class="success" @click="submit" :loading="loading"
            >Add Project</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { format, parseISO } from "date-fns";
import db from "@/fb";
export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
      loading: false,
      dialog: false,
      titleRules: [(v) => !!v || "Title is required"],
      contentRules: [
        (v) => !!v || "Content is required",
        (v) => v.length <= 10 || "Content must be less than 10 characters",
      ],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        const project = {
          title: this.title,
          content: this.content,
          due: format(parseISO(this.due), "do MMM yyyy"),
          person: "Chun Li",
          status: "ongoing",
        };
        db.collection("projects")
          .add(project)
          .then(() => {
            this.loading = false;
            this.dialog = false;
            this.$emit("projectAdd");
          });
      }
    },
  },
  computed: {
    formattedDate() {
      return this.due ? format(parseISO(this.due), "do MMM yyyy") : "";
    },
  },
};
</script>
