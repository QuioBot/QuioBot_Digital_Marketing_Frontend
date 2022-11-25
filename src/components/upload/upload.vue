<template>
  <div >
                <b-form-group>
                    <b-form-file @change="onFileChange" id="file-default"></b-form-file>
                </b-form-group>
  </div>
</template>

<script>

import axios from 'axios'




export default {
  name: 'Chart',
  data: function() {
    return {
      loaded : false,
      
    
   
      }
    },
    methods: {
    onFileChange(e) {
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      axios
        .post("http://138.68.115.151/upload", formData)
        .then(() => {
          console.log("SUCCESS");
        })
        .catch(() => {
          console.log("FAILED");
        });
    },
  },

   
}
</script>