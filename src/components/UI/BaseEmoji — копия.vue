<template>
  <div class="emoji_pick">
    <header>
        <p>Выбор эмодзи</p>
        <span ref="">{{ chosenEmoji }}</span>
    </header>
    <main>
        <ul
        v-for="k in emojiCats"
        :key = k>
            <small>{{ k }}</small>
            <section>
                <li
                @mouseenter="chosenEmoji = emo"
                @click="chooseEmoji(emo)"
                v-for="emo in getCategoryEmojis(k)"
                :key="emo">
                {{ emo }}
                </li>
            </section>
        </ul>
    </main>
  </div>
</template>

<script>
import emoji from '@/utils/emoji';
export default {
    data() {
        return {
            chosenEmoji: ''
        }
    },
    mounted() {
        const emojiList = emoji['Природа'].split(' ')
        const randInd = Math.floor(Math.random() * emojiList.length)
        this.chosenEmoji = emojiList[randInd]
    },
    methods: {
        getCategoryEmojis(cat) {
            return emoji[cat].split(' ')
        },
        chooseEmoji(emo){
            this.$emit('pushEmoji', emo)
        }
    },
    computed: {
        emojiCats() {
            return Object.keys(emoji)
        }
    }
}
</script>

<style lang="scss" scoped>
    .emoji_pick {
        background-color: white;
        width: 280px;
        height: 430px;
        overflow: hidden;
        display: flex;
        flex-flow: column nowrap;
        border-radius: 4px;
        header {
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            p {
                margin: 0;
                padding: 0;
            }
        }
        main {
            overflow-x: hidden;
            overflow-y: scroll;
            display: flex;
            flex-flow: column nowrap;
            gap: 20px;
            &::-webkit-scrollbar{
                width: 0;
            }
            section {
                border-top: 1px solid $light_grey_color;
                padding-top: 10px;
                display: grid;
                grid-template-columns: repeat(7, 1fr);
                grid-column-gap: 5px;
                grid-row-gap: 10px;
                li {
                    cursor: pointer;
                    transition: .1s;
                    &:hover {
                        transform: scale(1.1);
                    }
                }
            }
            ul {
                small {
                    display: block;
                    padding-bottom: 10px;
                }
            }
        }
    }
</style>