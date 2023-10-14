<script>
import {
  ref, computed, onMounted, watch,
} from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'AppLink',
  props: {
    to: {
      type: [String, Object],
      required: true,
    },
    throttle: {
      type: Number,
      default: 0,
    },
    changed: {
      type: Number,
      default: 50,
    },
  },
  setup(props) {
    const route = useRoute();
    const isChanged = ref(false);
    const isThrottled = ref(true);
    const toPath = computed(() => (typeof props.to === 'string' ? props.to : props.to.path));

    const update = () => {
      const path = toPath.value;

      setTimeout(() => {
        isChanged.value = route.path === path;
      }, props.changed);
    };

    const handle = () => {
      if (isThrottled.value) {
        isThrottled.value = false;

        if (props.throttle > 0) {
          setTimeout(() => {
            isThrottled.value = true;
          }, props.throttle);
        } else {
          isThrottled.value = true;
        }
      }
    };

    onMounted(update);

    watch(() => route.path, update);

    return {
      isActive: computed(() => route.path === toPath.value),
      isChanged,
      isThrottled,
      handle,
    };
  },
};
</script>

<template>
  <router-link
    v-if="!isChanged"
    @click="handle"
    :to="to"
    :class="{
      'link': true,
      'link-active': isActive,
      'link-throttled': !isThrottled,
    }"
  >
    <slot></slot>
  </router-link>

  <span
    v-else
    :class="{
      'link': true,
      'link-active': isActive,
    }"
  >
    <slot></slot>
  </span>
</template>
