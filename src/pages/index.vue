
<template>
  <div class="page">
    <div class="video">
      <atom-video :muted="videoMuted" v-bind="videoNative" />
    </div>
    <div class="content">
      <molecule-contacts class="contacts" v-bind="contacts" />
      <atom-sound-button class="sound-button" :muted="videoMuted" @muted="videoMuted = $event" />
      <atom-headline critical class="headline" v-bind="headline" />
    </div>
  </div>
</template>

<script>
import MoleculeContacts from '@/components/molecules/Contacts';
import AtomSoundButton from '@/components/atoms/SoundButton';
import AtomHeadline from '@/components/atoms/Headline';
import AtomVideo from '@/components/atoms/Video';

export default {
  components: {
    MoleculeContacts,
    AtomSoundButton,
    AtomHeadline,
    AtomVideo
  },

  async asyncData () {
    const { default: poster } = await import('@/assets/videos/placeholder');

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
      // eslint-disable-next-line no-secrets/no-secrets
      videoUrl: 'https://youtu.be/vHT-ZXZvbVM',
      video: {
        id: 'R6Emy08zWTU',
        autoplay: true
      },
      videoNative: {
        playsinline: true,
        autoplay: true,
        poster,
        sources: [
          {
            // eslint-disable-next-line no-secrets/no-secrets
            src: require('@/assets/videos/210116_Showreel_webseite_EL.mp4'),
            media: '(min-width: 768px)'
          },
          {
            // eslint-disable-next-line no-secrets/no-secrets
            src: require('@/assets/videos/210116_Showreel_webseite_EL.mp4'),
            media: '(orientation: landscape)'
          },
          {
            // eslint-disable-next-line no-secrets/no-secrets
            src: require('@/assets/videos/210116_Showreel_webseite_EL_mobile.mp4')
          }
        ],
        mutedSources: [
          {
            // eslint-disable-next-line no-secrets/no-secrets
            src: require('@/assets/videos/210116_Showreel_webseite_EL_ohneSound.mp4'),
            media: '(min-width: 768px)'
          },
          {
            // eslint-disable-next-line no-secrets/no-secrets
            src: require('@/assets/videos/210116_Showreel_webseite_EL_ohneSound.mp4'),
            media: '(orientation: landscape)'
          },
          {
            // eslint-disable-next-line no-secrets/no-secrets
            src: require('@/assets/videos/210116_Showreel_webseite_EL_mobile_ohneSound.mp4')
          }
        ]
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

.mobile {
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  width: 100%;
  height: 100%;
}

.sound-button {
  position: absolute;
  bottom: 0;
  left: 0;

  /* display: none;

  @media (min-width: 1280px) {
    display: block;
  } */
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(230 / 414 * 100vw);
  pointer-events: auto;
  background: transparent;
  border: none;
  border-radius: 0;
  outline: none;
  transform: translate(-50%, -50%);
  appearance: none;

  @media (min-width: 568px) {
    width: 230px;
  }

  @media (min-width: 768px) {
    width: 290px;
  }

  @media (min-width: 1280px) {
    display: none;
  }
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
