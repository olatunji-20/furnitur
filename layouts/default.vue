<template>
  <div>
    <Navbar />
    <div>
      <slot />
    </div>
    <FootBar />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
import FootBar from "~/components/FootBar";

export default {
  setup() {},
  components: { Navbar, FootBar },
};
</script>