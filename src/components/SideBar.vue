<template>
    <div id="sidebar" class="app-sidebar">

        <div class="app-sidebar-content" data-scrollbar="true" data-height="100%">

            <div class="menu" v-for="(item, i) in menu" :key="i">
                <div class="menu-header">{{ item.heading }}</div>

                <div class="menu-item" v-for="(items, i) in item.data" :key="i"
                    :class="items.subChild.length > zeroLength ? 'has-sub' : ''">
                    <RouterLink :to="items.link" class="menu-link">
                        <span class="menu-icon">
                            <i class="bi bi-envelope"></i>
                        </span>
                        <span class="menu-text">{{ items.name }}</span>
                        <span v-if="items.subChild.length > zeroLength" class="menu-caret"><b class="caret"></b></span>
                    </RouterLink>
                    <div class="menu-submenu">
                        <div v-for="(subItem, i) in items.subChild" :key="i" class="menu-item">
                            <RouterLink :to="subItem.link" class="menu-link">
                                <span class="menu-text">{{ subItem.name }}</span>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>

            <div class="p-3 px-4 mt-auto">
                <a href="documentation/index.html" target="_blank" class="btn d-block btn-outline-theme">
                    <i class="fa fa-code-branch me-2 ms-n2 opacity-5"></i> Documentation
                </a>
            </div>
        </div>

    </div>
</template>
<script>
import { ZERO } from '../constants/TheConstants';
import { mainMenu } from '../helpers/sidebar';

export default {

    data() {
        return {
            menu: mainMenu,
            zeroLength: ZERO,


        }

    },
}
</script>