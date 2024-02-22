<template>
    <div class="flex flex-col h-screen">
        <div class="p-2 my-2 rounded-full hover:bg-theme w-min">
            <NuxtLink to="/">
                <div class="w-8 h-8">
                    logo
                </div>
            </NuxtLink>
        </div>

        <div class="mt-2 flex flex-col items-start gap-3">
            <SidebarLeftTab @on-click="onChangeSelected('home')" :active="(selectedPage === 'home') ? true : false">
                <template v-slot:icon>
                    <Icon name="iconoir:home-alt" size="1.5rem" />
                </template>
                <template v-slot:name>
                    Home
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab @on-click="onChangeSelected('explore')" :active="(selectedPage === 'explore') ? true : false">
                <template v-slot:icon>
                   <Icon name="iconoir:hashtag" size="1.5rem" />
                </template>
                <template v-slot:name>
                    Explore
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab @on-click="onChangeSelected('notif')" :active="(selectedPage === 'notif') ? true : false">
                <template v-slot:icon>
                   <Icon name="iconoir:bell-notification" size="1.5rem" />
                </template>
                <template v-slot:name>
                    Notifications
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab @on-click="onChangeSelected('message')" :active="(selectedPage === 'message') ? true : false">
                <template v-slot:icon>
                  <Icon name="iconoir:message-text" size="1.5rem" />
                </template>
                <template v-slot:name>
                   Messages
                </template>
            </SidebarLeftTab>

            <div class="hidden xl:block">
                <UIButton variant="light" size="lg" @on-click="emits('onThread')">
                    <span class="font-bold">
                       Say something offensive
                    </span>
                </UIButton>
            </div>

            <div class="flex items-center xl:hidden">
                <UIButton variant="light" size="icon" @on-click="emits('onThread')">
                     <Icon name="iconoir:edit-pencil" />
                </UIButton>
            </div>

        </div>

        <div class="flex flex-row items-center justify-center px-2 py-2 mx-auto mt-auto mb-5 rounded-full cursor-pointer w-14 xl:w-full hover:bg-gray-100 dark:hover:bg-theme-800"
            @click="emits('onLogout')">
            <div class="flex flex-row">
                <img :src="auth.authUser.value.profileImg" alt="do not forgor about this" class="w-10 h-10 rounded-full">
                <div class="flex-col hidden ml-2 xl:block">
                    <h1 class="text-sm font-bold text-gray-800 dark:text-white">
                        {{ auth.authUser.value.name }}
                    </h1>
                    <p class="text-sm text-gray-400">
                       {{ auth.authUser.value.handle }}
                    </p>
                </div>
            </div>
            <div class="hidden ml-auto xl:block">
                <div class="w-6 h-6">
                  <Icon name="iconoir:nav-arrow-down" />
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
const emits = defineEmits(['onThread', 'onLogout'])

const selectedPage = useState("selectedEnum", () => "home")

const onChangeSelected = (page) => {
    selectedPage.value = page
}

const auth = useAuth()

</script>
