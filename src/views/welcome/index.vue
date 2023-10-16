<script setup lang="ts">
import { useNav } from "@/layout/hooks/useNav";
import naming from "naming-style";
const { sentence } = naming;


const { title } = useNav();

defineOptions({
  name: "Welcome"
});
</script>

<template>
  <h1>{{ sentence(title) }}</h1>
</template>
