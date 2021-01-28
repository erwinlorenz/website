<template>
  <div class="page">
    <div class="video">
      <atom-youtube :mute="videoMuted" v-bind="video" />
    </div>
    <div class="content">
      <molecule-contacts class="contacts" v-bind="contacts" />
      <atom-sound-button :muted="videoMuted" @muted="videoMuted = $event" />
      <atom-headline critical class="headline" v-bind="headline" />
    </div>
  </div>
</template>

<script>
import MoleculeContacts from '@/components/molecules/Contacts';
import AtomYoutube from '@/components/atoms/Youtube';
import AtomSoundButton from '@/components/atoms/SoundButton';
import AtomHeadline from '@/components/atoms/Headline';

export default {
  components: {
    MoleculeContacts,
    AtomYoutube,
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
          { icon: 'mail', url: 'mailto: erwin.lorenz@gmail.com', title: 'Mail' },
          { icon: 'linkedIn', url: 'https://www.linkedin.com/in/erwin-lorenz-3a2323a2/', target: '_blank', title: 'LinkedIn', rel: 'noreferrer' },
          { icon: 'xing', url: 'https://www.xing.com/profile/Erwin_Lorenz/', target: '_blank', title: 'Xing', rel: 'noreferrer' }
        ]
      },
      video: {
        id: 'vHT-ZXZvbVM',
        autoplay: true
      }
    };
  },
  data () {
    return {
      videoMuted: true
    };
  },

  head () {
    return {
      link: [
        // { rel: 'preload', type: 'image/jpeg', href: require('@/assets/videos/210116_Showreel_webseite_EL_Standbild.jpg') }
      ]
    };
  }
};
</script>

<style lang="postcss" scoped>

.page {
  position: relative;
  box-sizing: border-box;
  display: flex;
  padding: calc(30 / 414 * 100vw);
  color: #fff;
  background: #000;

  @media (min-width: 568px) {
    padding: 30px;
  }

  @media (min-width: 768px) {
    padding: 30px;
  }

  @media (min-width: 1200px) {
    padding: 50px;
  }

  @media (min-width: 1680px) {
    padding: 60px;
  }
}

.content {
  position: relative;
  flex: 1;
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
