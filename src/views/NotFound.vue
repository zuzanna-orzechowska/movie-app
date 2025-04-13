<script setup>
import notFoundImg from '@/assets/notFoundImg.png';
</script>

<template>
  <div class="notFoundContainer">
    <h1 class="txt">Sorry, we don't know movie/series with this title 😿</h1>
    <img :src="notFoundImg" alt="Not Found - Idk grandpa meme" title="Image from imgflip.com">
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .notFoundContainer {
        display: flex;
        flex-direction: column;
        align-items: center;

        img{
            width: 30%;
        }

        img:hover {
            cursor: pointer;
            animation: shakeImg 1.5s cubic-bezier(0.5, 0, 0.75, 0) 0s 1 normal forwards;
        }

        .txt{
            font-weight: lighter;
            font-size: 1.2rem;
            margin-top: 2%;
        }
    }

    @keyframes shakeImg { //animation made with generator - https://webcode.tools/css-generator/keyframe-animation
	0%,
	100% {
		transform: rotate(0deg);
		transform-origin: 50% 50%;
	}

	10% {
		transform: rotate(8deg);
	}

	20%,
	40%,
	60% {
		transform: rotate(-10deg);
	}

	30%,
	50%,
	70% {
		transform: rotate(10deg);
	}

	80% {
		transform: rotate(-8deg);
	}

	90% {
		transform: rotate(8deg);
	}
}

@media (max-width: 435px) {
    .notFoundContainer {
        img{
            width: 80%;
        }

        .txt{
            font-size: 0.8rem;
            width: 80%;
            margin-bottom: 4%;
        }
    }
}
</style>