<template>
    <div  ref="dropdown" :class="classObject">
        <slot></slot>
        <ul :class="menuClasses">
            <li v-for="item in items" :key="item.name" @click="item.onClick">
                <font-awesome-icon :icon="item.icon" /> {{ item.name }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            items: Array,
            className: String,
            isOpen: Boolean,
            onClose: Function,
            icon: String
        },
        computed: {
            classObject() {
                return {
                    dropdown: true,
                    [this.className]: true
                }
            },
            menuClasses() {
                return {
                    "isOpen": this.isOpen,
                    "items": true
                }
            }
        },
        methods: {
            handleClick(e) {
                const container = this.$refs.dropdown;
                if (container.contains(e.target) && container !== e.target) {
                    return;
                }

                this.$emit('onClose');
            },
            addEvents() {
                document.addEventListener("click", this.handleClick, true);
            },
            removeEvents() {
                document.removeEventListener("click", this.handleClick, true);
            },
        },
         watch: { 
            isOpen: function(newVal) {
                newVal ? this.addEvents() : this.removeEvents();
            }
        },
        destroyed() {
            this.removeEvents();
        }
    }
</script>

<style scoped>
    .dropdown {
        background-color: white;
        position: relative;
    }

    .items {
        position: absolute;
        background-color: white;
        margin: 0;
        list-style-type: none;
        min-width: 200px;
        padding: 0;
        border: 1px solid e6e6e6;
        box-shadow: 0px 2px 18px rgb(0,0,0, 0.1);
        display:none;
    }

    .items.isOpen {
        display:block;
    }

    .items li {
        padding: 10px;
        cursor: pointer;
    }

    .items li:hover {
        background-color: #e6e6e6;
    }
</style>