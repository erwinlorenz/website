<template>
  <div class="page">
    <atom-video class="video" :muted="videoMuted" v-bind="video" />
    <div class="content">
      <molecule-contacts class="contacts" v-bind="contacts" />
      <atom-sound-button :muted="videoMuted" @muted="videoMuted = $event" />
      <atom-headline critical class="headline" v-bind="headline" />
    </div>
  </div>
</template>

<script>
import MoleculeContacts from '@/components/molecules/Contacts';
import AtomVideo from '@/components/atoms/Video';
import AtomSoundButton from '@/components/atoms/SoundButton';
import AtomHeadline from '@/components/atoms/Headline';

export default {
  components: {
    MoleculeContacts,
    AtomVideo,
    AtomSoundButton,
    AtomHeadline
  },

  asyncData () {
    return {
      headline: {
        content: 'Erwin Lorenz<br><span>Art Director</span>'
      },
      contacts: {
        items: [
          { icon: 'mail', url: 'mailto: ' },
          { icon: 'linkedIn', url: '#' },
          { icon: 'xing', url: '#' }
        ]
      },
      video: {
        loop: true,
        autoplay: true,
        sources: [
          {
            src: require('@/assets/videos/210116_Showreel_webseite_EL.mp4')
          }
        ],
        poster: require('@/assets/videos/210116_Showreel_webseite_EL_Standbild.jpg')
      }
    };
  },
  data () {
    return {
      videoMuted: true
    };
  }
};
</script>

<style lang="postcss" scoped>

.page {
  position: relative;
  box-sizing: border-box;
  display: flex;
  padding: calc(50 / 414 * 100vw);
  color: #fff;
  background: #000;

  @media (min-width: 568px) {
    padding: 50px;
  }

  @media (min-width: 768px) {
    padding: 75px;
  }

  @media (min-width: 1200px) {
    padding: 100px;
  }
}

.content {
  position: relative;
  flex: 1;
  mix-blend-mode: exclusion;
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.contacts {
  position: absolute;
  right: 0;
  bottom: 0;
}

.headline {
  position: relative;
}

</style>
