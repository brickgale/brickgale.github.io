<template>
    <div class="profile-con">
        <div class="pair-avatar">
            <img class="avatar wst" src="@/assets/monogram.png">
            <img class="avatar pair wst" src="@/assets/me_avatar.jpg">
        </div>
        <div class="name">Brian Monsales</div>
        <div class="job-desc">Fullstack Web Engineer</div>
        <div class="social-icons">
            <a v-for="item in socialIcons" :href="item.link" target="_blank">
                <i :class="item.class" aria-hidden="true"></i>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
    const socialIcons = [
        { 
          link: 'https://github.com/brickgale',
          class: 'fa fa-github'
        },
        { 
          link: 'https://www.facebook.com/brian.monsales',
          class: 'fa fa-facebook'
        },
        { 
          link: 'https://www.instagram.com/borntobeatroll',
          class: 'fa fa-instagram'
        },
        { 
          link: 'https://www.linkedin.com/in/brianmonsales',
          class: 'fa fa-linkedin'
        },
        { 
          link: 'https://dribbble.com/brickgale',
          class: 'fa fa-dribbble'
        },
    ]
</script>

<style lang="scss" src="./index.scss" />