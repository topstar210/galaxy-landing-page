<script setup lang="ts"></script>

<template>
  <div class="the-mission py-10">
  <div class="bg-image-holder">
    <img
      src="~/assets/images/the-mission.jpg"
      alt="The Mission - Man with camera in hands"
      class="object-cover object-center bg-image"
    />
    </div>
    <div class="text-holder">
      <UITextHeadlineSub tag="H3" text="The Mission" class="" />
      <UITextHeadlineBig
        tag="H2"
        text="DRIVEN BY PERFECTION AND THE NEED TO BREAK IT"
        class="max-w-3xl"
      />
      <UITextParagraphDefault class="max-w-2xl mt-4">
        Highend. Glossy. Bla. Bla. Bla. Brands ästhetisch und aufregend in Szene
        setzen – können wir. Was uns wirklich antreibt, ist das Unerwartete.
        Content, der heraussticht. Menschen berühren und Geschichten erzählen,
        die etwas bedeuten. FORMAT 54 produziert Filme, die Spaß machen. In der
        Zusammenarbeit und beim Anschauen. Immer wieder. Versprochen.
      </UITextParagraphDefault>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>

  .the-mission {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative; 
    
    > .bg-image-holder {
      width: 50%;
      position: absolute;
      left: 0; 
      top: 0; 
      height: 100%;
      opacity: .3; 
      > .bg-image {
        margin-left: 0;
        margin-right: auto;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .text-holder {
      z-index: 9;
      position: relative;
      padding: 250px 20px ;

    }
  }

  @media (max-width: 768px) {
    .the-mission {
      flex-direction: column;
      > .bg-image-holder {
        width: 100%;
        position: relative;
        height: 50vh;
        > .bg-image {
          margin-left: auto;
          margin-right: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .text-holder {
        padding: 50px 20px ;
        margin-top: -13vh;
      }
    }
  }

</style>
